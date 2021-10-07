import React, { ReactElement } from "react";
import styled from "styled-components";

type RouterProps = {
  renderHeader?: () => ReactElement;
  children: ReactElement;
  renderFooter?: () => ReactElement;
};

export default function RouterContainer(props: RouterProps) {
  const { renderHeader, children: body, renderFooter } = props;
  return (
    <div>
      {renderHeader ? (
        <HeaderContainer>{renderHeader()}</HeaderContainer>
      ) : null}
      <BodyContainer>{body}</BodyContainer>
      {renderFooter ? (
        <FooterContainer>{renderFooter()}</FooterContainer>
      ) : null}
    </div>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  text-decoration: none;
  color: #000;
`;
const BodyContainer = styled.div`
  margin-top: 100px;
`;
const FooterContainer = styled.div``;
