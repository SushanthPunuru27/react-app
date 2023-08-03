import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "dummy",
        location: "dummy",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component did mount");

    const data = await fetch("https://api.github.com/users/SushanthPunuru27");
    const json = await data.json();

    this.setState({
      userinfo: json,
    });
    console.log(json);
  }

  componentWillUnmount() {
    console.log(this.props.name + "Child Component will unmount");
  }

  render() {
    console.log(this.props.name + "Child render");
    const { name, location, avatar_url } = this.state.userinfo;

    return (
      <div className="user-details">
        <img src={avatar_url} />
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>address: Sushanth@27</h3>
      </div>
    );
  }
}

export default UserClass;
