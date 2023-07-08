import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };

    console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child Component did mount");
  }

  render() {
    console.log(this.props.name + "Child render");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-details">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          click to change the count
        </button>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>address: Sushanth@27</h3>
      </div>
    );
  }
}

export default UserClass;
