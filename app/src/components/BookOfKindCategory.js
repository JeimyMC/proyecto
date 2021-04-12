import React, { useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { useParams } from "react-router-dom";
import { port } from "../App";
import { List } from "./List-Avatar";

const BookOfKindCategory = () => {
  let { name, id } = useParams();
  let [num1] = useState(0);
  let [num2, setNum2] = useState(3);
  const [data, setData] = useFetchData(
    `http://localhost:${port}/category/${id}/${num1}/${num2}`
  );

  const handlClick = async () => {
    const num2Sume = num2 + 3;

    const res = await fetch(
      `http://localhost:${port}/category/${id}/${num1}/${num2}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const body = await res.json();
    if (res.status !== 200) {
      console.warn("error", res);
    }

    setData(body);
    setNum2(num2Sume);
  };

  const linkOfBook = (productId) =>
    `/principal/category/${id}/${name}/book/${productId}`;

  const list =
    data.length > 0 ? (
      <section>
        <List array={data} link={linkOfBook}></List>
        <button onClick={handlClick}>Ver más</button>;
      </section>
    ) : (
      <p>No hay libros en esta categoría.</p>
    );
  return list;
};

export { BookOfKindCategory };
