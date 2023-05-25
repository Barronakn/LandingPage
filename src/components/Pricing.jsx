import { NavLink } from "react-router-dom";

const Pricing = () => {
  return (
    <div id="pricing" className="pricing px-32 pb-20">
      <div>
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="my-8">
          Our Pricign includes... Lorem ipsum dolor sit!...
        </p>
      </div>
      <div className="articles flex gap-20 justify-center items-center">
        <article className="rounded-md cursor-pointer font-bold text-white px-16 py-10 text-center">
          <h2 className="font-normal text-3xl mb-8">Silver Plan</h2>
          <span className="text-4xl">
            $11
            <sub>/ mo</sub>
          </span>
          <ul className="flex flex-col gap-3 my-8">
            <li>
              <NavLink to="#">List item a</NavLink>
            </li>
            <li>
              <NavLink to="#">List item b</NavLink>
            </li>
            <li>
              <NavLink to="#">List item c</NavLink>
            </li>
            <li>
              <NavLink to="#">List item d</NavLink>
            </li>
          </ul>
          <div>
            <NavLink className="buy p-3 text-sm rounded-lg" to="#">
              Buy now
            </NavLink>
          </div>
        </article>
        <article className="rounded-md article_special cursor-pointer font-bold text-white px-16 py-10 text-center">
          <h2 className="font-normal text-3xl mb-8">Silver Plan</h2>
          <span className="text-4xl">
            $11
            <sub>/ mo</sub>
          </span>
          <ul className="flex flex-col gap-3 my-8">
            <li>
              <NavLink to="#">List item a</NavLink>
            </li>
            <li>
              <NavLink to="#">List item b</NavLink>
            </li>
            <li>
              <NavLink to="#">List item c</NavLink>
            </li>
            <li>
              <NavLink to="#">List item d</NavLink>
            </li>
          </ul>
          <div>
            <NavLink className="buy p-3 text-sm rounded-lg" to="#">
              Buy now
            </NavLink>
          </div>
        </article>
        <article className="rounded-md cursor-pointer font-bold text-white px-16 py-10 text-center">
          <h2 className="font-normal text-3xl mb-8">Silver Plan</h2>
          <span className="text-4xl">
            $11
            <sub>/ mo</sub>
          </span>
          <ul className="flex flex-col gap-3 my-8">
            <li>
              <NavLink to="#">List item a</NavLink>
            </li>
            <li>
              <NavLink to="#">List item b</NavLink>
            </li>
            <li>
              <NavLink to="#">List item c</NavLink>
            </li>
            <li>
              <NavLink to="#">List item d</NavLink>
            </li>
          </ul>
          <div>
            <NavLink className="buy p-3 text-sm rounded-lg" to="#">
              Buy now
            </NavLink>
          </div>
        </article>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="my-7">For more details & more plans...</p>
        <NavLink
          className="sales font-bold text-lg w-48 p-3 rounded-lg text-center"
          to="#"
        >
          Contact sales
        </NavLink>
      </div>
    </div>
  );
};

export default Pricing;
