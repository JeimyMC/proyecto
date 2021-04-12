import React from "react";
import { useFetchData } from "../hooks/useFetchData";
import { port } from "../App";
import { List } from "./List-Avatar";

const LastBooks = () => {
  const [data] = useFetchData(`http://localhost:${port}/beginning/lastBooks`);
  const showBooks = [];
  const link = (idBook) => `/principal/category/0/ultimos/book/${idBook}`;
  if (data.length > 6) {
    for (let i = 0; i < 6; i++) {
      showBooks.push(data[i]);
    }
    return (
      <section id="lastBooks">
        <h3>Últimos libros</h3>

        <List array={showBooks} link={link}></List>
      </section>
    );
  } else {
    return (
      <section id="lastBooks">
        <h3>Últimos libros</h3>

        <List array={data} link={link}></List>
      </section>
    );
  }
};

export { LastBooks };
