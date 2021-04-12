import "./App.css";

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ForgetPass } from "./components/ForgetPass";
import { PrincipalPage } from "./pages/PrincipalPage";
import { ViewBooksForReserved } from "./pages/ViewBooksForReserved";
import { FormBookPage } from "./pages/FormBook";
import { ViewBooksForOffers } from "./pages/ViewBooksForOffers";
import { ViewClose, Welcome } from "./components/Close-Welcome-ChangePass";
import { NewPassPage } from "./pages/NewPass";
import { ViewCorrectChangePass } from "./pages/ViewChangePassPage";
import { ViewSendNewPass } from "./pages/ViewSendNewPass";
import { ProfileInsidePage } from "./pages/ProfileInside";
import {
  ValorationInsidePage,
  ValorationOutsidePage,
} from "./pages/Valorations";
import { CreateProfilePage } from "./pages/CreateProfilePage";
import { ListBooksPage } from "./pages/ListBooks";
import { ViewBooksForCategories } from "./pages/ViewBooksForCategories";
import { ViewBooksForToSell } from "./pages/ViewBooksForToSell";
import { ViewBooksForFavorites } from "./pages/ViewBooksForFavorite";
import { ViewBooksForPurchase } from "./pages/ViewBooksForPurchase";
import { ListBooksCategories } from "./pages/ListBooksCategories";
import { Seeker } from "./pages/Seeker";
import { ProfileOutSidePage } from "./pages/ProfileOutside";
import { FormEditBook } from "./components/FormBook";
const port = 8084;

function App() {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || ""
  );

  return (
    <Router>
      <Switch>
        <Route path="/principal/category/book/:idBook/user/:idUser/valorations">
          <ValorationOutsidePage></ValorationOutsidePage>
        </Route>
        <Route path="/principal/category/:id/:name/book/:idBook/user/:idUser">
          <ProfileOutSidePage></ProfileOutSidePage>
        </Route>
        <Route path="/books/:seek/:data">
          <Seeker></Seeker>
        </Route>
        <Route path="/principal/category/:id/:name/book/:idBook">
          <ViewBooksForCategories auth={auth}></ViewBooksForCategories>
        </Route>
        <Route path="/principal/category/:id/:name">
          <ListBooksCategories></ListBooksCategories>
        </Route>
        <Route path="/principal/profile/list/toSell/book/:idBook/edit">
          <FormEditBook></FormEditBook>
        </Route>
        <Route path="/principal/profile/list/favorites/book/:idBook">
          <ViewBooksForFavorites auth={auth}></ViewBooksForFavorites>
        </Route>
        <Route path="/principal/profile/list/purchase/book/:idBook">
          <ViewBooksForPurchase auth={auth}></ViewBooksForPurchase>
        </Route>
        <Route path="/principal/profile/list/reserved/book/:idBook">
          <ViewBooksForReserved auth={auth}></ViewBooksForReserved>
        </Route>
        <Route path="/principal/profile/list/toSell/book/:idBook">
          <ViewBooksForToSell auth={auth}></ViewBooksForToSell>
        </Route>
        <Route path="/principal/profile/list/offers/book/:idBook">
          <ViewBooksForOffers auth={auth}></ViewBooksForOffers>
        </Route>
        <Route path="/principal/profile/list/:kind">
          <ListBooksPage auth={auth}></ListBooksPage>
        </Route>
        <Route path="/principal/profile/edit">
          <CreateProfilePage auth={auth}></CreateProfilePage>
        </Route>
        <Route path="/principal/profile/valorations">
          <ValorationInsidePage auth={auth}></ValorationInsidePage>
        </Route>
        <Route path="/principal/profile">
          <ProfileInsidePage auth={auth}></ProfileInsidePage>
        </Route>
        <Route path="/principal/newBook">
          <FormBookPage auth={auth}></FormBookPage>
        </Route>
        <Route path="/principal/forgetPass/valid">
          <ViewSendNewPass></ViewSendNewPass>
        </Route>
        <Route path="/principal/changePassword/valid">
          <ViewCorrectChangePass></ViewCorrectChangePass>
        </Route>

        <Route path="/principal/changePassword">
          <NewPassPage auth={auth}></NewPassPage>
        </Route>
        <Route path="/principal">
          <PrincipalPage auth={auth} setAuth={setAuth}></PrincipalPage>
        </Route>

        <Route path="/close">
          <ViewClose></ViewClose>
        </Route>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/forgetPass">
          <ForgetPass></ForgetPass>
        </Route>
        <Route path="/">
          <Redirect to="/principal"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

export { App, port };
