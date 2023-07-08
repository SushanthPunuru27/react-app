import { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const { name, location } = props;
  return (
    <div className="user-details">
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click to change count
      </button>
      <h3>Name: {name}</h3>
      <h3>Location: {location}</h3>
      <h3>address: Sushanth@27</h3>
    </div>
  );
};

export default User;
