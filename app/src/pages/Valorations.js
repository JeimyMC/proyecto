import React from "react";
import { Link } from "react-router-dom";
import {
  ValorationsInside,
  ValorationsOutside,
} from "../components/Valorations";

const ValorationInsidePage = ({ auth }) => {
  return (
    <section className="viewValoration">
      <p>Valoraciones</p>
      <nav>
        <Link to="/principal">Principal ˃ </Link>

        <p>Valoraciones</p>
      </nav>
      <ValorationsInside auth={auth}></ValorationsInside>
    </section>
  );
};

const ValorationOutsidePage = () => {
  return (
    <section className="viewValoration">
      <p>Valoraciones</p>
      <nav>
        <Link to="/principal">Principal ˃ </Link>

        <p>Valoraciones</p>
      </nav>
      <ValorationsOutside></ValorationsOutside>
    </section>
  );
};

export { ValorationInsidePage, ValorationOutsidePage };
