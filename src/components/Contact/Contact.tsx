import * as React from "react";
import { navigateTo } from "gatsby";
import { default as ReCAPTCHA } from "react-google-recaptcha";
import * as validate from "validate.js";
import { isEmpty } from "lodash";
import {
  Grid,
  Header,
  Form,
  Button,
  Container,
  Message
} from "semantic-ui-react";

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY;

function encode(data: any) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

type ContactProps = {};
type ContactState = {
  isValid: boolean;
  errors: {
    [key: string]: string;
  };
  visited: {
    [key: string]: boolean;
  };
  showValidation: boolean;
  constraints: any;
  gRecaptchaResponse: any;
};

export default class Contact extends React.Component<
  ContactProps,
  ContactState
> {
  state: ContactState = {
    gRecaptchaResponse: "",
    isValid: true,
    errors: {},
    visited: {},
    showValidation: false,
    constraints: {
      name: {
        presence: true
      },
      email: {
        email: true,
        presence: true
      },
      subject: {
        presence: true
      },
      message: {
        presence: true
      }
    }
  };

  handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { constraints } = this.state;
    const formInput = e.target as HTMLInputElement;
    const state = { ...this.state, [formInput.name]: formInput.value };
    const errors = validate(state, constraints);
    this.setState({ ...state, errors, isValid: isEmpty(errors) });
  };

  handleBlur = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { visited, constraints } = this.state;
    const formInput = e.target as HTMLInputElement;

    const state = {
      ...this.state,
      visited: {
        ...visited,
        [formInput.name]: true
      }
    };
    const errors = validate(state, constraints);
    this.setState({ ...state, errors, isValid: isEmpty(errors) });
  };

  handleRecaptcha = (value: any) => {
    this.setState({ gRecaptchaResponse: value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { state } = this;
    const { constraints } = this.state;
    const errors = validate(state, constraints);
    this.setState({
      ...state,
      errors,
      isValid: isEmpty(errors),
      showValidation: true
    });
    if (!isEmpty(errors)) return;

    const form = e.target as HTMLFormElement;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => {
        const to = form.getAttribute("action");
        navigateTo(to);
      })
      .catch(alert);
  };

  render() {
    const { gRecaptchaResponse, errors, visited, showValidation } = this.state;

    return (
      <Container>
        <Grid columns="2">
          <Grid.Row>
            <Grid.Column>
              <Header as="h2">Contact Us</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header>
                Address
                <Header.Subheader>Adresa</Header.Subheader>
              </Header>
              <Header>
                Email
                <Header.Subheader>Email</Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Form
                data-netlify-recaptcha="true"
                action="/thanks"
                className="contactForm"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <Form.Field hidden>
                  <label>{`Don’t fill this out if you're human: `}</label>
                  <input name="bot-field" placeholder="First Name" />
                </Form.Field>

                <Form.Input
                  error={Boolean(
                    (visited.name || showValidation) && errors.name
                  )}
                  label="Name"
                  placeholder="Your Name"
                  type="input"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  required
                />
                <div className="validation">
                  {(visited.name || showValidation) &&
                    errors.name &&
                    errors.name[0]}
                </div>
                <Form.Input
                  error={Boolean(
                    (visited.name || showValidation) && errors.name
                  )}
                  label="Email"
                  placeholder="your@email.com"
                  type="email"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  required
                />
                <div className="validation">
                  {(visited.email || showValidation) &&
                    errors.email &&
                    errors.email[0]}
                </div>
                <Form.Input
                  label="Subject"
                  name="subject"
                  placeholder="Message subject"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  required
                />
                <div className="validation">
                  {(visited.subject || showValidation) &&
                    errors.subject &&
                    errors.subject[0]}
                </div>
                <Form.TextArea
                  label="Message"
                  rows={5}
                  name="message"
                  placeholder="Message"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  required
                />
                <div className="validation">
                  {(visited.message || showValidation) &&
                    errors.message &&
                    errors.message[0]}
                </div>
                <div data-netlify-recaptcha="true" />
                <Button primary type="submit">
                  Submit
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
