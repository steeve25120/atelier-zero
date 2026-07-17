export default function About() {
  return (
    <>
      <section className="about-hero">
        <img src="/assets/logo-white-on-black.jpeg" alt="Atelier Zéro" />
        <div>
          <p className="eyebrow">The Foundation</p>
          <h1>The Zero Mindset</h1>
        </div>
      </section>

      <section className="about-manifesto page-shell">
        <p className="about-number">00</p>
        <div>
          <p className="eyebrow">Brand mission</p>
          <h2>
            Nous ne vendons pas
            <br />
            seulement des vêtements.
          </h2>
          <p>
            Atelier Zéro fournit une armure à celles et ceux qui ont le courage
            de recommencer. Chaque pièce traduit le passage du vide à la
            structure, puis de la structure à l’impact.
          </p>
        </div>
      </section>

      <section className="values-grid">
        <article>
          <span>01</span>
          <h3>Void</h3>
          <p>
            Le vide n’est pas une absence. C’est un espace disponible pour
            reconstruire.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>Impact</h3>
          <p>
            La rupture libère l’énergie nécessaire pour quitter l’ancien soi.
          </p>
        </article>
        <article>
          <span>03</span>
          <h3>Structure</h3>
          <p>
            La discipline transforme l’intention en identité, une étape après
            l’autre.
          </p>
        </article>
      </section>

      <section className="about-visual">
        <img src="/assets/visual-hand-zero.png" alt="Symbole Atelier Zéro" />
        <blockquote>
          “The exact moment when nothing becomes everything.”
        </blockquote>
      </section>
    </>
  );
}
