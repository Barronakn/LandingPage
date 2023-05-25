import Feature1 from "../assets/feature1.svg";
import Feature2 from "../assets/feature2.svg";
import Feature3 from "../assets/feature3.svg";
import Feature4 from "../assets/feature4.svg";

const Features = () => {
  return (
    <div id="features" className="features px-32 my-20">
      <div>
        <h1 className="text-4xl font-bold">Awesome Features</h1>
        <p className="text-gray-600 my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas labore
          nulla fugit perferendis similique molestiae vitae! Impedit consequatur
          earum mollitia. Impedit ipsa dolores voluptatum laborum qui totam
          mollitia deleniti culpa?
        </p>
      </div>
      <div className="cards flex gap-32">
        <div className="card shadow-lg cursor-pointer p-7 h-full">
          <img className="w-16 h-16" src={Feature1} alt="Feature1" />
          <h2 className="text-gray-700 font-bold text-xl py-3">
            Feature Title
          </h2>
          <p className="text-gray-600 pb-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis ipsam rem natus in et non magnam nam fugit eum
            molestias ratione recusandae consequuntur quibusdam eligendi,
            necessitatibus fugiat ad culpa. Nihil!
          </p>
        </div>
        <div className="card shadow-lg cursor-pointer p-7 h-full">
          <img className="w-16 h-16" src={Feature2} alt="Feature2" />
          <h2 className="text-gray-700 font-bold text-xl py-3">
            Feature Title
          </h2>
          <p className="text-gray-600 pb-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis ipsam rem natus in et non magnam nam fugit eum
            molestias ratione recusandae consequuntur quibusdam eligendi,
            necessitatibus fugiat ad culpa. Nihil!
          </p>
        </div>
      </div>
      <div className="cards flex gap-32 mt-20">
        <div className="card shadow-lg cursor-pointer p-7 h-full">
          <img className="w-16 h-16" src={Feature3} alt="Feature3" />
          <h2 className="text-gray-700 font-bold text-xl py-3">
            Feature Title
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis ipsam rem natus in et non magnam nam fugit eum
            molestias ratione recusandae consequuntur quibusdam eligendi,
            necessitatibus fugiat ad culpa. Nihil!
          </p>
        </div>
        <div className="card shadow-lg cursor-pointer p-7 h-full">
          <img className="w-16 h-16" src={Feature4} alt="Feature4" />
          <h2 className="text-gray-700 font-bold text-xl py-3">
            Feature Title
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis ipsam rem natus in et non magnam nam fugit eum
            molestias ratione recusandae consequuntur quibusdam eligendi,
            necessitatibus fugiat ad culpa. Nihil!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
