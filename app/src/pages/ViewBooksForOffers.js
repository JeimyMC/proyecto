import React, { useState } from "react";
import { ViewBook } from "../components/ViewBook";
import { Notifications } from "../components/Notifications";

const ViewBooksForOffers = ({ auth }) => {
  const [active, setActive] = useState(false);
  const comparate = () => (active ? setActive(false) : setActive(true));
  return (
    <ViewBook
      buttons={
        <div>
          <button className="btnViewBook" onClick={comparate}>
            Ver
          </button>
          {active ? <Notifications auth={auth}></Notifications> : null}
        </div>
      }
      nameKind={"Notificaciones"}
      kind={"offers"}
    ></ViewBook>
  );
};

export { ViewBooksForOffers };
