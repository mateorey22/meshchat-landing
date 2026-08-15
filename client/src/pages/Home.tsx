/**
 * Terminal de Confiance — landing Threnyx : noir volcanique, parchemin minéral,
 * cuivre signal et narration en fil de transmission. Chaque détail doit renforcer
 * la sensation d’une messagerie calme, souveraine et lisible.
 */
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Github,
  HelpCircle,
  KeyRound,
  LockKeyhole,
  Menu,
  MessageSquareText,
  Network,
  Radio,
  ShieldCheck,
  Smartphone,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const APP_URL = "https://mateorey22.github.io/threnyx/";
const markUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/92875856/eIpWjvCzmTfyQygq.png";
const heroImage = "https://files.manuscdn.com/user_upload_by_module/session_file/92875856/mKGaociWMqfNBuFS.jpg";
const privacyImage = "https://files.manuscdn.com/user_upload_by_module/session_file/92875856/xayYzWyvYgnXzRpK.jpg";
const callImage = "https://files.manuscdn.com/user_upload_by_module/session_file/92875856/oUazlhvpiIJBqKik.jpg";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const faqs = [
  {
    question: "Threnyx demande-t-il un numéro de téléphone ?",
    answer: "Non. Threnyx crée une identité locale sur votre appareil pour commencer une conversation. Vous partagez ensuite votre point de contact par QR, lien direct ou carte NFC compatible, selon ce que vous choisissez.",
  },
  {
    question: "Les messages Threnyx sont-ils privés ?",
    answer: "Le contenu des messages et médias est chiffré avant de circuler. Threnyx vise aussi à limiter les informations demandées au départ : pas de synchronisation de contacts imposée et pas de numéro de téléphone nécessaire. Aucun outil ne rend toutefois une personne invisible à lui seul : le navigateur, l’appareil, le réseau et les usages comptent aussi.",
  },
  {
    question: "Threnyx est-il une application ou un site web ?",
    answer: "C’est une application web installable. Sur un navigateur compatible, notamment Chrome Android, vous pouvez l’installer pour l’ouvrir comme une application. Elle propose les messages, images, notes vocales et appels audio ou vidéo.",
  },
  {
    question: "Comment ajouter un contact sur Threnyx ?",
    answer: "Vous choisissez votre méthode : QR code, lien direct ou tag NFC NDEF. Les cartes NFC physiques sont pratiques pour transmettre une carte de contact ; entre deux téléphones, le QR code reste le moyen direct prévu.",
  },
  {
    question: "Pour qui Threnyx peut-il être utile ?",
    answer: "Threnyx s’adresse aux personnes qui souhaitent commencer une conversation sans fournir de numéro de téléphone ni importer leur carnet d’adresses, tout en gardant une interface de messagerie, de partage et d’appel au même endroit.",
  },
  {
    question: "Puis-je retrouver mon identité sur un nouvel appareil ?",
    answer: "Constellation Vault propose un snapshot chiffré publié manuellement sur plusieurs relais, puis une restauration contrôlée depuis un nouvel appareil. Une clé NFC peut porter la clé de reprise, mais un tag NDEF classique est un objet à protéger : il peut être copié. La synchronisation automatique en arrière-plan et la disponibilité des gros médias ne sont pas garanties dans cette première version.",
  },
  {
    question: "Que se passe-t-il si deux appareils ont changé des données hors ligne ?",
    answer: "Pour les snapshots Constellation compatibles, Threnyx fusionne automatiquement les contacts, groupes et préférences grâce à un document CRDT local. Les messages, appels, invitations, suppressions et gros médias ne font pas partie de cette fusion automatique à ce stade.",
  },
  {
    question: "Le chiffrement offre-t-il une confidentialité persistante ?",
    answer: "Les nouveaux messages persistants suivent NIP-17, avec NIP-44 v2 et NIP-59. Cette évolution améliore la standardisation et l’interopérabilité, mais elle n’apporte pas de forward secrecy : Threnyx ne la revendique pas.",
  },
];

