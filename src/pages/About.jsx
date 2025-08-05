// src/views/About.jsx (Version finale corrigée et optimisée)

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Données des articles (inchangées)
const blogPosts = [
  {
    title: 'Qu\'est-ce que la Spiritualité Moderne ?',
    date: '1 Octobre 2023',
    content: 'La spiritualité moderne n\'est pas liée à un dogme ou une religion spécifique. C\'est une quête personnelle de sens, de connexion et de paix intérieure...'
  },
  {
    title: 'Le Pouvoir de l\'Intention',
    date: '25 Septembre 2023',
    content: 'L\'intention est une force créatrice puissante. En définissant clairement ce que vous souhaitez manifester, vous dirigez votre énergie vers cet objectif...'
  },
  {
    title: 'Les 5 Clés pour Débuter la Méditation',
    date: '12 Septembre 2023',
    content: '1. Trouvez un lieu calme. 2. Asseyez-vous confortablement. 3. Concentrez-vous sur votre respiration. 4. Laissez passer vos pensées sans jugement...'
  },
  {
    title: 'Harmoniser ses Chakras avec les Cristaux',
    date: '5 Septembre 2023',
    content: 'Chaque cristal vibre à une fréquence unique qui peut résonner avec vos centres énergétiques (chakras). Le Quartz Rose pour le cœur, l\'Améthyste pour le troisième œil...'
  },
  {
    title: 'Interpréter les Signes de l\'Univers',
    date: '28 Août 2023',
    content: 'L\'Univers communique constamment avec nous à travers des signes : heures miroirs, plumes, rencontres... Apprendre à les reconnaître et à les interpréter est une façon de se sentir guidé...'
  },
];


function About() {
  return (
    // ON AJOUTE UN FRAGMENT <> POUR ENTOURER TOUT LE CONTENU
    <>
      {/* ====================================================== */}
      {/* SEO PUISSANT POUR LA PAGE "À PROPOS"                */}
      {/* ====================================================== */}
      <Helmet>
        <title>À Propos de Spiritia - Votre Guide Spirituel A. Esprit</title>
        <meta name="description" content="Découvrez l'histoire et la mission de Spiritia et de son fondateur, A. Esprit. Une approche authentique et bienveillante de la guidance spirituelle." />
        <link rel="canonical" href="https://spiritualiteprofonde.com/a-propos" />

        {/* --- OPEN GRAPH (Facebook, WhatsApp, etc.) --- */}
        <meta property="og:title" content="À Propos de Spiritia - Mon Histoire, Votre Guide" />
        <meta property="og:description" content="Découvrez la mission et la philosophie de A. Esprit, votre guide dédié à l'éveil et à la guérison de l'âme." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://spiritualiteprofonde.com/a-propos" />
        <meta property="og:image" content="https://spiritualiteprofonde.com/images/lelogo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Spiritia" />
        <meta property="og:locale" content="fr_FR" />

        {/* --- TWITTER CARDS --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À Propos de Spiritia - Mon Histoire, Votre Guide" />
        <meta name="twitter:description" content="Découvrez la mission et la philosophie de A. Esprit, votre guide dédié à l'éveil et à la guérison de l'âme." />
        <meta name="twitter:image" content="https://spiritualiteprofonde.com/images/lelogo.png" />
      </Helmet>
      {/* ====================================================== */}
      {/* FIN DU BLOC SEO                                        */}
      {/* ====================================================== */}
      
      <main className="content about-page">

        {/* SECTION 1: INTRODUCTION PERSONNELLE */}
        <section className="about-intro">
          <div className="intro-text">
            <h1>Mon Histoire, Votre Guide</h1>
            <p className="subtitle">Bienvenue dans mon univers, un espace dédié à l'éveil et à la guérison de l'âme.</p>
            <p>
              Depuis mon plus jeune âge, j'ai été sensible aux énergies subtiles qui nous entourent. Ce qui a commencé comme une simple curiosité est devenu une véritable passion, puis une vocation : celle de guider les autres sur leur propre chemin spirituel. Après des années d'étude, de pratique et d'exploration personnelle à travers l'astrologie, la lithothérapie et les arts divinatoires, j'ai créé ce sanctuaire pour partager les outils et les connaissances qui ont transformé ma vie.
            </p>
            <p>
              Mon nom est A. Esprit, et ma mission est de vous aider à vous reconnecter à votre intuition, à trouver des réponses et à libérer votre plein potentiel.
            </p>
          </div>
          <div className="founder-photo-container">
            <img src="/images/spirituel.jpg" alt="A. Esprit, guide spirituel et fondateur de Spiritia" className="founder-photo" />
          </div>
        </section>

        {/* SECTION 2: PHILOSOPHIE */}
        <section className="home-section mission-section">
          <h2>Notre Philosophie : Un Guide Authentique et Bienveillant</h2>
          <p>
            Nous croyons que chaque individu possède en lui les clés de sa propre sagesse. Notre rôle n'est pas de vous donner des réponses toutes faites, mais de vous fournir des outils, des perspectives et un soutien pour que vous puissiez trouver les vôtres. L'authenticité, la bienveillance et le respect de votre libre arbitre sont au cœur de chacune de nos interactions.
          </p>
        </section>
        
        {/* SECTION 3: PARTAGES & CONNAISSANCES (BLOG) */}
        <section className="home-section">
          <h2>Partages & Connaissances</h2>
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article key={index} className="blog-post">
                <h3>{post.title}</h3>
                <p className="meta-data">Publié le {post.date}</p>
                <p>{post.content}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 4: APPEL À L'ACTION FINAL */}
        <section className="home-section cta-section">
          <h2>Prêt(e) à commencer votre voyage ?</h2>
          <p>Explorez nos services et trouvez l'accompagnement qui vous convient.</p>
          <div className="cta-buttons">
            <Link to="/consultations" className="cta-button">Découvrir les Consultations</Link>
            <Link to="/" className="cta-button secondary">Visiter la Boutique</Link>
          </div>
        </section>

      </main>
    </> // ON FERME LE FRAGMENT ICI
  );
}

export default About;