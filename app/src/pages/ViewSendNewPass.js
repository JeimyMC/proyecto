import { Link } from "react-router-dom";

const ViewSendNewPass = () => {
  return (
    <section style={{ padding: 318 }} className="fondo">
      <section className="welcome">
        <p>Se ha enviado un mensaje a tu correo.</p>
        <Link to="/principal">Principal</Link>
      </section>
    </section>
  );
};

export { ViewSendNewPass };
