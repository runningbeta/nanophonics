import { Link } from "gatsby";
import * as React from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import { Segment, Icon, Container, Sidebar, Grid } from "semantic-ui-react";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "../css/styles-post.css";
import "../css/styles.css";
import "prismjs/themes/prism-okaidia.css";
import { Provider } from "react-redux";
import { store } from "../store";

export const menuItems = [
  { name: "Home", path: "/", exact: true, icon: "home", inverted: true },
  { name: "About", path: "/about/", exact: true, icon: "info circle" },
];

export interface LayoutProps {
  location: {
    pathname: string;
  };
  children: any;
}

const Layout = (props: LayoutProps) => {
  const { pathname } = props.location;
  const isHome = pathname === "/";

  return (
    <Provider store={store}>
      <Sidebar.Pushable as={Segment}>
        <SidebarMenu
          Link={Link}
          pathname={pathname}
          items={menuItems}
          visible={false}
        />

        <Sidebar.Pusher style={{ minHeight: "100vh" }}>
          {/* Header */}
          {isHome ? null : (
            <HeaderMenu Link={Link} pathname={pathname} items={menuItems} />
          )}

          {/* Render children pages */}
          <div style={{ paddingBottom: 300 }}>{props.children}</div>

          {/* Footer */}
          <Segment
            inverted
            vertical
            style={{
              background: "#000",
              bottom: 0,
              position: "absolute",
              width: "100%",
            }}
          >
            <Container textAlign="center">
              <p>
                Powered with <Icon name="heart" color="red" /> by Gatsby 2.0
              </p>
              <Grid columns="2" textAlign="left" style={{ color: "#AAA" }}>
                <Grid.Row>
                  <Grid.Column width="16" textAlign="center">
                    <p>
                      Final Fantasy d.o.o.
                      <br />
                      Kralja Zvonimira 56, 21260 Imotski
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column tablet={8} computer={4}>
                    <p>
                      <span style={{ color: "#6C6C6C" }}>mob: </span>098/628-628
                      <br />
                      <span style={{ color: "#6C6C6C" }}>email: </span>
                      info@nanophonics.com
                      <br />
                      <span style={{ color: "#6C6C6C" }}>OIB: </span>25525283790
                      <br />
                      <span style={{ color: "#6C6C6C" }}>MB: </span>05135052
                    </p>
                  </Grid.Column>
                  <Grid.Column tablet={8} computer={4}>
                    <p>
                      <span style={{ color: "#6C6C6C" }}>IBAN: </span>
                      HR05 2340 0091 1110 2543 2<br />
                      PRIVREDNA BANKA ZAGREB D.D. 10000 ZAGREB, Račkoga 6,
                      Croatia
                      <br />
                      <span style={{ color: "#6C6C6C" }}>SWIFT CODE: </span>
                      PBZGHR2X
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Provider>
  );
};

export default Layout;

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
