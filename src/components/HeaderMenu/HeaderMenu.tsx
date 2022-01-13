import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleSidebar } from "../../store";
import { Container, Label, Menu, Icon } from "semantic-ui-react";
import { MenuProps } from "../Menu";

interface HeaderMenuProps extends MenuProps {
  dispatch?: Dispatch<any>;
  inverted?: boolean;
}

export const HeaderMenu = ({
  items,
  pathname,
  Link,
  inverted,
  dispatch,
}: HeaderMenuProps) => (
  <Container>
    <Menu size="large" pointing secondary inverted={inverted}>
      <Menu.Item as="a" href="/" className="mobile hidden">
        nanophonics
      </Menu.Item>
    </Menu>
  </Container>
);

export default connect()(HeaderMenu);
