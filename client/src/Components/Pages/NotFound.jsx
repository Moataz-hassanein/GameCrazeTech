import { Link } from "react-router-dom";
import "../../Style/NotFound.css";

function NotFound() {
  return (
    <div className="main">
      <div className="bg-purple">
        <div className="stars">
          <div className="central-body">
            <img
              className="image-404"
              src="https://res.cloudinary.com/duyuo6if6/image/upload/v1683150988/404/404_m98z0v.svg"
              style={{ width: "500px" }}
            />
            <Link to="/gameList" className="btn-go-home" >
              GO BACK HOME
            </Link>
          </div>
          <div className="objects">
            <img
              className="object_rocket"
              src="https://res.cloudinary.com/duyuo6if6/image/upload/v1683151020/404/rocket_aivaiq.svg"
              style={{ width: "60px" }}
            />
            <div className="earth-moon">
              <img
                className="object_earth"
                src="https://res.cloudinary.com/duyuo6if6/image/upload/v1683150988/404/earth_jz5fwn.svg"
                style={{ width: "100px" }}
              />
              <img
                className="object_moon"
                src="https://res.cloudinary.com/duyuo6if6/image/upload/v1683151014/404/moon_nahkqa.svg"
                style={{ width: "80px" }}
              />
            </div>
            <div className="box_astronaut">
              <img
                className="object_astronaut"
                src="https://res.cloudinary.com/duyuo6if6/image/upload/v1683150988/404/astronaut_khkqyn.svg"
                style={{ width: "140px" }}
              />
            </div>
          </div>
          <div className="glowing_stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
