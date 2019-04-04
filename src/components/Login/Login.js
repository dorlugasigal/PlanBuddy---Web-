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
  Message
} from "semantic-ui-react";

import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, phone: "", pass: "" };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.account.isAuthenticated)
      this.setState({
        isAuthenticated: true,
        user: nextProps.account.user
      });
  }

  open = () => {
    this.props.authenticate({
      phone: this.state.phone,
      password: this.state.pass
    });
    if (!this.state.isAuthenticated) this.setState({ open: true });
  };

  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    return (
      <Grid
        className="login-form"
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
              <Modal
                open={open}
                size="small"
                trigger={
                  <Button
                    onClick={this.open}
                    inverted
                    color="pink"
                    fluid
                    size="large"
                  >
                    Login
                  </Button>
                }
              >
                <Modal.Header>SMS Verification</Modal.Header>
                <Modal.Content>
                  <p>
                    We have sent a verification code to your mobile. Please
                    enter the code:
                  </p>
                  <Form.Input style={{ width: "430px" }} />
                  <br />
                  <a>Click here if you havnt received a text message.</a>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    inverted
                    color="pink"
                    icon="check"
                    content="OK"
                    onClick={this.close}
                  />
                </Modal.Actions>
              </Modal>
            </Segment>
          </Form>
          <Message>
            Don't have an account yet? <a href="/register">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

const stateToProps = state => ({
  account: state.account
});

const dispatchToProps = dispatch => ({
  authenticate: user => dispatch(actions.authenticate(user))
});

export default connect(
  stateToProps,
  dispatchToProps
)(Login);
