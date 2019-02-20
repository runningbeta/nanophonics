import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import Contact from "../components/Contact/Contact";
import { Segment, Container, Grid, Header } from "semantic-ui-react";

const IndexPage = (props: LayoutProps) => (
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted
      />
      <Container text>
        <Header inverted as="h1">
          AI powered mobile apps
        </Header>
        <Header inverted as="h2">
          DSP + Machine Learning + Mobile Apps
        </Header>
        {/* <Button style={{ marginTop: "3rem" }} secondary size="huge">
          Get started!
        </Button> */}
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe portfolio">
      <Grid stackable columns="2" verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="2">
            <Header as="h1">Portfolio</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched className="portfolio-item">
          <Grid.Column>
            <div
              style={{
                height: "25rem",
                width: "100%",
                backgroundImage: `url(${require("../assets/stock/pregnancy.jpg")})`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            />
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              Bellabeat Shell: Listen to Babies Heartbeat using iPhone
            </Header>
            <p>
              <b>A safe, non-invasive and completely natural way</b> of
              listening to your baby’s heartbeat. Get to know your little one
              and share the excitement with those you love.
            </p>
            <p>
              No waves in. Just sound out. Safely listen to your baby’s heart
              without Doppler technology.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched className="portfolio-item">
          <Grid.Column>
            <Header as="h1">NDA - Project in Machining Space</Header>
            <p>
              <b>Developing an App for partner in the machining space</b>
              <ul>
                <li>DSP</li>
                <li>Machine Learning</li>
                <li>iOS</li>
              </ul>
            </p>
          </Grid.Column>
          <Grid.Column>
            <div
              style={{
                height: "25rem",
                width: "100%",
                backgroundImage: `url(${require("../assets/stock/lathe.jpg")})`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched className="portfolio-item">
          <Grid.Column>
            <div
              style={{
                height: "25rem",
                width: "100%",
                backgroundImage: `url(${require("../assets/stock/accident.jpg")})`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            />
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              Muvr: Medical Wareables for Post-Operation Recovery
            </Header>
            <p>
              Muvr’s proprietary wearable sensors enable real-time joint motion
              tracking on your smartphone. Simply place the sensors on the
              phone's screen to connect. More than 18,000 data points per minute
              and intelligent algorithms provide accurate, objective, and
              actionable insights.
            </p>
            <p>
              Nanophonics developed calibration algorithms - a prerequisite for
              the Muvr's gyroscope senzors to provide punctual data.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched className="portfolio-item">
          <Grid.Column>
            <Header as="h1">NDA - Gas and Oil company</Header>
            <p>
              <b>Developing an App for partner in the machining space</b>
              <ul>
                <li>DSP</li>
                <li>Machine Learning</li>
                <li>iOS</li>
              </ul>
            </p>
          </Grid.Column>
          <Grid.Column>
            <div
              style={{
                height: "25rem",
                width: "100%",
                backgroundImage: `url(${require("../assets/stock/oil.jpg")})`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate">
      <Grid
        columns="3"
        textAlign="center"
        divided
        relaxed
        stackable
        className="container"
      >
        <Grid.Row>
          <Grid.Column width="16" textAlign="left">
            <Header as="h1">Team</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="left">
            <Header as="h2">
              Ivan Vican
              <Header.Subheader>CEO</Header.Subheader>
            </Header>
            <div
              style={{
                height: "35rem",
                width: "100%",
                backgroundImage: `url(${require("../assets/team/ivan-vican-3.jpg")})`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            />
            <p style={{ marginTop: "1rem" }}>
              Senior Signal Processing and Algorithms Engineer with interests
              and experience in several domains (biomedicine, acoustics, sensors
              and IoT). Currently working as a freelance consultant in several
              fields concerning Audio applications and DSP algorithms.
            </p>
          </Grid.Column>
          <Grid.Column textAlign="left">
            <Header as="h2">
              Ivan Fabijanović
              <Header.Subheader>CTO</Header.Subheader>
            </Header>
            <div
              style={{
                height: "35rem",
                width: "100%",
                backgroundImage: `url(${require("../assets/team/ivan-fabijanovic-2.jpg")})`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            />
            <p style={{ marginTop: "1rem" }}>
              Senior Software Engineer specialised in iOS development.
              Specializing in mobile and web applications, reactive programming,
              computer graphics and blockchain/crypto.
            </p>
          </Grid.Column>
          <Grid.Column textAlign="left">
            <Header as="h2">
              Fabijan Žunić
              <Header.Subheader>DSP Engineer</Header.Subheader>
            </Header>
            <div
              style={{
                height: "35rem",
                width: "100%",
                opacity: 0.3,
                backgroundImage: `url(${require("../assets/team/ivan-vican-3.jpg")})`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            />
            <p style={{ marginTop: "1rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment vertical className="stripe feature">
      <Contact />
    </Segment>
  </div>
);

export default withLayout(IndexPage);
