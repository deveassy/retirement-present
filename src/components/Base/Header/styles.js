import styled from "styled-components";
import { media, shadow } from "../../../lib/styleUtil";
import oc from "open-color";
import { Link } from "react-router-dom";

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
  ${shadow(1)}
`;

const WhiteBackground = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

const HeaderContents = styled.div`
  width: 100vw;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1rem;

  ${media.wide`
        width: 992px;
  `}
  ${media.tablet`
        width: 100%;
  `}
`;

const MenuLinks = styled.div`
  font-size: 1.4rem;
  letter-spacing: 1.5px;
  font-family: "Rajdhani";
`;

const Menu = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  color: ${oc.teal[7]};
`;

// const Spacer = styled.div`
//   flex-grow: 1;
// `;

const BottomBorder = styled.div`
  height: 3px;
  background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

export {
  Positioner,
  WhiteBackground,
  HeaderContents,
  MenuLinks,
  Menu,
  // Spacer,
  BottomBorder,
};
