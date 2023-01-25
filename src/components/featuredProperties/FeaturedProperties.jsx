import "./featuredproperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
        src="https://www.oyster.com/wp-content/uploads/sites/35/2019/05/pool-v15617307-1440.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">ITC Rajputana</span>
        <span className="fpCity">Jaipur</span>
        <span className="fpPrice">Starting from ₹12000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
        src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/12/15/Pictures/_9f2b6346-ffd3-11e8-9457-b1b429387a4e.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Taj Hotel</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from ₹14000</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Jaipur</span>
        <span className="fpPrice">Starting from ₹9900</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/f7/12/82/radisson-hotel-shimla.jpg?w=1200&h=-1&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Radisson Jass</span>
        <span className="fpCity">Shimla</span>
        <span className="fpPrice">Starting from ₹10500</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;