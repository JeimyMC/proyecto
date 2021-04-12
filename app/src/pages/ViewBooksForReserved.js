import React from "react";
import { useParams } from "react-router-dom";
import { ViewBook } from "../components/ViewBook";
import { ButtonDelete, ButtonBuyWithReserved } from "../components/Buttons";

const ViewBooksForReserved = ({ auth }) => {
  let { idBook } = useParams();
  return (
    <ViewBook
      buttons={
        <div className="btnPurchase">
          <ButtonDelete
            idBook={idBook}
            to={"reservation"}
            rout={"reserved"}
            auth={auth}
          ></ButtonDelete>
          <ButtonBuyWithReserved
            idBook={idBook}
            auth={auth}
          ></ButtonBuyWithReserved>
        </div>
      }
      nameKind={"Reservados"}
      kind={"reserved"}
    ></ViewBook>
  );
};

export { ViewBooksForReserved };
