import React from "react";
import { Route, Switch } from "react-router-dom";
import AlbumPage from "../pages/AlbumPage";
import GiftPage from "../pages/GiftPage";
import GuestbookPage from "../pages/GuestbookPage";
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/ProfilePage";
import paths from "./paths.json";

function PageRouter() {
  // const renderHeader = () => {
  //   return <HeaderContainer />;
  // };
  return (
    <div>
      <Switch>
        <Route exact path={paths.main} component={MainPage} />
        <Route path={paths.profile} component={ProfilePage} />
        <Route path={paths.gift} component={GiftPage} />
        <Route path={paths.album} component={AlbumPage} />
        <Route path={paths.guestbook} component={GuestbookPage} />
      </Switch>
    </div>
  );
}

export default PageRouter;
