import React from "react";
import { useParams } from "react-router-dom";
import { ViewBook } from "../components/ViewBook";
import { ButtonPurchaseFavoriteReserved } from "../components/Buttons";

const ViewBooksForCategories = ({ auth }) => {
  let { idBook } = useParams();
  return (
    <ViewBook
      buttons={
        <div className="btnPurchase">
          <ButtonPurchaseFavoriteReserved
            idBook={idBook}
            to={"favorite"}
            name={"Favorito"}
            rout={"favorites"}
            auth={auth}
          ></ButtonPurchaseFavoriteReserved>
          <ButtonPurchaseFavoriteReserved
            idBook={idBook}
            to={"reservation"}
            name={"Reservar"}
            rout={"reserved"}
            auth={auth}
          ></ButtonPurchaseFavoriteReserved>
          <ButtonPurchaseFavoriteReserved
            idBook={idBook}
            to={"buy"}
            name={"Comprar"}
            rout={"purchase"}
            auth={auth}
          ></ButtonPurchaseFavoriteReserved>
        </div>
      }
    ></ViewBook>
  );
};

export { ViewBooksForCategories };
