import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component did mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>This is About us page</h1>
        {/* <User name={"Sushanth (function)"} location={"Sf"} /> */}
        <UserClass name={"First"} location={"sf"} />
      </div>
    );
  }
}

export default About;
