import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "mykids" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu>
          <Menu.Item name="logo">
            <Image src="/images/logo.png" size="mini" />
          </Menu.Item>
          <Menu.Item
            name="myKids"
            active={activeItem === "mykids"}
            onClick={this.handleItemClick}
          >
            My Kids
          </Menu.Item>
          <Menu.Item
            color="violet"
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          >
            About
          </Menu.Item>
          <Menu.Item
            name="settings"
            active={activeItem === "settings"}
            onClick={this.handleItemClick}
          >
            Settings
          </Menu.Item>
          <Menu.Item
            name="premuim"
            active={activeItem === "premuim"}
            onClick={this.handleItemClick}
          >
            Buy Premuim
          </Menu.Item>
        </Menu>
        {activeItem === "mykids" ? (
          <MyKids />
        ) : activeItem === "about" ? (
          <About />
        ) : activeItem === "settings" ? (
          <Settings />
        ) : activeItem === "premium" ? (
          <Premium />
        ) : null}
      </div>
    );
  }
}

export default App;
