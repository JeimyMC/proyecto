import { Link } from "react-router-dom";

const ViewCorrectChangePass = () => {
  return (
    <section style={{ padding: 318 }} className="fondo">
      <section className="welcome">
        <p>Se ha cambiado correctamente, vuelve a tu:</p>
        <Link style={{ fontSize: 25 }} to="/principal/profile">
          Perfil
        </Link>
      </section>
    </section>
  );
};

export { ViewCorrectChangePass };
