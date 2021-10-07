import React from "react";
import { Container, MainImg, MainContent } from "./styles";

function MainPage() {
  return (
    <Container>
      <MainImg src="/img/mainImg.jpeg" alt="main-img" />
      <MainContent>안녕하세요.</MainContent>
    </Container>
  );
}

export default MainPage;
