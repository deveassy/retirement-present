import React from "react";
import { Route, Switch } from "react-router-dom";
import AlbumPage from "../components/AlbumPage";
import GiftPage from "../components/GiftPage";
import GuestbookPage from "../components/GuestbookPage";
import HeaderMenu from "../components/HeaderMenu";
import MainPage from "../components/MainPage";
import ProfilePage from "../components/ProfilePage";
import paths from "./paths.json";
import RouterContainer from "./RouterContainer";

function PageRouter() {
  const renderHeader = () => {
    return <HeaderMenu />;
  };
  return (
    <RouterContainer renderHeader={renderHeader}>
      <Switch>
        <Route exact path={paths.main} component={MainPage} />
        <Route path={paths.profile} component={ProfilePage} />
        <Route path={paths.gift} component={GiftPage} />
        <Route path={paths.album} component={AlbumPage} />
        <Route path={paths.guestbook} component={GuestbookPage} />
      </Switch>
    </RouterContainer>
  );
}

export default PageRouter;
