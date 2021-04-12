import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { List } from "./List-Avatar";
import { port } from "../App";

const FindForSeeker = () => {
  const { seek, data } = useParams();
  const [list, setList] = useState([]);
  const url = `http://localhost:${port}/beginning/seeker/${seek}`;

  const link = (idBook) => `/principal/category/0/seeker/book/${idBook}`;

  useEffect(() => {
    const dataPost = {};
    dataPost[seek] = data;
    const fetcher = async () => {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dataPost),
      });
      if (res.status !== 200) {
        console.warn("error", res);
      }
      const body = await res.json();
      setList(body);
    };
    fetcher();
  }, [url, seek, data]);

  const bookSeeker =
    list.length > 0 ? (
      <section>
        <List array={list} link={link}></List>
      </section>
    ) : (
      <p>No hay libros</p>
    );
  return bookSeeker;
};

export { FindForSeeker };
