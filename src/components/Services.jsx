import { NavLink } from "react-router-dom";
import developer from "../assets/developer.svg";
import videographer from "../assets/videographer.svg";
import mobile_dev from "../assets/mobile_dev.svg";
import camera from "../assets/camera.svg";

const Services = () => {
  return (
    <div id="services" className="services px-32 my-16 bg-sky-50 text-gray-700">
      <h1 className="text-4xl font-bold pt-20">Services we provide</h1>
      <div className="cards flex justify-evenly">
        <div className="card p-7">
          <img className="w-48 h-48" src={developer} alt="developer" />
          <h2 className="font-bold text-xl py-3">Web Development</h2>
          <p className="pb-3">
            Web Development Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quia repellendus reprehenderit cumque totam quas distinctio
            molestiae sed a ad impedit
          </p>
          <NavLink className="link font-bold" to="#">
            Read more
          </NavLink>
        </div>
        <div className="card p-7">
          <img className="w-48 h-48" src={videographer} alt="videographer" />
          <h2 className="font-bold text-xl py-3">Videography</h2>
          <p className="pb-3">
            Web Development Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quia repellendus reprehenderit cumque totam quas distinctio
            molestiae sed a ad impedit
          </p>
          <NavLink className="link font-bold" to="#">
            Read more
          </NavLink>
        </div>
      </div>
      <div className="cards flex justify-evenly">
        <div className="card p-7">
          <img className="w-48 h-48" src={camera} alt="camera" />
          <h2 className="font-bold text-xl py-3">Photography/Graphics</h2>
          <p className="pb-3">
            Web Development Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quia repellendus reprehenderit cumque totam quas distinctio
            molestiae sed a ad impedit
          </p>
          <NavLink className="link font-bold" to="#">
            Read more
          </NavLink>
        </div>
        <div className="card p-7">
          <img className="w-48 h-48" src={mobile_dev} alt="mobile_dev" />
          <h2 className="font-bold text-xl py-3">Mobile App Development</h2>
          <p className="pb-3">
            Web Development Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quia repellendus reprehenderit cumque totam quas distinctio
            molestiae sed a ad impedit
          </p>
          <NavLink className="link font-bold" to="#">
            Read more
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Services;