function AsciiNetwork() {
  return (
    <div className="ascii-network" aria-hidden="true">
      <span className="ascii-node node-a">●</span>
      <span className="ascii-node node-b">◎</span>
      <span className="ascii-node node-c">●</span>
      <span className="ascii-node node-d">◌</span>
      <span className="ascii-link link-a">╲╲╲╲╲╲╲╲</span>
      <span className="ascii-link link-b">╱╱╱╱╱╱╱╱</span>
      <span className="ascii-link link-c">··········</span>
      <span className="ascii-code code-a">01:37:08 / ROUTE OK</span>
      <span className="ascii-code code-b">◈ PEER VERIFIED</span>
    </div>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      <p>{children}</p>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="page-grain" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Threnyx, accueil">
          <img src={markUrl} alt="" />
          <span>THRENYX<em>///</em></span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navigation principale">
          <a href="#pourquoi" onClick={closeMenu}>Pourquoi</a>
          <a href="#protocole" onClick={closeMenu}>Comment ça marche</a>
          <a href="#constellation" onClick={closeMenu}>Continuité</a>
          <a href="#comparatif" onClick={closeMenu}>Comparatif</a>
          <a href="#questions" onClick={closeMenu}>Questions</a>
          <a className="nav-cta" href={APP_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Ouvrir l’app <ArrowUpRight size={15} />
          </a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-dark">
          <div className="hero-backdrop" style={{ backgroundImage: `url(${heroImage})` }} />
          <AsciiNetwork />
          <div className="hero-copy">
            <motion.p className="eyebrow hero-eyebrow" initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.55 }}>
              <span className="live-dot" /> RÉSEAU PRIVÉ · SANS NUMÉRO DE TÉLÉPHONE
            </motion.p>
            <motion.h1 initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.6, delay: 0.08 }}>
              Vos conversations<br /><i>ne sont pas</i> un produit.
            </motion.h1>
            <motion.p className="hero-lead" initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.6, delay: 0.16 }}>
              Threnyx est une messagerie privée construite pour échanger, appeler et partager sans confier votre identité à une plateforme centrale.
            </motion.p>
            <motion.div className="hero-actions" initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.6, delay: 0.24 }}>
              <a className="button button-primary" href={APP_URL} target="_blank" rel="noreferrer">Essayer Threnyx <ArrowUpRight size={19} /></a>
              <a className="button button-quiet" href="#pourquoi">Voir comment ça protège <ChevronDown size={18} /></a>
            </motion.div>
          </div>
          <div className="hero-status" aria-label="Fonctionnalités disponibles">
            <span><Check size={14} /> CHIFFRÉ</span>
            <span><Check size={14} /> P2P SI POSSIBLE</span>
            <span><Check size={14} /> OPEN WEB APP</span>
          </div>
          <div className="scroll-signal"><span /> DESCENDRE POUR SUIVRE LE SIGNAL</div>
        </section>

        <section className="manifesto section-light" id="pourquoi">
          <div className="section-inner split-intro">
            <SectionLabel number="01">LE POINT DE DÉPART</SectionLabel>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} transition={{ duration: 0.55 }}>
              <h2>La vie privée n’est pas une option de réglage.</h2>
              <p className="large-copy">Elle doit être le point de départ. Threnyx crée une identité locale, chiffre le contenu et ne demande pas votre numéro pour commencer une conversation.</p>
            </motion.div>
          </div>
          <div className="principles-grid section-inner">
            {[
              { icon: KeyRound, title: "Votre identité, chez vous", text: "Une paire de clés est créée sur votre appareil. Votre identité ne dépend pas d’un compte central à retrouver." },
              { icon: LockKeyhole, title: "Le contenu reste chiffré", text: "Les messages et médias sont protégés avant de circuler. Les relais servent à livrer, pas à lire." },
              { icon: Network, title: "Un réseau qui ne vous profile pas", text: "Pas de carnet d’adresses imposé, pas de numéro affiché à vos contacts, pas de profil public requis." },
            ].map((item, index) => {
              const Icon = item.icon;
              return <motion.article className="principle" key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} transition={{ duration: 0.5, delay: index * 0.08 }}>
                <div className="principle-icon"><Icon size={23} /></div>
                <span className="item-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>;
            })}
          </div>
        </section>

        <section className="privacy-statement section-dark">
          <div className="privacy-image-wrap"><img src={privacyImage} alt="Un cœur lumineux protégé par des couches de réseau abstraites" /></div>
          <div className="privacy-copy">
            <SectionLabel number="02">CE QUE VOUS NE DONNEZ PAS</SectionLabel>
            <h2>Pas besoin de livrer votre réseau social pour envoyer « salut ».</h2>
            <p>Threnyx remplace le numéro de téléphone par une identité cryptographique. Vous choisissez comment partager ce point de contact : QR, carte NFC ou lien direct.</p>
            <div className="data-list">
              <div><span>—</span><p><strong>Pas de numéro de téléphone</strong><br />Votre identité ne commence pas par une SIM.</p></div>
              <div><span>—</span><p><strong>Pas de synchronisation de contacts</strong><br />Vous ajoutez les personnes que vous décidez d’ajouter.</p></div>
              <div><span>—</span><p><strong>Pas de fil public imposé</strong><br />Vos échanges ne deviennent pas une surface publicitaire.</p></div>
            </div>
          </div>
        </section>

        <section className="protocol section-light" id="protocole">
          <div className="section-inner protocol-header">
            <SectionLabel number="03">SUIVRE UN MESSAGE</SectionLabel>
            <h2>Simple à utiliser.<br />Sérieux sous le capot.</h2>
            <p>Pas besoin de comprendre le chiffrement pour protéger une conversation. Voici ce que Threnyx fait pour vous.</p>
          </div>
          <div className="transmission-line section-inner">
            {[
              ["01", "Créez votre identité", "Une identité locale est générée sur votre appareil. Vous pouvez la protéger par empreinte ou Face ID."],
              ["02", "Ajoutez un contact", "Partagez votre carte par QR, lien ou carte NFC. Vous restez en contrôle de qui entre dans votre réseau."],
              ["03", "Échangez directement", "Les nouveaux messages persistants suivent les formats Nostr NIP-17, NIP-44 v2 et NIP-59. Quand le réseau le permet, l’échange bascule directement entre les appareils."],
              ["04", "Gardez le rythme", "Messages, photos, notes vocales et appels fonctionnent dans la même interface, sans ajouter d’exposition inutile."],
            ].map(([num, title, text], index) => <motion.article className="transmission-step" key={num} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={reveal} transition={{ duration: 0.45, delay: index * 0.08 }}>
              <span className="step-num">{num}</span><div className="step-socket"><i /></div><div><h3>{title}</h3><p>{text}</p></div>
            </motion.article>)}
          </div>
        </section>

        <section className="feature-call section-dark">
          <div className="feature-call-inner section-inner">
            <div className="call-copy">
              <p className="eyebrow"><Radio size={15} /> QUAND UN TEXTE NE SUFFIT PAS</p>
              <h2>Parler, voir,<br /><i>rester direct.</i></h2>
              <p>Les appels audio et vidéo suivent la même idée : établir le chemin le plus direct possible entre les personnes, avec une signalisation chiffrée.</p>
              <div className="inline-features"><span><MessageSquareText size={16} /> Notes vocales</span><span><Smartphone size={16} /> PWA installable</span></div>
            </div>
            <div className="call-image-wrap"><img src={callImage} alt="Deux sources de lumière abstraites reliées par un fil de cuivre" /><div className="call-label">DIRECT LINK // READY</div></div>
          </div>
        </section>

        <section className="constellation section-light" id="constellation">
          <div className="section-inner constellation-head">
            <SectionLabel number="04">CONSTELLATION VAULT · BÊTA TECHNIQUE</SectionLabel>
            <div>
              <h2>Votre ligne ne devrait pas s’arrêter<br /><i>à un seul appareil.</i></h2>
              <p>Constellation Vault prépare une continuité chiffrée entre vos appareils. Vous publiez volontairement un snapshot : Threnyx le chiffre, le fragmente et attend la confirmation de plusieurs relais avant de le considérer comme répliqué. Lorsque des snapshots compatibles divergent hors ligne, les données de contacts, groupes et préférences peuvent maintenant converger localement.</p>
            </div>
          </div>
          <div className="constellation-grid section-inner">
            {[
              { code: "01", icon: LockKeyhole, title: "D’abord chiffrer", text: "Le snapshot est chiffré avant publication. Les relais reçoivent des fragments opaques, pas une base de données lisible." },
              { code: "02", icon: Network, title: "Puis répartir et converger", text: "Un manifeste signé indique quels fragments restaurer. Pour les branches compatibles, un document CRDT Yjs fusionne localement contacts, groupes et préférences au lieu d’écraser un ajout hors ligne." },
              { code: "03", icon: KeyRound, title: "Reprendre avec prudence", text: "Une clé NFC de récupération peut chercher le snapshot depuis un appareil neuf, puis créer une nouvelle protection locale. Un tag NFC NDEF peut être copié : gardez-le comme une clé, jamais comme un badge." },
            ].map((item, index) => {
              const Icon = item.icon;
              return <motion.article className="constellation-card" key={item.code} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} transition={{ duration: 0.5, delay: index * 0.08 }}>
                <span className="constellation-code">{item.code}</span><div className="constellation-icon"><Icon size={21} /></div><h3>{item.title}</h3><p>{item.text}</p>
              </motion.article>;
            })}
          </div>
          <div className="section-inner constellation-note"><span>LECTURE HONNÊTE</span><p>Le snapshot, la restauration depuis plusieurs relais et le parcours sur un tag NFC physique Chrome Android ont été validés avec une identité de contrôle. Les nouveaux messages persistants suivent NIP-17, NIP-44 v2 et NIP-59, sans promesse de forward secrecy. La publication reste manuelle ; une PWA ne garantit pas une synchronisation en arrière-plan. La fusion CRDT ne couvre pas encore les messages, suppressions ni les gros médias, qui ne sont pas promis comme disponibles durablement.</p></div>
        </section>

        <section className="compare section-light" id="comparatif">
          <div className="section-inner compare-intro">
            <SectionLabel number="05">FAIRE UN CHOIX ÉCLAIRÉ</SectionLabel>
            <h2>Ce qui change, concrètement.</h2>
            <p>WhatsApp propose aussi du chiffrement de contenu. Threnyx cherche à réduire davantage les informations à fournir pour commencer : pas de numéro à partager, pas de carnet d’adresses à importer et une identité locale par défaut.</p>
          </div>
          <div className="comparison-table section-inner" role="table" aria-label="Comparatif entre Threnyx et une messagerie liée au téléphone">
            <div className="comparison-row comparison-head" role="row"><span role="columnheader">VOUS COMMENCEZ AVEC</span><span role="columnheader">THRENYX</span><span role="columnheader">MESSAGERIE LIÉE AU TÉLÉPHONE</span></div>
            {[
              ["Identité", "Une clé publique créée localement", "Un numéro de téléphone"],
              ["Ajout de contacts", "QR, lien ou tag NFC choisi par vous", "Souvent via numéro et répertoire"],
              ["Réseau", "Relais de livraison + P2P quand disponible", "Infrastructure de plateforme"],
              ["Point de contrôle", "Votre appareil et vos choix", "Un compte lié à un service central"],
            ].map(([label, mesh, other]) => <div className="comparison-row" role="row" key={label}><span role="cell">{label}</span><span role="cell"><Check size={16} /> {mesh}</span><span role="cell">{other}</span></div>)}
          </div>
          <p className="comparison-note section-inner">Threnyx ne promet pas l’invisibilité totale : aucun outil ne le peut seul. Il vous aide à limiter les informations que vous donnez dès le départ.</p>
        </section>

        <section className="faq section-light" id="questions">
          <div className="section-inner faq-head">
            <SectionLabel number="06">QUESTIONS CLAIRES</SectionLabel>
            <div>
              <h2>Ce qu’il faut savoir<br /><i>avant d’ouvrir la ligne.</i></h2>
              <p>Des réponses directes sur l’identité, la confidentialité, l’installation et le partage de contacts.</p>
            </div>
          </div>
          <div className="section-inner faq-list">
            {faqs.map((item, index) => (
              <details className="faq-item" key={item.question}>
                <summary><span>0{index + 1}</span><strong>{item.question}</strong><HelpCircle size={19} aria-hidden="true" /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta section-dark">
          <AsciiNetwork />
          <div className="final-cta-inner">
            <p className="eyebrow"><Zap size={15} /> VOTRE LIGNE, VOTRE RYTHME</p>
            <h2>Envoyez le premier message<br />sans ouvrir une nouvelle piste.</h2>
            <a className="button button-primary" href={APP_URL} target="_blank" rel="noreferrer">Ouvrir Threnyx <ArrowUpRight size={19} /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#top"><img src={markUrl} alt="" /><span>THRENYX<em>///</em></span></a>
        <p>MESSAGERIE PRIVÉE · PWA · NOSTR-MESH</p>
        <a className="footer-link" href="https://github.com/mateorey22/threnyx" target="_blank" rel="noreferrer"><Github size={16} /> Voir le code</a>
      </footer>
    </div>
  );
}
