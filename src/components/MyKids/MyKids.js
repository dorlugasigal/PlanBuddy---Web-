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
import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from "semantic-ui-calendar-react";

class MyKids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      dateTime: "",
      datesRange: "",
      openEdit: false,
      openDelete: false,
      openView: false,
      openEditMorning: false,
      openEditNoon: false,
      openEditNight: false,
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
  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  extra = (
    <div>
      <Button.Group widths="4">
        <Popup />
        <Modal trigger={<Button icon="edit" inverted color="pink" />}>
          <Modal.Header>
            <Icon name="edit" />
            Edit Tasks{" "}
            <Modal
              size="small"
              trigger={
                <Button floated="right" inverted color="pink">
                  <Icon name="plus" />
                  Add
                </Button>
              }
            >
              <Modal.Header>
                <Icon name="plus" />
                Add a new task
              </Modal.Header>
              <Modal.Content>
                <Form size="large">
                  <Form.Input
                    fluid
                    icon="user circle"
                    iconPosition="left"
                    placeholder="Task Name"
                    onChange={e => this.setState({ phone: e.target.value })}
                  />
                  <Form.Input
                    fluid
                    icon="image"
                    iconPosition="left"
                    placeholder="Image"
                    onChange={e =>
                      this.setState({ pass: e.target.value }, () =>
                        console.log("t")
                      )
                    }
                  />
                  <DateTimeInput
                    name="dateTime"
                    placeholder="Date Time"
                    //value={this.state.dateTime}
                    iconPosition="left"
                    onChange={() => this.handleChange()}
                  />
                </Form>
              </Modal.Content>
              <Modal.Actions>
                <Button inverted color="pink">
                  Create Task
                </Button>
              </Modal.Actions>
            </Modal>
          </Modal.Header>
          <Modal.Content image scrolling>
            <Card
              image="https://png.pngtree.com/element_origin_min_pic/16/09/04/1657cbd76517afc.jpg"
              header="Bus to School"
              description="Get in to the Bus."
              extra={this.extra}
            />{" "}
          </Modal.Content>
        </Modal>
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
    </div>
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
          <Grid columns={3} centered divided>
            <Grid.Row>
              <Grid.Column>
                <Card
                  image="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                  header="Noy Cohen"
                  description="My sweet daughter."
                  extra={this.extra}
                />{" "}
              </Grid.Column>
              <Grid.Column>
                <Card
                  image="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
                  header="Eli Cohen"
                  description="My lovely son."
                  extra={this.extra}
                />{" "}
              </Grid.Column>
              <Grid.Column>
                <Card
                  image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  header="Elliot Baker"
                  description="The coolest son."
                  extra={this.extra}
                />{" "}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Card
                  image="/images/person1.png"
                  header="Elliot Baker"
                  meta="Friend"
                  description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
                  extra={this.extra}
                />{" "}
              </Grid.Column>
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
