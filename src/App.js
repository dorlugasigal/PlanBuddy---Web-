import React, { Component } from "react";
import { Menu, Image, Icon, Dropdown } from "semantic-ui-react";
import "./App.css";

import MyKids from "./components/MyKids/MyKids";
import About from "./components/About/About";
import Settings from "./components/Settings/Settings";
import Premium from "./components/Premium/Premium";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "myKids" };
  }

  handleItemClick = (e, { name }) => {
    console.log("name: " + name);
    this.setState({ activeItem: name });
  };

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
            active={activeItem === "myKids"}
            onClick={this.handleItemClick}
          >
            My Kids
          </Menu.Item>
          <Menu.Item
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
            name="premium"
            active={activeItem === "premium"}
            onClick={this.handleItemClick}
          >
            Buy Premium
          </Menu.Item>
          <Menu.Menu position="right">
            <Dropdown item text={"Welcome, " + localStorage.getItem("parent")}>
              <Dropdown.Menu>
                <Dropdown.Item icon="sign-out" text="Log off" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
        {activeItem === "myKids" ? (
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
