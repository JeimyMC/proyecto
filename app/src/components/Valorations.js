import React from "react";
import { useFetchData } from "../hooks/useFetchData";
import { useFetchAuth } from "../hooks/useFetchAuth";
import { port } from "../App";
import { Link, useParams } from "react-router-dom";

const ValorationsOutside = () => {
  const { idUser } = useParams();

  const [book] = useFetchData(
    `http://localhost:${port}/login/user/${idUser}/valorations`
  );
  return <SoldBooks book={book}></SoldBooks>;
};

const ValorationsInside = ({ auth }) => {
  const [book] = useFetchAuth(
    `http://localhost:${port}/login/user/valorations`,
    auth
  );
  return <SoldBooks book={book}></SoldBooks>;
};

const SoldBooks = ({ book }) => {
  const list = book.map((e) => {
    const url = `http://localhost:${port}/uploads/${e.photoFront}`;
    const star = "★".repeat(e.assessment);
    return (
      <li key={e.id_purchase}>
        <header>
          <img src={url} alt="avatar" style={{ maxWidth: 100 }}></img>
        </header>
        <main>
          <p>{e.productName}</p>
          <p>{e.author}</p>
          <p style={{ color: "orange" }}>{star}</p>
          <p>{e.opinion}</p>

          <Link
            to={`/principal/category/0/ultimos/book/${e.id_product}/user/${e.buyer}`}
          >
            Comprador
          </Link>
        </main>
      </li>
    );
  });
  return <ul>{list}</ul>;
};

export { SoldBooks, ValorationsOutside, ValorationsInside };
