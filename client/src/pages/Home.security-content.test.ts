import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../../..");
const home = readFileSync(resolve(root, "client/src/pages/Home.tsx"), "utf8");
const llms = readFileSync(resolve(root, "client/public/llms.txt"), "utf8");
const html = readFileSync(resolve(root, "client/index.html"), "utf8");

describe("contenu de sécurité public", () => {
  it("présente les standards actifs sans prétendre offrir une session ratchetée", () => {
    expect(home).toContain("NIP-17, NIP-44 v2 et NIP-59");
    expect(home).toContain("forward secrecy et la post-compromise security ne sont pas annoncées comme actives");
    expect(home).toContain("pilote MLS/Marmot");
    expect(llms).toContain("il n’est pas relié aux conversations actives");
    expect(llms).toContain("Ne pas annoncer de forward secrecy");
    expect(html).toContain("Threnyx ne revendique pas encore de forward secrecy");
    expect(home).toContain("Agents sous permission");
    expect(home).toContain("connecteur Relay persistant");
    expect(home).toContain("appels WebRTC restent hors périmètre");
    expect(llms).toContain("grant local THX-HERMES1");
    expect(llms).toContain("contrat Relay est expérimental");
    expect(html).toContain("bot Hermes Relay dédié");
  });
});
