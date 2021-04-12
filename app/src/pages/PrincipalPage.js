import React from "react";
import { HeadPrincipal } from "../components/HeadPrincipal";
import { Categories } from "../components/Categories";
import { LastBooks } from "../components/LastBooks";
import { NavPrincipal } from "../components/NavPrincipal";

const PrincipalPage = ({ auth, setAuth }) => {
  return (
    <section className="principal">
      <HeadPrincipal></HeadPrincipal>
      <NavPrincipal auth={auth} setAuth={setAuth}></NavPrincipal>
      <Categories></Categories>
      <LastBooks></LastBooks>
    </section>
  );
};

export { PrincipalPage };
