const Shimmer = () => {
  return (
    <div className="res-containers">
      {Array(9)
        .fill("")
        .map((index) => (
          <div key={index} className="shimmer-cards"></div>
        ))}
    </div>
  );
};

export default Shimmer;
