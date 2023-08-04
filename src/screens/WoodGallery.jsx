import { NavLink } from "react-router-dom";

function WoodGallery() {
  return (
    <div className="bg-art min-vh-100 ">
      <div className="container-xxl d-flex gallery-height flex-column justify-content-around">
        <div className="row">
          <div className="col-12 text-center text-grunge ">
            <h1 className="text-nav-lg text-primary text-shadow-nav-lg">
              Wood
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12  d-flex align-items-center justify-content-center ">
            <video
              src="./assets/video/woodGallery.mp4"
              muted
              className="shadow-lg trans video-width"
              autoPlay={"autoplay"}
              preLoad="auto"
              loop
            >
             
           
            </video>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <NavLink
              className="text-decoration-none  text-grunge text-nav-md text-light text-shadow-nav-lg"
              to="/"
            >
              Home
            </NavLink>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">

            <NavLink
              className="text-decoration-none text-grunge text-nav-md text-light text-shadow-nav-lg"
              to="/Create"
            >
              Create
            </NavLink>
            </div>
      
        </div>
      </div>
    </div>
  );
}

export default WoodGallery;
