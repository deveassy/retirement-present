import React from "react";
import paths from "../../../routes/paths.json";
import {
  Positioner,
  WhiteBackground,
  HeaderContents,
  MenuLinks,
  Menu,
  // Spacer,
  BottomBorder,
} from "./styles";

type HeaderProps = {
  children: any;
};

export default function Header({ children }: HeaderProps) {
  return (
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <MenuLinks>
            <Menu to={paths.main}>MAIN</Menu>
            <Menu to={paths.profile}>PROFILE</Menu>
            <Menu to={paths.gift}>GIFT</Menu>
            <Menu to={paths.album}>ALBUM</Menu>
            <Menu to={paths.guestbook}>GUESTBOOK</Menu>
            {/* <Spacer /> */}
            {children}
          </MenuLinks>
        </HeaderContents>
      </WhiteBackground>
      <BottomBorder />
    </Positioner>
  );
}
