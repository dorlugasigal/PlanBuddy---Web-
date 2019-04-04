import React from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions/kids.actions";
import {
  Card,
  Icon,
  Grid,
  Button,
  Container,
  Header,
  Popup,
  Divider,
  Modal,
  Image,
  Form,
  Segment
} from "semantic-ui-react";

class MyKids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openEdit: false,
      openDelete: false,
      openView: false,
      kid: {
        name: "",
        phone: "",
        parentPhone: ""
      }
    };
  }

  addKid = () => {
    this.props.addKid(this.state.kid);
  };

  handleName = e => {
    let kid = { ...this.state.kid };
    kid.name = e.target.value;
    this.setState({ kid });
  };
  handlePhone = e => {
    let kid = { ...this.state.kid };
    kid.phone = e.target.value;
    this.setState({ kid });
  };

  editClick() {}

  extra = (
    <Button.Group widths="4">
      <Popup
        inverted
        content="Edit Schedule"
        trigger={
          <Button onclick="editClick()" icon="edit" inverted color="pink" />
        }
      />
      <Button.Or />

      <Popup
        inverted
        content="View Schedule"
        trigger={<Button icon="eye" inverted color="purple" />}
      />
      <Button.Or />
      <Popup
        inverted
        content="Delete Schedule"
        trigger={<Button icon="delete" inverted color="red" />}
      />
    </Button.Group>
  );

  render() {
    return (
      <div>
        <Container>
          <Header as="h2" icon textAlign="center">
            <Icon name="users" circular inverted color="pink" />
            <Header.Content>My Kids</Header.Content>
          </Header>
          <Modal
            trigger={
              <Button inverted color="pink">
                <Icon name="plus" />
                Add
              </Button>
            }
          >
            <Modal.Header>
              <Icon name="plus circle" />
              Add a new child
            </Modal.Header>
            <Modal.Content>
              <Form size="large">
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Name"
                  onChange={e => this.handleName(e)}
                />
                <Form.Input
                  fluid
                  icon="phone"
                  iconPosition="left"
                  placeholder="Phone"
                  onChange={e => this.handlePhone(e)}
                />
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button
                inverted
                color="pink"
                content="Add"
                onClick={this.addKid}
              />
            </Modal.Actions>
          </Modal>

          <Divider />
          <Grid columns={5} centered>
            <Grid.Row centered>
              <Grid.Column>
                <Card
                  image="/images/person1.png"
                  header="Elliot Baker"
                  meta="Friend"
                  description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
                  extra={this.extra}
                />{" "}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

const stateToProps = state => ({
  kids: state.kids
});

const dispatchToProps = dispatch => ({
  addKid: user => dispatch(actions.addKid(user))
});

export default connect(
  stateToProps,
  dispatchToProps
)(MyKids);
