import React from "react";
import { Link, useParams } from "react-router-dom";
import { ListBooksUser } from "../components/ListBooksUser";

const ListBooksPage = ({ auth }) => {
  const { kind } = useParams();
  let name;
  if (kind === "offers") {
    name = "Notificaciones";
  } else if (kind === "favorites") {
    name = "Favoritos";
  } else if (kind === "reserved") {
    name = "Reservados";
  } else if (kind === "purchase") {
    name = "Comprados";
  } else if (kind === "toSell") {
    name = "En venta";
  }
  return (
    <section className="listBooksUser">
      <p>{name}</p>
      <nav>
        <Link to="/principal">Principal ˃ </Link>
        <Link to="/principal/profile">Perfil ˃ </Link>
        <p>{name}</p>
      </nav>
      <ListBooksUser auth={auth}></ListBooksUser>
    </section>
  );
};

export { ListBooksPage };
