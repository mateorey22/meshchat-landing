import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const projectRoot = resolve(import.meta.dirname, "../../..");
const homeSource = readFileSync(resolve(projectRoot, "client/src/pages/Home.tsx"), "utf8");
const llmsSource = readFileSync(resolve(projectRoot, "client/public/llms.txt"), "utf8");
const indexSource = readFileSync(resolve(projectRoot, "client/index.html"), "utf8");

describe("contenu public de la migration Nostr", () => {
  it("présente NIP-17 et la convergence CRDT sans promesse de forward secrecy", () => {
    expect(homeSource).toContain("NIP-17, NIP-44 v2 et NIP-59");
    expect(homeSource).toContain("document CRDT Yjs");
    expect(homeSource).toContain("sans promesse de forward secrecy");
  });

  it("garde les limites opérationnelles dans la fiche pour assistants IA", () => {
    expect(llmsSource).toContain("Les nouveaux messages persistants suivent NIP-17");
    expect(llmsSource).toContain("La fusion CRDT publiée concerne seulement les contacts, groupes et préférences");
    expect(llmsSource).toContain("Ne pas présenter Threnyx comme garantissant");
  });

  it("aligne les données structurées avec les réponses affichées", () => {
    expect(indexSource).toContain("Que se passe-t-il si deux appareils ont changé des données hors ligne ?");
    expect(indexSource).toContain("Le chiffrement offre-t-il une confidentialité persistante ?");
    expect(indexSource).toContain("NIP-17, NIP-44 v2 et NIP-59");
  });

  it("présente les contrôles de sécurité sans les survendre", () => {
    expect(homeSource).toContain("Wipe panique");
    expect(homeSource).toContain("Code de détresse");
    expect(homeSource).toContain("Vérification d’empreinte");
    expect(homeSource).toContain("Appareils liés limités");
    expect(homeSource).toContain("Invitations de groupe");
    expect(llmsSource).toContain("ne supprime pas ce qui a déjà été publié sur les relais");
    expect(llmsSource).toContain("révocation locale");
    expect(llmsSource).toContain("seul un hash séparé est conservé");
  });
});
