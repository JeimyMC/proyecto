import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProfileUserInside } from "../components/ProfileInside";
import { Close } from "../components/Close-Welcome-ChangePass";

const ProfileInsidePage = ({ auth }) => {
  const [active, setActive] = useState(false);
  const comparate = () => (active ? setActive(false) : setActive(true));
  return (
    <section className="profileInside">
      <nav>
        <ul>
          <li>
            <Link to="/principal">Principal</Link>
          </li>

          <li>
            <Link to="/principal/newBook">Subir📖</Link>
          </li>
        </ul>
        <section>
          <button onClick={comparate}>⚙</button>
          {active ? (
            <ul>
              <li>
                <Link to="/principal/profile/edit">Editar perfil</Link>
              </li>
              <li>
                <Link to="/principal/changePassword">Cambiar contraseña</Link>
              </li>
              <li>
                <Close></Close>
              </li>
            </ul>
          ) : null}
        </section>
      </nav>
      <ProfileUserInside auth={auth}></ProfileUserInside>
      <main>
        <nav>
          <ul>
            <li id="notif">
              <Link to="/principal/profile/list/offers">Notificaciones</Link>
            </li>
            <li id="fav">
              <Link to="/principal/profile/list/favorites">Favoritos</Link>
            </li>
            <li id="pur">
              <Link to="/principal/profile/list/purchase">Comprados</Link>
            </li>
            <li id="sell">
              <Link to="/principal/profile/list/toSell">En venta</Link>
            </li>
            <li id="res">
              <Link to="/principal/profile/list/reserved">Reservados</Link>
            </li>
          </ul>
        </nav>
      </main>
    </section>
  );
};

export { ProfileInsidePage };
