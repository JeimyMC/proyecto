import React from "react";
import { CreateProfile } from "../components/CreateProfile";

const CreateProfilePage = ({ auth }) => {
  return <CreateProfile auth={auth}></CreateProfile>;
};

export { CreateProfilePage };
