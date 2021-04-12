import React from "react";
import { Link, useParams } from "react-router-dom";
import { FindForSeeker } from "../components/FindForSeeker";

const Seeker = () => {
  const { seek, data } = useParams();
  let name;
  if (seek === "title") {
    name = "Titulo";
  } else if (seek === "author") {
    name = "Autor";
  } else if (seek === "city") {
    name = "Ciudad";
  } else if (seek === "cp") {
    name = "Código postal";
  }

  return (
    <div className="listBooksUser">
      <p>Buscador</p>
      <Link to="/principal">Principal ˃ </Link>
      <p>
        Has buscado por "{name}" con "{data}"
      </p>
      <FindForSeeker></FindForSeeker>
    </div>
  );
};

export { Seeker };
