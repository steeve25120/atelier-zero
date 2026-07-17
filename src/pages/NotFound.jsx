import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page-shell not-found">
      <p className="eyebrow">Error 404</p>
      <h1>Retour à zéro.</h1>
      <p>Cette page n’existe pas ou a été déplacée.</p>
      <Link className="primary-button" to="/">Retour à l’accueil</Link>
    </section>
  );
}
