import { NavLink } from "react-router-dom";

function CreatePage() {
  return (
    <div className="bg-create min-vh-100">
    <div className="container-fluid">
      <div className="row">
        <div className="col-6"></div>
        <div className="col-lg-6">
        <nav className="row flex-column justify-content-around align-items-center min-vh-100">
          <div className="col-12 text-center">
            <NavLink
              to="/"
              className="text-grunge text-nav-lg text-light text-decoration-none text-shadow-nav-lg"
            >
              Home
            </NavLink>
          </div>
          <div className="col-12 text-center">
            <NavLink
              to="/art"
              className="text-grunge text-nav-lg text-light text-decoration-none text-shadow-nav-lg"
            >
          ART
            </NavLink>
          </div>
          <div className="col-12 text-center">
            <NavLink
              to="/wood"
              className="text-grunge text-nav-lg text-light text-decoration-none text-shadow-nav-lg"
            >
     WOOD
            </NavLink>
          </div>
          <div className="col-12 text-center">
            <NavLink
              to="/tattoo"
              className="text-grunge text-nav-lg text-light text-decoration-none text-shadow-nav-lg
              "
            >
        Tattoo
            </NavLink>
          </div>
        </nav>
        </div>
      </div>

    </div>
    </div>
  );
}

export default CreatePage;
