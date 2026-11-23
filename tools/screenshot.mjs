// Full-page screenshots via headless Chrome (nothing to install).
// Usage: node tools/screenshot.mjs <url> <out.png> <width> <height> [mobile]
// Writes out-0.png, out-1.png, ... in 2000px chunks. Run it from a scratch folder:
// it creates prof-* Chrome profile folders in the current directory.
import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";

const [url, out, w = "1440", h = "900", mobile] = process.argv.slice(2);
const port = 9300 + Math.floor(Math.random() * 500);
const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
  "--headless=new", "--disable-gpu", "--hide-scrollbars", `--remote-debugging-port=${port}`,
  `--user-data-dir=${process.cwd()}/prof-${port}`, "about:blank",
], { stdio: "ignore" });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let target;
for (let i = 0; i < 50 && !target; i++) {
  await sleep(200);
  try {
    const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
    target = list.find((t) => t.type === "page");
  } catch {}
}
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener("open", r));
let id = 0;
const pending = new Map();
ws.addEventListener("message", (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg.result); pending.delete(msg.id); }
});
const send = (method, params = {}) =>
  new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const evaluate = async (expression) =>
  (await send("Runtime.evaluate", { expression, returnByValue: true })).result.value;

await send("Emulation.setDeviceMetricsOverride", { width: +w, height: +h, deviceScaleFactor: 1, mobile: !!mobile });
await send("Page.enable");
await send("Page.navigate", { url });
await sleep(2500);

// Scroll through the page so scroll-reveal animations fire, then go back to the top.
// "instant" matters: the site uses scroll-behavior: smooth, which would swallow fast scrolls.
const total = await evaluate("document.documentElement.scrollHeight");
for (let y = 0; y < total; y += +h / 2) {
  await evaluate(`window.scrollTo({ top: ${y}, behavior: "instant" })`);
  await sleep(200);
}
await evaluate(`window.scrollTo({ top: 0, behavior: "instant" })`);
await sleep(1200);

const overflow = await evaluate(
  "document.documentElement.scrollWidth > window.innerWidth ? 'H-OVERFLOW ' + document.documentElement.scrollWidth : 'ok'",
);
const chunk = 2000;
let n = 0;
for (let y = 0; y < total; y += chunk, n++) {
  const shot = await send("Page.captureScreenshot", {
    format: "png", captureBeyondViewport: true,
    clip: { x: 0, y, width: +w, height: Math.min(chunk, total - y), scale: 1 },
  });
  writeFileSync(out.replace(".png", `-${n}.png`), Buffer.from(shot.data, "base64"));
}
console.log(out, "height", total, overflow, `${n} chunks`);
ws.close();
chrome.kill();
