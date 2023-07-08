const Shimmer = () => {
  return (
    <div className="res-containers">
      {Array(15)
        .fill("")
        .map((index) => (
          <div key={index} className="shimmer-cards"></div>
        ))}
    </div>
  );
};

export default Shimmer;
