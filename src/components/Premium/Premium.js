import React from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions/account.actions";

class Premium extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, phone: "", pass: "", email: "", name: "" };
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
    const { open } = this.state;
    return <div>test3</div>;
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
)(Premium);
