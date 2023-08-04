import { NavLink } from "react-router-dom";

function LivePage() {
  return (
    <div className="bg-live min-vh-100">
      <div className=" container py-5">
        <nav className="row">
          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <NavLink
              to="/"
              className="text-grunge text-nav-md text-light text-decoration-none text-shadow-nav-md"
            >
              Home
            </NavLink>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <NavLink
              to="/create"
              className="text-grunge text-nav-md text-light text-decoration-none text-shadow-nav-md"
            >
              Create
            </NavLink>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <NavLink
              to="/"
              className="text-grunge text-nav-md text-light text-decoration-none text-shadow-nav-md"
            >
             Work
            </NavLink>
          </div>
        </nav>
        <div className="row mt-5">
          <div className="col-12">
            <h1 className="text-grunge text-nav-lg text-center text-light text-shadow-nav-lg">
              About
            </h1>
          </div>
          <div className="col-lg-6 text-light bg-overlay-dark mt-4 p-3">
            <p className="text-justify text-fix">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum
              iste quasi doloremque repudiandae architecto alias laborum
              repellendus earum quia sunt aliquam, quae libero veritatis hic
              inventore exercitationem illum? Voluptates sapiente aliquam autem
              expedita eligendi soluta eaque non repellat numquam. Sapiente
              impedit saepe, ex, dolor beatae qui distinctio architecto possimus
              optio voluptatibus quibusdam vel, perferendis quas laboriosam odit
              mollitia hic quae aspernatur. Officiis ex dicta neque quidem saepe
              quibusdam esse veritatis vitae quae repellat consequatur delectus
              quas ipsa nesciunt, eaque quaerat, recusandae laboriosam dolor ab.
              Deserunt provident, nisi consectetur reprehenderit fugit animi,
              veritatis tempora, fugiat illo
            </p>
            <p className="text-justify text-fix">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum
              iste quasi doloremque repudiandae architecto alias laborum
              repellendus earum quia sunt aliquam, quae libero veritatis hic
              inventore exercitationem illum? Voluptates sapiente aliquam autem
              expedita eligendi soluta eaque non repellat numquam. Sapiente
              impedit saepe, ex, dolor beatae qui distinctio architecto possimus
              optio voluptatibus quibusdam vel, perferendis quas laboriosam odit
              mollitia hic quae aspernatur. Officiis ex dicta neque quidem saepe
              quibusdam esse veritatis vitae quae repellat consequatur delectus
              quas ipsa nesciunt, eaque quaerat, recusandae laboriosam dolor ab.
              Deserunt provident, nisi consectetur reprehenderit fugit animi,
              veritatis tempora, fugiat illo
            </p>
          </div>
          <div className="col-lg-6 text-light bg-overlay-dark mt-4 p-3">
            <p className="text-justify text-fix">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum
              iste quasi doloremque repudiandae architecto alias laborum
              repellendus earum quia sunt aliquam, quae libero veritatis hic
              inventore exercitationem illum? Voluptates sapiente aliquam autem
              expedita eligendi soluta eaque non repellat numquam. Sapiente
              impedit saepe, ex, dolor beatae qui distinctio architecto possimus
              optio voluptatibus quibusdam vel, perferendis quas laboriosam odit
              mollitia hic quae aspernatur. Officiis ex dicta neque quidem saepe
              quibusdam esse veritatis vitae quae repellat consequatur delectus
              quas ipsa nesciunt, eaque quaerat, recusandae laboriosam dolor ab.
              Deserunt provident, nisi consectetur reprehenderit fugit animi,
              veritatis tempora, fugiat illo
            </p>
            <p className="text-justify text-fix">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum
              iste quasi doloremque repudiandae architecto alias laborum
              repellendus earum quia sunt aliquam, quae libero veritatis hic
              inventore exercitationem illum? Voluptates sapiente aliquam autem
              expedita eligendi soluta eaque non repellat numquam. Sapiente
              impedit saepe, ex, dolor beatae qui distinctio architecto possimus
              optio voluptatibus quibusdam vel, perferendis quas laboriosam odit
              mollitia hic quae aspernatur. Officiis ex dicta neque quidem saepe
              quibusdam esse veritatis vitae quae repellat consequatur delectus
              quas ipsa nesciunt, eaque quaerat, recusandae laboriosam dolor ab.
              Deserunt provident, nisi consectetur reprehenderit fugit animi,
              veritatis tempora, fugiat illo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LivePage;
