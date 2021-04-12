import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ViewBook } from "../components/ViewBook";
import { FormValoration } from "../components/FormValoration";

const ViewBooksForPurchase = ({ auth }) => {
  let { idBook } = useParams();
  const [valoration, setValoration] = useState(false);
  return (
    <ViewBook
      buttons={
        <div>
          <button className="btnViewBook" onClick={() => setValoration(true)}>
            Valorar
          </button>
          {valoration ? (
            <FormValoration idBook={idBook} auth={auth}></FormValoration>
          ) : null}
        </div>
      }
      nameKind={"Comprados"}
      kind={"purchase"}
    ></ViewBook>
  );
};

export { ViewBooksForPurchase };
