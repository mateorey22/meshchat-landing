import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  Fingerprint,
  Github,
  KeyRound,
  Menu,
  MessageSquareText,
  Network,
  Radio,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const APP_URL = "https://mateorey22.github.io/threnyx/";
const REPO_URL = "https://github.com/mateorey22/threnyx";
const markUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/92875856/eIpWjvCzmTfyQygq.png";
const demoVideo = "/manus-storage/threnyx-signal-loop_7def9642.mp4";
const demoNfc = "/manus-storage/threnyx-demo-nfc_1bc93a66.png";
const demoConstellation = "/manus-storage/threnyx-demo-constellation_1f4f8fef.png";
const demoHermes = "/manus-storage/threnyx-demo-hermes_0b81c9fc.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const faqs = [
  {
    question: "Threnyx demande-t-il un numéro de téléphone ?",
    answer: "Non. L’identité est créée localement sur votre appareil. Vous choisissez ensuite de partager un point de contact par QR, lien direct ou carte NFC compatible.",
  },
  {
    question: "Puis-je installer Threnyx comme une application ?",
    answer: "Oui. Threnyx est une PWA : Chrome Android peut l’installer et l’ouvrir en mode application. Le navigateur et le système restent toutefois responsables des permissions, notifications et comportements en arrière-plan.",
  },
  {
    question: "La carte NFC récupère-t-elle mon compte automatiquement ?",
    answer: "Non. Une clé NFC de reprise permet de retrouver un snapshot chiffré puis de créer une nouvelle protection locale. Un document CRDT Yjs peut fusionner localement les contacts, groupes et préférences compatibles ; il ne couvre pas les messages ni les médias. Un tag NDEF classique peut être copié : il doit être protégé comme une clé et non traité comme un facteur anti-clonage.",
  },
  {
    question: "Que protège exactement le chiffrement actuel ?",
    answer: "Les nouveaux messages persistants utilisent NIP-17, NIP-44 v2 et NIP-59. Threnyx communique sans promesse de forward secrecy ou de post-compromise security : le pilote de session correspondant est distinct et non activé dans les conversations.",
  },
  {
    question: "Comment fonctionne Hermes dans Threnyx ?",
    answer: "Vous appairez volontairement une identité Nostr de bot avec un code signé et limité dans le temps. Les commandes et choix sont transmis au connecteur du bot. Les conversations humaines et les appels WebRTC ne sont pas envoyés à Hermes par ce parcours.",
  },
];

function SectionMark({ index, label }: { index: string; label: string }) {
  return <p className="section-mark"><span>{index}</span>{label}</p>;
}

