import * as React from "react";
import { Header, Icon, Grid, Button } from "semantic-ui-react";
import { Link } from "gatsby";
import { withLayout } from "../components/Layout";

const NotFoundPage = () => (
  <Grid
    centered
    verticalAlign="middle"
    style={{
      minHeight: "700px",
    }}
  >
    <Grid.Column>
      <Grid.Row style={{ textAlign: "center" }}>
        <Icon name="marker" size="huge" />
        <Header as="h1">You are here!</Header>
        <Header as="h2">But nothing found for you #404</Header>
        <Button
          style={{ marginTop: "2rem" }}
          size="large"
          basic
          color="black"
          as={Link}
          to="/"
        >
          Go Back
        </Button>
      </Grid.Row>
    </Grid.Column>
  </Grid>
);

export default withLayout(NotFoundPage);
