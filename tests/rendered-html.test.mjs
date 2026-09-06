import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders confirmed GSJA CiTi information in the production homepage", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  // Production output must not advertise itself as an internal development preview.
  assert.doesNotMatch(html, developmentPreviewMeta);
  assert.match(html, /Parsaoran Pasaribu, S\.Th\., M\.PdK/);
  assert.match(html, /Jl\. Ir\. H\. Juanda No\. 5/);
  assert.match(html, /Cempata Putih/);
  assert.match(html, /10\.00 WIB/);
  assert.match(html, /19\.00 WIB/);
  assert.doesNotMatch(html, /Gideon Simanjuntak|Amanda Zevannya|Kelapa Gading|Mega Bekasi|AXA Tower|Living World/);
});
