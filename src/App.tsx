import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import UserList from "./components/UserList/UserList";
import UserDetails from "./components/UserDetails/UserDetails";
import UserForm from "./components/UserForm/UserForm";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
export enum Locale {
  EN = "en",
  PL = "pl",
}

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === Locale.PL ? Locale.EN : Locale.PL);
  };
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/user-list/:userID" element={<UserDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Button variant="contained">{t("app.home.header")}</Button>
      <button onClick={changeLanguage}>
        <span>{i18n.language}</span>
      </button>
    </div>
  );
}

export default App;
