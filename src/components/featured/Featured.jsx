import "./feature.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/destinations/images/desktop/shimla.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Shimla</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/14/Mumbai_Skyline_at_Night.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
        src="https://navbharattimes.indiatimes.com/thumb/msid-86886479,imgsize-160600,width-540,height-405,resizemode-75/villages-in-rajasthan-in-hindi-86886479.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Rajasthan</h1>
          <h2>432 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;