import "./product.css";

const Product = ({ img, link, code, name }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle">
          <a href={code} target="_blank" rel="noreferrer">
            <p>Code</p>
          </a>
        </div>
        {/* <div className="p-name">
          <p>{name}</p>
        </div> */}
      </div>
      <a href={link} target="_blank" rel="noreferrer">
          <div className="p-cover" >
            <h2>{name}</h2>
            <p>Hover to preview Project</p>
          </div>
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
