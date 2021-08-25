import React from "react";
import { Link } from "react-router-dom";
import paths from "../../routes/paths.json";

export default function HeaderMenu() {
  return (
    <div>
      <Link to={paths.profile}>PROFILE</Link>
      <Link to={paths.gift}>GIFT</Link>
      <Link to={paths.main}>MAIN</Link>
      <Link to={paths.album}>ALBUM</Link>
      <Link to={paths.guestbook}>GUESTBOOK</Link>
    </div>
  );
}
