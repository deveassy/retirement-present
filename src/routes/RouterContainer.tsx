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

const HeaderContainer = styled.div``;
const BodyContainer = styled.div``;
const FooterContainer = styled.div``;
