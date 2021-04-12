import React from "react";
import { FormCreateBook } from "../components/FormCreatebook";

const FormBookPage = ({ auth }) => {
  return <FormCreateBook auth={auth}></FormCreateBook>;
};

export { FormBookPage };
