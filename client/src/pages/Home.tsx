/**
 * Terminal de Confiance — landing MeshChat : noir volcanique, parchemin minéral,
 * cuivre signal et narration en fil de transmission. Chaque détail doit renforcer
 * la sensation d’une messagerie calme, souveraine et lisible.
 */
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Github,
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

const APP_URL = "https://mateorey22.github.io/zenithchat/";
const markUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/92875856/yKdeYtsrEZUCUkbp.png";
const heroImage = "https://files.manuscdn.com/user_upload_by_module/session_file/92875856/mKGaociWMqfNBuFS.jpg";
const privacyImage = "https://files.manuscdn.com/user_upload_by_module/session_file/92875856/xayYzWyvYgnXzRpK.jpg";
const callImage = "https://files.manuscdn.com/user_upload_by_module/session_file/92875856/oUazlhvpiIJBqKik.jpg";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

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
        <a className="brand" href="#top" aria-label="MeshChat, accueil">
          <img src={markUrl} alt="" />
          <span>MESHCHAT<em>///</em></span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navigation principale">
          <a href="#pourquoi" onClick={closeMenu}>Pourquoi</a>
          <a href="#protocole" onClick={closeMenu}>Comment ça marche</a>
          <a href="#comparatif" onClick={closeMenu}>Comparatif</a>
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
              MeshChat est une messagerie privée construite pour échanger, appeler et partager sans confier votre identité à une plateforme centrale.
            </motion.p>
            <motion.div className="hero-actions" initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.6, delay: 0.24 }}>
              <a className="button button-primary" href={APP_URL} target="_blank" rel="noreferrer">Essayer MeshChat <ArrowUpRight size={19} /></a>
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
              <p className="large-copy">Elle doit être le point de départ. MeshChat crée une identité locale, chiffre le contenu et ne demande pas votre numéro pour commencer une conversation.</p>
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
            <p>MeshChat remplace le numéro de téléphone par une identité cryptographique. Vous choisissez comment partager ce point de contact : QR, carte NFC ou lien direct.</p>
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
            <p>Pas besoin de comprendre le chiffrement pour protéger une conversation. Voici ce que MeshChat fait pour vous.</p>
          </div>
          <div className="transmission-line section-inner">
            {[
              ["01", "Créez votre identité", "Une identité locale est générée sur votre appareil. Vous pouvez la protéger par empreinte ou Face ID."],
              ["02", "Ajoutez un contact", "Partagez votre carte par QR, lien ou carte NFC. Vous restez en contrôle de qui entre dans votre réseau."],
              ["03", "Échangez directement", "Le contenu est chiffré. Quand le réseau le permet, l’échange bascule directement entre les appareils."],
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

        <section className="compare section-light" id="comparatif">
          <div className="section-inner compare-intro">
            <SectionLabel number="04">FAIRE UN CHOIX ÉCLAIRÉ</SectionLabel>
            <h2>Ce qui change, concrètement.</h2>
            <p>WhatsApp propose aussi du chiffrement de contenu. MeshChat cherche à réduire davantage les informations à fournir pour commencer : pas de numéro à partager, pas de carnet d’adresses à importer et une identité locale par défaut.</p>
          </div>
          <div className="comparison-table section-inner" role="table" aria-label="Comparatif entre MeshChat et une messagerie liée au téléphone">
            <div className="comparison-row comparison-head" role="row"><span role="columnheader">VOUS COMMENCEZ AVEC</span><span role="columnheader">MESHCHAT</span><span role="columnheader">MESSAGERIE LIÉE AU TÉLÉPHONE</span></div>
            {[
              ["Identité", "Une clé publique créée localement", "Un numéro de téléphone"],
              ["Ajout de contacts", "QR, lien ou tag NFC choisi par vous", "Souvent via numéro et répertoire"],
              ["Réseau", "Relais de livraison + P2P quand disponible", "Infrastructure de plateforme"],
              ["Point de contrôle", "Votre appareil et vos choix", "Un compte lié à un service central"],
            ].map(([label, mesh, other]) => <div className="comparison-row" role="row" key={label}><span role="cell">{label}</span><span role="cell"><Check size={16} /> {mesh}</span><span role="cell">{other}</span></div>)}
          </div>
          <p className="comparison-note section-inner">MeshChat ne promet pas l’invisibilité totale : aucun outil ne le peut seul. Il vous aide à limiter les informations que vous donnez dès le départ.</p>
        </section>

        <section className="final-cta section-dark">
          <AsciiNetwork />
          <div className="final-cta-inner">
            <p className="eyebrow"><Zap size={15} /> VOTRE LIGNE, VOTRE RYTHME</p>
            <h2>Envoyez le premier message<br />sans ouvrir une nouvelle piste.</h2>
            <a className="button button-primary" href={APP_URL} target="_blank" rel="noreferrer">Ouvrir MeshChat <ArrowUpRight size={19} /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#top"><img src={markUrl} alt="" /><span>MESHCHAT<em>///</em></span></a>
        <p>MESSAGERIE PRIVÉE · PWA · NOSTR-MESH</p>
        <a className="footer-link" href="https://github.com/mateorey22/zenithchat" target="_blank" rel="noreferrer"><Github size={16} /> Voir le code</a>
      </footer>
    </div>
  );
}
