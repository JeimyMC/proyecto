import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { port } from "../App";
import { UseLabelInput } from "./UseForm";

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const handlSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:${port}/forgetPass`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.status !== 200) {
      console.warn("error", res);
      const body = await res.json();
      setError(body.error);
    } else {
      history.push("/principal/forgetPass/valid");
    }
  };
  return (
    <section className="forms">
      <div className="changePassword">
        <Link to="/principal">x</Link>
        <p>Cambiar Contraseña</p>
        <form onSubmit={handlSubmit}>
          <UseLabelInput
            id={"email"}
            kind={"email"}
            name={"email"}
            value={email}
            setValue={setEmail}
          ></UseLabelInput>
          <div style={{ color: "red", minHeight: "1.5em" }}> {error}</div>
          <input type="submit"></input>
        </form>
      </div>
    </section>
  );
};

export { ForgetPass };
