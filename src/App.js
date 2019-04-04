import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item name="logo">
          <Image src="/images/logo.png" size="mini" />
        </Menu.Item>
        <Menu.Item
          name="editorials"
          active={activeItem === "editorials"}
          onClick={this.handleItemClick}
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name="reviews"
          active={activeItem === "reviews"}
          onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name="upcomingEvents"
          active={activeItem === "upcomingEvents"}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
    );
  }
}

export default App;
