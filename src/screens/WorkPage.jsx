import { NavLink } from "react-router-dom";

function WorkPage() {
  return (
    <div className="bg-work min-vh-100">
      <div className="container d-flex flex-column justify-content-around">
      <nav className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <NavLink
              to="/"
              className="text-grunge text-nav-md text-light text-decoration-none text-shadow-nav-md"
            >
              Home
            </NavLink>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <NavLink
              to="/create"
              className="text-grunge text-nav-md text-light text-decoration-none text-shadow-nav-md"
            >
              Create
            </NavLink>
          </div>
       
        </nav>

        <div className="row">
          <div className="col-12">
          <h1 className="text-grunge text-nav-lg text-center text-light text-shadow-nav-lg">
            Work
            </h1>
          </div>
        </div>

        <div className="row ">
          <div className="col-12 text-center">
          <NavLink to='/'>
            <div className="card text-bg-dark mb-3" style={{width: 75 + 'rem'}}>
             <img src="./assets/images/Git_glitch.jpg" className="card-img" alt="..."></img>
              <div className="card-img-overlay">
                <h3 className="card-title">Project 1</h3>
                <h5 className="card-title">Scelza Portfolio</h5>
                <p className="card-text">Portfoli ReactApp using Bootstrap5 Scss and React Router Dom </p>
                <p className="card-text">https://github.com/kevinscelza/scelzaPortfolio</p>
                <p className="card-text"></p>
                <p className="card-text"><small>Aug 2023</small></p>
              </div>
            </div>
          </NavLink>
          </div>
          <div className="col-12 text-center">
          
            <div className="card text-bg-dark" style={{width: 75 + 'rem'}}>
             <img src="./assets/images/Git_glitch.jpg" className="card-img" alt="..."></img>
              <div className="card-img-overlay">
                <h3 className="card-title">Project 1</h3>
                <h5 className="card-title">Scelza Portfolio</h5>
                <p className="card-text">Portfoli ReactApp using Bootstrap5 Scss and React Router Dom </p>
               <a className="card-text text-light text-decoration-none" rel="noreferrer" target="_blank" href="https://github.com/kevinscelza/scelzaPortfolio">https://github.com/kevinscelza/scelzaPortfolio</a>
                <p className="card-text"></p>
                <p className="card-text"><small>Aug 2023</small></p>
              </div>
            </div>
          
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
          <a type="button" target="_blank" href="./assets/resume/Scelza Resume.pdf"className="text-grunge text-nav-md  text-light text-decoration-none text-shadow-nav-md">
 My Resume
</a>
          </div>
        </div>

        
      </div>
    
    </div>
  );
}

export default WorkPage;
