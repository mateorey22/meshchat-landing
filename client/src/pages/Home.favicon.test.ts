import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../../..");
const html = readFileSync(resolve(root, "client/index.html"), "utf8");
const manifest = readFileSync(resolve(root, "client/public/manifest.webmanifest"), "utf8");

const publicFile = (name: string) => resolve(root, "client/public", name);

describe("favicon et identité publique", () => {
  it("expose un favicon local carré et des icônes de manifeste indexables", () => {
    expect(html).toContain('rel="icon" href="/favicon.ico"');
    expect(html).toContain('rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png"');
    expect(html).toContain('rel="manifest" href="/manifest.webmanifest"');
    expect(html).toContain("https://mateorey22.github.io/threnyx-landing/icons/icon-512.png");
    expect(manifest).toContain('"src": "/icons/icon-192.png"');
    expect(manifest).toContain('"src": "/icons/icon-512.png"');
    for (const name of [
      "favicon.ico",
      "favicon-48.png",
      "favicon-96.png",
      "favicon-144.png",
      "icons/icon-192.png",
      "icons/icon-512.png",
    ]) {
      expect(existsSync(publicFile(name))).toBe(true);
    }
  });
});
