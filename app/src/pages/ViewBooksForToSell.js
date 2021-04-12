import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { ViewBook } from "../components/ViewBook";
import { ButtonDelete } from "../components/Buttons";
const ViewBooksForToSell = ({ auth }) => {
  let { idBook } = useParams();
  const history = useHistory();
  return (
    <ViewBook
      buttons={
        <div className="btnPurchase">
          <button
            className="btnViewBook"
            onClick={() =>
              history.push(`/principal/profile/list/toSell/book/${idBook}/edit`)
            }
          >
            Editar
          </button>
          <ButtonDelete
            idBook={idBook}
            to={"to"}
            rout={"toSell"}
            auth={auth}
          ></ButtonDelete>
        </div>
      }
      nameKind={"En venta"}
      kind={"toSell"}
    ></ViewBook>
  );
};

export { ViewBooksForToSell };