function Orbit({ small = false }: { small?: boolean }) {
  return <span className={small ? "orbit orbit-small" : "orbit"} aria-hidden="true"><i /><b /></span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="landing-shell">
      <div className="site-noise" aria-hidden="true" />
      <header className="landing-nav">
        <a href="#top" className="brand-lockup" aria-label="Accueil Threnyx">
          <img src={markUrl} alt="" />
          <span>THRENYX <i>///</i></span>
        </a>
        <nav className={menuOpen ? "nav-drawer is-open" : "nav-drawer"} aria-label="Navigation principale">
          <a href="#demonstrations" onClick={() => setMenuOpen(false)}>Démos</a>
          <a href="#parcours" onClick={() => setMenuOpen(false)}>Parcours</a>
          <a href="#ressources" onClick={() => setMenuOpen(false)}>Ressources</a>
          <a href="#questions" onClick={() => setMenuOpen(false)}>Questions</a>
          <a href={APP_URL} target="_blank" rel="noreferrer" className="nav-open" onClick={() => setMenuOpen(false)}>Ouvrir l’app <ArrowUpRight size={15} /></a>
        </nav>
        <button className="nav-menu" type="button" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="signal-hero">
          <video className="signal-film" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src={demoVideo} type="video/mp4" />
          </video>
          <div className="signal-film-mask" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.52 }}>
              <p className="live-caption"><span />PWA PRIVÉE · NOSTR · SANS NUMÉRO</p>
              <h1>Votre ligne.<br /><em>Vos règles.</em></h1>
              <p className="hero-copy">Threnyx est une messagerie installable pour échanger, appeler et reprendre la main sur ce que vous donnez pour commencer une conversation.</p>
              <div className="hero-buttons">
                <a href={APP_URL} target="_blank" rel="noreferrer" className="action action-copper">Essayer Threnyx <ArrowUpRight size={18} /></a>
                <a href="#demonstrations" className="action action-line">Voir les démos <ArrowDownRight size={18} /></a>
              </div>
            </motion.div>
            <motion.div className="hero-proof" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.52, delay: 0.16 }}>
              <div><Check size={15} /><span>Identité locale</span></div>
              <div><Check size={15} /><span>Contact par choix</span></div>
              <div><Check size={15} /><span>Code source public</span></div>
            </motion.div>
          </div>
          <aside className="hero-readout" aria-label="Démonstration visuelle">
            <span className="readout-label">SIGNAL / 01</span>
            <Orbit />
            <p>Un parcours à essayer.<br />Pas une promesse à croire.</p>
          </aside>
        </section>

        <section className="editorial-intro" id="demonstrations">
          <div className="layout-wide intro-heading">
            <SectionMark index="01" label="À VOIR, PUIS À TESTER" />
            <div>
              <p className="kicker">DES PARCOURS CONCRETS</p>
              <h2>La confidentialité devient plus claire<br /><em>quand on peut la parcourir.</em></h2>
              <p className="lead-copy">Au lieu de demander de nous croire, Threnyx montre les étapes : ajouter une personne, garder une continuité entre appareils, ou autoriser un agent séparé. Chaque parcours garde ses limites visibles.</p>
            </div>
          </div>

          <div className="demo-rail layout-wide">
            <motion.article className="demo-card demo-card-nfc" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.52 }}>
              <img src={demoNfc} alt="Deux téléphones et une carte NFC illustrant un échange de contact" />
              <div className="demo-shade" />
              <div className="demo-number">01 / CONTACT</div>
              <div className="demo-content">
                <div className="demo-icon"><ScanLine size={20} /></div>
                <h3>Ajouter une personne, pas un répertoire entier.</h3>
                <p>Le contact se partage par QR, lien direct ou carte NFC NDEF. Entre deux téléphones, chacun doit ajouter l’autre : l’écran l’explique avant l’échange.</p>
                <a href={APP_URL} target="_blank" rel="noreferrer">Essayer le parcours contact <ArrowUpRight size={16} /></a>
              </div>
            </motion.article>

            <motion.article className="demo-card demo-card-constellation" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.52, delay: 0.08 }}>
              <img src={demoConstellation} alt="Téléphone et fragments abstraits illustrant un snapshot Constellation chiffré" />
              <div className="demo-shade" />
              <div className="demo-number">02 / CONTINUITÉ</div>
              <div className="demo-content">
                <div className="demo-icon"><KeyRound size={20} /></div>
                <h3>Reprendre une identité avec prudence.</h3>
                <p>Constellation Vault publie manuellement un snapshot chiffré. Une clé NFC peut aider à retrouver ce snapshot ; elle ne contient ni messages ni identité en clair.</p>
                <a href={`${REPO_URL}/blob/main/docs/crypto-protocol.md`} target="_blank" rel="noreferrer">Lire les limites de reprise <ArrowUpRight size={16} /></a>
              </div>
            </motion.article>

            <motion.article className="demo-card demo-card-hermes" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.52, delay: 0.16 }}>
              <img src={demoHermes} alt="Signal de bot abstrait séparé d’un téléphone par une porte de permissions" />
              <div className="demo-shade" />
              <div className="demo-number">03 / AGENT</div>
              <div className="demo-content">
                <div className="demo-icon"><Bot size={20} /></div>
                <h3>Brancher un agent par permission, jamais par défaut.</h3>
                <p>Un bot Hermes possède sa propre identité Nostr. Vous appairez un code signé, définissez les permissions et pouvez révoquer localement.</p>
                <a href={`${REPO_URL}/blob/main/docs/hermes-connector-source.md`} target="_blank" rel="noreferrer">Voir le connecteur public <ArrowUpRight size={16} /></a>
              </div>
            </motion.article>
          </div>
        </section>

        <section className="walkthrough" id="parcours">
          <div className="layout-wide walkthrough-head">
            <SectionMark index="02" label="PREMIÈRE CONVERSATION" />
            <div><p className="kicker">MOINS D’ÉTAPES INVISIBLES</p><h2>Une conversation en quatre gestes.</h2></div>
          </div>
          <div className="layout-wide steps-grid">
            {[
              { number: "01", icon: Smartphone, title: "Installer", text: "Ouvrez Threnyx dans un navigateur compatible et installez la PWA si vous le souhaitez." },
              { number: "02", icon: Fingerprint, title: "Protéger", text: "Créez une identité locale et choisissez la protection disponible sur votre appareil." },
              { number: "03", icon: ScanLine, title: "Échanger", text: "Partagez vos cartes de contact. Pour un ajout mutuel, chaque personne confirme l’autre." },
              { number: "04", icon: MessageSquareText, title: "Parler", text: "Les messages persistants récents utilisent NIP-17, NIP-44 v2 et NIP-59 ; l’app négocie une transition avec l’existant." },
            ].map((step, index) => {
              const Icon = step.icon;
              return <motion.article className="walk-step" key={step.number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.42, delay: index * 0.06 }}>
                <span>{step.number}</span><Icon size={22} /><h3>{step.title}</h3><p>{step.text}</p>
              </motion.article>;
            })}
          </div>
          <div className="layout-wide walkthrough-foot"><Radio size={17} /><p>Lorsque la connexion le permet, les appels essaient d’établir un chemin direct WebRTC. La qualité finale dépend du navigateur, du réseau et de la configuration ICE de chaque participant.</p></div>
        </section>

        <section className="control-room">
          <div className="layout-wide control-room-grid">
            <div className="control-copy">
              <SectionMark index="03" label="DES CONTRÔLES, PAS DES SLOGANS" />
              <p className="kicker">SUR VOTRE APPAREIL</p>
              <h2>Ce que vous pouvez<br /><em>choisir de faire.</em></h2>
              <p>La sécurité ne se résume pas à une phrase sur une page. Threnyx propose des outils locaux pour vérifier, limiter ou effacer — avec un périmètre affiché à chaque fois.</p>
              <a className="text-link" href={`${REPO_URL}/blob/main/SECURITY.md`} target="_blank" rel="noreferrer">Consulter la documentation de sécurité <ArrowUpRight size={17} /></a>
            </div>
            <div className="control-list">
              {[
                { icon: ShieldCheck, title: "Empreinte vérifiable", text: "Un badge local indique une comparaison réalisée par un autre canal et disparaît si la clé du contact change." },
                { icon: Sparkles, title: "Flamme d’effacement", text: "Optionnelle et désactivée au départ, elle efface l’identité et les données de cet appareil — pas les événements déjà remis ailleurs." },
                { icon: Network, title: "Constellation sous contrôle", text: "La publication d’un snapshot est manuelle. Les contacts, groupes et préférences compatibles peuvent converger ; messages et médias ne sont pas promis dans cette fusion." },
                { icon: Bot, title: "Agents sous permission", text: "L’agent ne reçoit pas le coffre, la phrase secrète ou les conversations humaines. Un connecteur Relay persistant doit fonctionner séparément de GitHub Pages." },
              ].map((item, index) => {
                const Icon = item.icon;
                return <motion.div className="control-row" key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.38, delay: index * 0.06 }}><Icon size={20} /><div><h3>{item.title}</h3><p>{item.text}</p></div></motion.div>;
              })}
              <div className="control-scope">
                <p><strong>Code de détresse</strong> : un code distinct peut déclencher l’effacement local depuis l’écran verrouillé ; seul son hash séparé est conservé.</p>
                <p><strong>Vérification d’empreinte</strong> : comparez la clé par un autre canal avant de considérer un contact comme vérifié.</p>
                <p><strong>Appareils liés limités</strong> et <strong>Invitations de groupe</strong> : les formats sont présents, mais la portée liée et le quota concurrent restent en validation sur plusieurs appareils.</p>
                <p>La flamme est <strong>désactivée par défaut</strong> et n’efface jamais des données déjà remises à un relais ou à un autre appareil.</p>
                <p>Le <strong>pilote MLS/Marmot</strong> reste en qualification : la forward secrecy et la post-compromise security ne sont pas annoncées comme actives.</p>
                <p>Pour Hermes, les appels WebRTC restent hors périmètre ; le bot reçoit uniquement ce qui a été appairé et autorisé.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="resource-library" id="ressources">
          <div className="layout-wide library-head"><SectionMark index="04" label="RESSOURCES POUR COMPRENDRE" /><div><p className="kicker">AU-DELÀ DE LA PAGE D’ACCUEIL</p><h2>Lire le protocole.<br /><em>Vérifier le chemin.</em></h2></div></div>
          <div className="layout-wide resource-grid">
            <a href={`${REPO_URL}/blob/main/docs/crypto-protocol.md`} target="_blank" rel="noreferrer" className="resource-tile"><span>01 / PROTOCOLE</span><h3>Messages Nostr et limites de session</h3><p>NIP-17, NIP-44 v2, NIP-59 et les garanties qui ne sont pas encore annoncées.</p><ArrowUpRight size={19} /></a>
            <a href={`${REPO_URL}/blob/main/docs/hermes-connector-source.md`} target="_blank" rel="noreferrer" className="resource-tile"><span>02 / HERMES</span><h3>Connecter un agent sans le confondre avec un contact</h3><p>Code source public, appairage, permissions et déploiement séparé du connecteur.</p><ArrowUpRight size={19} /></a>
            <a href={`${REPO_URL}/blob/main/docs/security-architecture-map.md`} target="_blank" rel="noreferrer" className="resource-tile"><span>03 / ARCHITECTURE</span><h3>Voir les surfaces de sécurité</h3><p>Une carte des clés, du coffre, des relais, de la PWA et des limites de chaque couche.</p><ArrowUpRight size={19} /></a>
            <a href={REPO_URL} target="_blank" rel="noreferrer" className="resource-tile resource-code"><Github size={21} /><span>04 / CODE</span><h3>Explorer le projet Threnyx</h3><p>La PWA, les tests et la documentation technique sont publiés pour être inspectés.</p><ArrowUpRight size={19} /></a>
          </div>
        </section>

        <section className="comparison-strip">
          <div className="layout-wide comparison-grid">
            <div><SectionMark index="05" label="UN POINT DE DÉPART DIFFÉRENT" /><h2>Commencer sans livrer<br />son carnet d’adresses.</h2></div>
            <div className="comparison-lines">
              <p><span>Identité</span><strong>Clé créée localement</strong></p>
              <p><span>Contact</span><strong>QR, lien ou NFC choisi</strong></p>
              <p><span>Installation</span><strong>Application web installable</strong></p>
              <p><span>Limite claire</span><strong>Pas d’invisibilité totale promise</strong></p>
            </div>
          </div>
        </section>

        <section className="faq-area" id="questions">
          <div className="layout-wide faq-head"><SectionMark index="06" label="QUESTIONS FRÉQUENTES" /><div><p className="kicker">AVANT D’ESSAYER</p><h2>Les réponses sans<br /><em>la petite ligne cachée.</em></h2></div></div>
          <div className="layout-wide faq-stack">
            {faqs.map((faq, index) => <details key={faq.question} className="faq-line"><summary><span>0{index + 1}</span><strong>{faq.question}</strong><ChevronDown size={20} /></summary><p>{faq.answer}</p></details>)}
          </div>
        </section>

        <section className="closing-signal">
          <Orbit small />
          <p className="kicker">PRÊT À OUVRIR LA LIGNE ?</p>
          <h2>Essayez l’application.<br /><em>Gardez les questions.</em></h2>
          <p>La meilleure manière de comprendre Threnyx reste de parcourir l’app, comparer l’empreinte d’un contact et consulter les limites documentées.</p>
          <div className="hero-buttons"><a href={APP_URL} target="_blank" rel="noreferrer" className="action action-copper">Ouvrir Threnyx <ArrowUpRight size={18} /></a><a href={REPO_URL} target="_blank" rel="noreferrer" className="action action-line">Voir le code <Github size={18} /></a></div>
        </section>
      </main>

      <footer className="landing-footer">
        <a href="#top" className="brand-lockup"><img src={markUrl} alt="" /><span>THRENYX <i>///</i></span></a>
        <p>MESSAGERIE PRIVÉE · PWA · NOSTR-MESH</p>
        <a href={REPO_URL} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
      </footer>
    </div>
  );
}
