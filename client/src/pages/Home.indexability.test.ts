import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../../..");
const html = readFileSync(resolve(root, "client/index.html"), "utf8");
const robots = readFileSync(resolve(root, "client/public/robots.txt"), "utf8");
const sitemap = readFileSync(resolve(root, "client/public/sitemap.xml"), "utf8");

describe("indexabilité de la landing", () => {
  it("expose le contenu essentiel avant le rendu JavaScript", () => {
    expect(html).toContain('<main id="seo-fallback">');
    expect(html).toContain("Votre ligne. Vos règles.");
    expect(html).toContain("NIP-17, NIP-44 v2 et NIP-59");
  });

  it("conserve des directives d’exploration et une URL canonique cohérentes", () => {
    expect(html).toContain('name="robots" content="index, follow');
    expect(html).not.toMatch(/name="robots" content="[^"\n]*noindex/i);
    expect(html).toContain('rel="canonical" href="https://mateorey22.github.io/threnyx-landing/"');
    expect(robots).toContain("User-agent: Googlebot\nAllow: /");
    expect(sitemap).toContain("https://mateorey22.github.io/threnyx-landing/");
    expect(sitemap).toContain("<lastmod>2026-08-19</lastmod>");
  });
});
