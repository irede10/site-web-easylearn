"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const programsRef = useRef(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const scrollPrograms = (direction) => {
    programsRef.current?.scrollBy({
      left: direction * programsRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#accueil" aria-label="EasyLearn, accueil">
          <span className={styles.brandMark}>E</span>
          <span>Easy<span>Learn</span></span>
        </a>
        <nav id="mobile-navigation" className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Navigation principale">
          <a href="#apropos" onClick={closeMenu}>À propos</a>
          <a href="#formations" onClick={closeMenu}>Formations</a>
          <a href="#carrieres" onClick={closeMenu}>Carrières</a>
        </nav>
        <div className={styles.headerActions}>
          <a className={styles.headerCta} href="#contact" onClick={closeMenu}>Nous contacter <span aria-hidden="true">↗</span></a>
          <button
            className={styles.menuButton}
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section className={styles.hero} id="accueil">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span /> L&apos;avenir commence ici</p>
            <h1>Apprendre aujourd&apos;hui.<br /><em>Transformer demain.</em></h1>
            <p className={styles.heroText}>Une formation exigeante et humaine pour construire les compétences qui feront avancer le monde.</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#formations">Découvrir nos formations <span aria-hidden="true">↗</span></a>
              <a className={styles.textButton} href="#apropos">En savoir plus <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className={styles.heroVisual} aria-label="Illustration abstraite représentant le savoir et la progression">
            <div className={styles.visualGrid} />
            <div className={`${styles.orbit} ${styles.orbitOne}`} />
            <div className={`${styles.orbit} ${styles.orbitTwo}`} />
            <div className={styles.visualCore}><span>EL</span><small>EST. 2010</small></div>
            <div className={`${styles.floatCard} ${styles.floatTop}`}><strong>01</strong><span>Excellence<br />académique</span></div>
            <div className={`${styles.floatCard} ${styles.floatBottom}`}><span className={styles.dot} /> 2 500+ diplômés</div>
          </div>
        </section>

        <section className={styles.stats} aria-label="Chiffres clés">
          <div><strong>2010</strong><span>Année de création</span></div>
          <div><strong>2 500<span>+</span></strong><span>Étudiants formés</span></div>
          <div><strong>08</strong><span>Formations spécialisées</span></div>
          <div><strong>Lomé</strong><span>Une université ouverte sur le monde</span></div>
        </section>

        <section className={styles.about} id="apropos">
          <div className={styles.sectionLabel}>01 <span>Notre vision</span></div>
          <div className={styles.aboutContent}>
            <h2>La connaissance<br /><em>en mouvement.</em></h2>
            <div><p>Créée en 2010 et agréée par l&apos;État togolais, EasyLearn prépare les talents de demain à relever les défis d&apos;un monde en constante évolution.</p><p>Notre approche associe expertise, innovation et accompagnement humain pour faire de chaque étudiant un professionnel confiant, curieux et prêt à agir.</p></div>
          </div>
        </section>

        <section className={styles.programs} id="formations">
          <div className={styles.sectionHeading}><div><div className={styles.sectionLabel}>02 <span>Parcours académiques</span></div><h2>Trouvez votre<br /><em>prochaine direction.</em></h2></div><p>Des formations pensées pour les métiers d&apos;aujourd&apos;hui et les opportunités de demain.</p></div>
          <div className={styles.programCarousel}>
            <div className={styles.programGrid} ref={programsRef}>
            <article className={styles.programCard}><span className={styles.cardNumber}>01 — LICENCE</span><h3>Génie logiciel</h3><p>Option développement d&apos;application</p><span className={styles.cardArrow}>↗</span></article>
            <article className={`${styles.programCard} ${styles.blueCard}`}><span className={styles.cardNumber}>02 — LICENCE</span><h3>Réseaux &amp;<br />Télécommunications</h3><p>Connecter les idées, les systèmes, les mondes</p><span className={styles.cardArrow}>↗</span></article>
            <article className={styles.programCard}><span className={styles.cardNumber}>03 — LICENCE</span><h3>Comptabilité &amp;<br />Contrôle Audit</h3><p>Maîtriser la performance financière</p><span className={styles.cardArrow}>↗</span></article>
            <article className={styles.programCard}><span className={styles.cardNumber}>04 — LICENCE</span><h3>Marketing &amp;<br />Communication</h3><p>Donner du sens aux marques</p><span className={styles.cardArrow}>↗</span></article>
            <article className={styles.programCard}><span className={styles.cardNumber}>05 — LICENCE</span><h3>Cybersécurité</h3><p>Protéger les données de demain</p><span className={styles.cardArrow}>↗</span></article>
            <article className={`${styles.programCard} ${styles.darkCard}`}><span className={styles.cardNumber}>06 — MASTER</span><h3>Intelligence<br />Artificielle</h3><p>Inventer les solutions de demain</p><span className={styles.cardArrow}>↗</span></article>
            </div>
            <div className={styles.carouselControls}>
              <button type="button" aria-label="Afficher les formations précédentes" onClick={() => scrollPrograms(-1)}>←</button>
              <button type="button" aria-label="Afficher les formations suivantes" onClick={() => scrollPrograms(1)}>→</button>
            </div>
          </div>
        </section>

        <section className={styles.careers} id="carrieres">
          <div className={styles.sectionLabel}>03 <span>Après EasyLearn</span></div>
          <div className={styles.careersLayout}><h2>Votre potentiel<br /><em>n&apos;a pas de limite.</em></h2><div className={styles.careerList}><span>Développeur Full-Stack</span><span>Administrateur Réseaux</span><span>Responsable Marketing</span><span>Expert Comptable</span><span>Consultant en cybersécurité</span></div></div>
        </section>

        <section className={styles.contact} id="contact"><div><p className={styles.eyebrow}><span /> Parlons de votre avenir</p><h2>Prêt à écrire<br /><em>la suite ?</em></h2></div><div className={styles.contactDetails}><p>Notre équipe est à votre écoute pour répondre à vos questions sur nos programmes.</p><a href="tel:+22822220022">+228 22 22 00 22 <span>↗</span></a><a href="mailto:contact@easylearn.tg">contact@easylearn.tg <span>↗</span></a><p className={styles.address}>Lomé, Togo · BP 25500</p></div></section>
      </main>
      <footer className={styles.footer}><a className={styles.brand} href="#accueil"><span className={styles.brandMark}>E</span><span>Easy<span>Learn</span></span></a><p>Former les esprits. Façonner l&apos;avenir.</p><span>© 2026 EasyLearn</span></footer>
    </div>
  );
}
