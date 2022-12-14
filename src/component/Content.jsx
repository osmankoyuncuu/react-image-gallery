const Content = (props) => {
  const { photographer, src } = props; // Desc.
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={src.large} alt="" />
      </div>
      <div style={{ color: "blue" }} className="info">
        {photographer}
      </div>
    </div>
  );
};
export default Content;
