import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Close = () => {
  const history = useHistory();
  const handlClick = () => {
    localStorage.removeItem("auth");
    return history.push("/close");
  };
  return <button onClick={handlClick}>Cerrar sesión</button>;
};

const ViewClose = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.href = window.location.href =
        "http://localhost:3000/principal";
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section style={{ padding: 335 }} className="fondo">
      <section className="welcome">
        <p>Hasta pronto</p>
      </section>
    </section>
  );
};

const Welcome = () => {
  return (
    <section style={{ padding: 305 }} className="fondo">
      <section className="welcome">
        <p>¡Bienvenido a recybook!</p>
        <aside>
          <p style={{ fontSize: 25 }}>
            Intercambia conocimiento y fantasías iniciando sesión:
          </p>
          <Link style={{ fontSize: 25 }} to="/principal">
            Principal
          </Link>
        </aside>
      </section>
    </section>
  );
};

export { Close, ViewClose, Welcome };
