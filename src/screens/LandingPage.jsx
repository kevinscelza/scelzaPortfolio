import {NavLink} from "react-router-dom";


function LandingPage() {
  return (
 <div className="bg-landing  container-fluid">
   <div className="row">
    <div className="col-6 d-flex  min-vh-100 justify-content-center align-items-center">
      
        <img src="./assets/images/me.png" alt=""   />
    </div>
    <div className="col-6 d-flex flex-column align-items-center  justify-content-around">
      <NavLink to='/live' className="text-grunge text-nav-lg text-light text-decoration-none">Live</NavLink>
      <NavLink to='' className="text-grunge text-nav-lg  text-light text-decoration-none">Work</NavLink>
      <NavLink  to='' className="text-grunge text-nav-lg  text-light text-decoration-none">Create</NavLink>
    </div>
   </div>

 </div>
  );
}

export default LandingPage;
