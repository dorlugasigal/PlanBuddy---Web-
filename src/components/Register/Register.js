import React from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions/account.actions";
import {
  Button,
  Form,
  Grid,
  Image,
  Segment,
  Modal,
  Message,
  Icon
} from "semantic-ui-react";

import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phone: "", pass: "", email: "", name: "" };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.account.isAuthenticated)
      this.setState({
        isAuthenticated: true,
        user: nextProps.account.user
      });
  }

  signUp = () => {
    this.props.register({
      phone: this.state.phone,
      password: this.state.pass,
      email: this.state.email,
      name: this.state.name
    });
  };

  render() {
    return (
      <Grid
        className="register-form"
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Image src="/images/icon.png" size="small" centered />
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                onChange={e => this.setState({ email: e.target.value })}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Full Name"
                onChange={e => this.setState({ name: e.target.value })}
              />
              <Form.Input
                fluid
                icon="phone"
                iconPosition="left"
                placeholder="Phone"
                onChange={e => this.setState({ phone: e.target.value })}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={e => this.setState({ pass: e.target.value })}
              />
              <Button inverted color="pink" onClick={this.signUp}>
                Sign Up
                <Icon name="arrow right" />
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const stateToProps = state => ({
  account: state.account
});

const dispatchToProps = dispatch => ({
  register: user => dispatch(actions.registerUser(user))
});

export default connect(
  stateToProps,
  dispatchToProps
)(Register);
