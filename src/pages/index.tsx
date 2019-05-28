import * as React from "react";
// import { Link } from "gatsby";
// import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import Contact from "../components/Contact/Contact";
import {
  Button,
  Card,
  Container,
  Grid,
  Header,
  Icon,
  Segment,
  Responsive,
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) => (
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      {/* <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted
      /> */}
      <Container text>
        <Header inverted as="h2">
          NANOPHONICS
          </Header>
        <Header inverted as="h1">
          AI powered mobile apps
        </Header>
        <Responsive as={React.Fragment} maxWidth={Responsive.onlyMobile.maxWidth} >
          <Header style={{ margin: "4rem 0 0.5rem" }} className="only mobile" inverted as="h3">
            Signal Processing
            </Header>
          <Header style={{ margin: "0.5rem 0" }} className="only mobile" inverted as="h3">
            Machine Learning
            </Header>
          <Header style={{ margin: "0.5rem 0" }} className="only mobile" inverted as="h3">
            Mobile Apps
            </Header>
        </Responsive>
        <Responsive as={React.Fragment} minWidth={Responsive.onlyMobile.maxWidth} >
          <Header className="only mobile" inverted as="h3">
            Signal Processing | Machine Learning | Mobile Apps
            </Header>
        </Responsive>
        {/* <Button
          style={{ marginTop: "3rem" }}
          basic
          inverted
          color="black"
          size="huge"
        >
          Contact us <Icon name="chevron right" />
        </Button> */}
      </Container>
    </Segment>

    <Segment vertical className="stripe alternate">
      <Container>
        <Grid columns="2" stackable relaxed stretched>
          <Grid.Row>
            <Grid.Column width="2">
              <Header as="h1">Services</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Card fluid>
                <Card.Content>
                  <Header as="h2">
                    <Icon name="signal" />
                    Signal Processing &amp; Algorithms
                  </Header>
                  <Card.Description>
                    <p>
                      We have an in-depth understanding of the math &amp;
                      physics behind the processes in nature.
                    </p>
                    <p>
                      Whether you require extraction of relevant data from
                      noise, prediction of important values from seemingly
                      unimportant ones, or something else entirely, we can help.
                    </p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card fluid>
                <Card.Content>
                  <Header as="h2">
                    <Icon name="graduation" />
                    Machine Learning
                  </Header>
                  <Card.Description>
                    <p>
                      Facial recognition, speech classification and automatic
                      medical diagnosis are all practical uses of machine
                      learning.
                    </p>
                    <p>
                      If you have a problem that requires artificial
                      intelligence that learns from your data, this is the right
                      place to come.
                    </p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Card fluid>
                <Card.Content>
                  <Header as="h2">
                    <Icon name="sound" />
                    Audio Development
                  </Header>
                  <Card.Description>
                    <p>
                      Not only we specialize in everything from making real-time
                      audio processing to designing 2D and 3D audio solutions,
                      we also take special interest in implementing custom VST
                      plugins.
                    </p>
                    <p>
                      Our team has more than 10 years of experience in the audio
                      domains.
                    </p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card fluid>
                <Card.Content>
                  <Header as="h2">
                    <Icon name="mobile alternate" />
                    Mobile Applications
                  </Header>
                  <Card.Description>
                    <p>
                      The algorithms and solutions we provide can be integrated
                      into a native iOS and Android app to utilize powerful
                      hardware and sensors available in today's phones.
                    </p>
                    <p>
                      We take special pride in our secret processes of
                      integrating smart systems with the mobile apps that do
                      more and cost less.
                    </p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    <Segment vertical className="stripe portfolio">
      <Grid
        stackable
        relaxed
        columns="2"
        verticalAlign="middle"
        className="container"
      >
        <Grid.Row>
          <Grid.Column width="2">
            <Header as="h1">Portfolio</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched className="portfolio-item">
          <Grid.Column>
            <Header as="h1">
              Luke Roberts - The World's First Smart Design Lamp
            </Header>
            <p>
              Luke Roberts provides unique directional lighting technology and
              powered by artificial intelligence to give you the perfect light
              for any situation.
            </p>
            <p>
              Senior engineers from Nanophonics are providing machine learning
              solutions for this state-of-the-art lamp.
            </p>
          </Grid.Column>
          <Grid.Column only="tablet computer">
            <div
              style={{
                backgroundImage: `url(${require("../assets/products/lukeroberts.jpg")})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                height: "25rem",
                width: "100%",
              }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched className="portfolio-item">
          <Grid.Column only="tablet computer">
            <div
              style={{
                backgroundImage: `url(${require("../assets/products/shell.jpg")})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                height: "25rem",
                width: "100%",
              }}
            />
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              Shell by Bellabeat: Listen to Babies Heartbeat using iPhone
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
            <Header as="h1">BassGorilla</Header>
            <p>
              BassGorilla is a electronic music production company specialized
              in interviewing top producers and get them to share exactly what’s
              working for them in terms of state-of-the-art music production
              techniques, ranging from sound design to songwriting to mixing and
              mastering.
            </p>
            <p>
              Nanophonics provided advanced custom VSTs for world-class
              production needs.
            </p>
          </Grid.Column>
          <Grid.Column only="tablet computer">
            <div
              style={{
                backgroundImage: `url(${require("../assets/stock/studio.jpeg")})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                height: "25rem",
                width: "100%",
              }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched className="portfolio-item">
          <Grid.Column only="tablet computer">
            <div
              style={{
                backgroundImage: `url(${require("../assets/products/muvr.png")})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                height: "25rem",
                width: "100%",
              }}
            />
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              Muvr: Medical Wearables for Post-Operation Recovery
            </Header>
            <p>
              Muvr’s proprietary wearable sensors enable real-time joint motion
              tracking on your smartphone. Simply place the sensors on the
              phone's screen to connect. More than 18,000 data points per minute
              and intelligent algorithms provide accurate, objective, and
              actionable insights.
            </p>
            <p>
              Nanophonics helped finetune signal processing algorithms in order
              to improve patient recovery rate.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched className="portfolio-item">
          <Grid.Column>
            <Header as="h1">Flowcommand</Header>
            <p>
              FlowCommand ​is a full service technology company that provides
              software and hardware for oil &amp; gas companies. FlowCommand’s
              mission statement is simple: r​educe risks and costs by using
              expertly architected breakthrough technology​.
            </p>
            <p>
              Our company helped with the velocity tracking and prediction
              technology through the knowledge of signal processing and
              algorithms.
            </p>
          </Grid.Column>
          <Grid.Column only="tablet computer">
            <div
              style={{
                backgroundImage: `url(${require("../assets/stock/oil.jpg")})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                height: "25rem",
                width: "100%",
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate">
      <Grid
        className="container"
      >
        <Grid.Row columns="1">
          <Grid.Column textAlign="left">
            <Header as="h1">Team</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid
        columns="4"
        textAlign="center"
        doubling={true}
        relaxed={true}
        stackable={true}
        className="container"
      >
        <Grid.Row >
          <Grid.Column textAlign="left">
            <Header as="h2">
              Ivan Vican
              <Header.Subheader>Senior Algorithms Engineer</Header.Subheader>
            </Header>
            <div
              style={{
                backgroundImage: `url(${require("../assets/team/ivan-vican-3.jpg")})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                height: "35rem",
                width: "100%",
              }}
            />
            <p style={{ marginTop: "1rem" }}>
              Senior Signal Processing and Algorithms Engineer with interests
              and experience in several domains (biomedicine, acoustics, sensors
              and IoT).
            </p>
            <p>
              Freelance consultant in several fields concerning Audio
              applications and DSP algorithms.
            </p>
          </Grid.Column>
          <Grid.Column textAlign="left">
            <Header as="h2">
              Ivan Fabijanović
              <Header.Subheader>Senior Mobile Engineer</Header.Subheader>
            </Header>
            <div
              style={{
                backgroundImage: `url(${require("../assets/team/ivan-fabijanovic-2.jpg")})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                height: "35rem",
                width: "100%",
              }}
            />
            <p style={{ marginTop: "1rem" }}>
              Senior Software Engineer specialized in iOS development.
            </p>
            <p>
              Specializing in mobile and web applications, reactive programming,
              computer graphics and blockchain/crypto.
            </p>
          </Grid.Column>
          <Grid.Column textAlign="left">
            <Header as="h2">
              Fabijan Žunić
              <Header.Subheader>Junior Audio Engineer</Header.Subheader>
            </Header>
            <div
              style={{
                backgroundImage: `url(${require("../assets/team/fabijan-zunic.jpg")})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                height: "35rem",
                width: "100%",
              }}
            />
            <p style={{ marginTop: "1rem" }}>
              Junior Software Engineer specialized in audio and DSP.
            </p>
            <p>
              Half time
              music producer and audio engineer with interest in room acoustics.
            </p>
          </Grid.Column>
          <Grid.Column textAlign="left">
            <Header as="h2">
              Maša Burda
              <Header.Subheader>Junior Mobile Engineer</Header.Subheader>
            </Header>
            <div
              style={{
                backgroundImage: `url(${require("../assets/team/masa_burda.jpg")})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                height: "35rem",
                width: "100%",
              }}
            />
            <p style={{ marginTop: "1rem" }}>
              Junior Software Engineer with experience in iOS mobile applications
              and machine learning.
            </p>
            <p>
              Primarily focused on developing multipurpose
              mobile applications. Other interests include embedded systems and IoT.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment vertical className="stripe">
      <Contact />
    </Segment>
  </div >
);

export default withLayout(IndexPage);
