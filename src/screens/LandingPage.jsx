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


   <div className="row">
    <div className="col-12 text-center">
   {/* ?modal launch */}
<a type="button"  data-bs-toggle="modal" data-bs-target="#guestBook" className="text-graffiti text-nav-md  text-light text-decoration-none ">
 Please Sign my Guest Book
</a>

{/* modal */}
<div class="modal fade" id="guestBook" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Guest Book</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
       
      <form>
      <div class="row">
  <div class="col-6">
    <input type="text" class="form-control text-center'" placeholder="First name" aria-label="First name"></input>
  </div>
  <div class="col-6">
    <input type="text" class="form-control text-center'" placeholder="Last name" aria-label="Last name"></input>
  </div>
  <div class="my-3 col-12">
   
    <input type="email" class="form-control text-center" placeholder="Email" id="InputEmail" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

</div>

<div className="row mb-3">

  <div class="col-6">
    <label class="visually-hidden" for="specificSizeSelect">Preference</label>
    <select class="form-select" id="specificSizeSelect">
      <option selected>Choose...</option>
      <option value="1">Professional seeking to hire</option>
      <option value="2">Fellow Artist</option>
      <option value="3">Art Lover</option>
    </select>
  </div>
  <div class="col-6  justify-content-center d-flex align-items-center">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck2"></input>
      <label class="form-check-label" for="autoSizingCheck2">
        Email Me Updates
      </label>
    </div>

</div>
</div>


  <button type="submit" class="btn btn-primary">Sign Guest Book</button>
</form>


       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div>
    </div>
   </div>
 </div>
  );
}

export default LandingPage;
