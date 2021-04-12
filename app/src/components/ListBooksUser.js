import React, { useState } from "react";
import { port } from "../App";
import { useParams } from "react-router-dom";
import { useFetchAuth } from "../hooks/useFetchAuth";
import { List } from "./List-Avatar";

const ListBooksUser = ({ auth }) => {
  const { kind } = useParams();
  let [num1] = useState(0);
  let [num2, setNum2] = useState(3);
  const [dataList, setDataList] = useFetchAuth(
    `http://localhost:${port}/login/user/profile/${kind}/${num1}/${num2}`,
    auth
  );

  const linkOfListBookUser = (productId) =>
    `/principal/profile/list/${kind}/book/${productId}`;

  const handlClick = async () => {
    const num2Sume = num2 + 3;

    const res = await fetch(
      `http://localhost:${port}/login/user/profile/${kind}/${num1}/${num2}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: auth,
        },
      }
    );
    const body = await res.json();
    if (res.status !== 200) {
      console.warn("error", res);
    }

    setDataList(body);
    setNum2(num2Sume);
  };
  return (
    <section>
      <List array={dataList} link={linkOfListBookUser}></List>
      {dataList.length < 3 ? null : (
        <button onClick={handlClick}>Ver más</button>
      )}
    </section>
  );
};

export { ListBooksUser };
