import React from "react";
import { Button, Form, Grid, Image, Segment, Modal } from "semantic-ui-react";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  open = () => {
    this.setState({ open: true });
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
                icon="user"
                iconPosition="left"
                placeholder="Phone"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Modal
                open={open}
                size="small"
                trigger={
                  <Button onClick={this.open} color="pink" fluid size="large">
                    Login
                  </Button>
                }
              >
                <Modal.Header>Modal #2</Modal.Header>
                <Modal.Content>
                  <p>That's everything!</p>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    icon="check"
                    content="All Done"
                    onClick={this.close}
                  />
                </Modal.Actions>
              </Modal>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
