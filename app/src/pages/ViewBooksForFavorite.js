import React from "react";
import { useParams } from "react-router-dom";
import { ViewBook } from "../components/ViewBook";
import {
  ButtonPurchaseFavoriteReserved,
  ButtonDelete,
} from "../components/Buttons";

const ViewBooksForFavorites = ({ auth }) => {
  let { idBook } = useParams();

  return (
    <ViewBook
      buttons={
        <div className="btnPurchase">
          <ButtonDelete
            idBook={idBook}
            to={"favorite"}
            rout={"favorites"}
            auth={auth}
          ></ButtonDelete>
          <ButtonPurchaseFavoriteReserved
            idBook={idBook}
            to={"buy"}
            name={"Comprar"}
            rout={"purchase"}
            auth={auth}
          ></ButtonPurchaseFavoriteReserved>
        </div>
      }
      nameKind={"favoritos"}
      kind={"favorites"}
    ></ViewBook>
  );
};

export { ViewBooksForFavorites };
