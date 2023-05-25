import person from "../assets/person.svg";
import mail from "../assets/mail.svg";
import pencil from "../assets/pencil-alt.svg";
import phone from "../assets/phone.svg";
import localisation from "../assets/location.svg";

const Contact = () => {
  return (
    <div id="contact" className="contact px-32 bg-sky-50">
      <h1 className="text-4xl font-bold pt-28 pb-14">Contact Us</h1>
      <div className="flex gap-7">
        <form>
          <div className="flex gap-5">
            <label className="flex justify-start border-1 items-center bg-gray-200 w-96 mb-4 h-12 rounded-md pl-5">
              <img className="w-6 h-6" src={person} alt="person-icon" />
              <input
                className="bg-transparent h-12 pl-5"
                type="text"
                placeholder="First Name"
              />
            </label>
            <label className="flex justify-start border-1 items-center bg-gray-200 w-96 h-12 rounded-md pl-5">
              <img className="w-6 h-6" src={person} alt="person-icon" />
              <input
                className="bg-transparent h-12 pl-5"
                type="text"
                placeholder="Last Name"
              />
            </label>
          </div>
          <label className="flex justify-start border-1 items-center bg-gray-200 mb-4 rounded-md pl-5">
            <img className="w-5 h-5" src={mail} alt="mail-ico" />
            <input
              className="bg-transparent h-12 pl-5"
              type="email"
              placeholder="Email Address"
            />
          </label>
          <label className="flex justify-start border-1 p-7 bg-gray-200 mb-4 h-32 rounded-md pl-5">
            <img className="w-4 h-4" src={pencil} alt="pencil-alt" />
            <textarea
              className="bg-transparent w-96 h-20 ml-5 pl-5 resize-none"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
          </label>

          <button className="btn font-bold text-lg w-48 p-3 rounded-lg text-center">
            Sumbit
          </button>
        </form>
        <div>
          <div className="flex gap-2 mb-4">
            <img className="w-5 h-5" src={phone} alt="phone-icon" />
            <p>xx-xxx-xxxx</p>
          </div>
          <div className="flex gap-2">
            <img
              className="w-5 h-5"
              src={localisation}
              alt="localisation-icon"
            />
            <p>123, Street no.123, 150 est Road, 333000</p>
          </div>
        </div>
      </div>
      <div className="bg-linear mt-12 p-16 rounded-md">
        <p className="text-white text-2xl font-bold text-center">
          Curious about Dd? Get updated by subscribing our newsletter
        </p>
        <form className="flex justify-center mt-6">
          <label className="bg-pink-200 flex justify-start items-center mb-4 pl-2 h-12">
            <img className="w-5 h-5" src={mail} alt="mail-ico" />
            <input
              className="bg-transparent ml-2"
              type="email"
              placeholder="Email Address"
            />
          </label>
          <button className="btn-subscribe h-12 p-2 bg-white">
            Subscribe!
          </button>
        </form>
      </div>
      <div className="py-12">
        <div>
          <h1 className="text-4xl font-bold">Get Socialize</h1>
          <p className="py-6 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
            sapiente. Esse ducimus temporibus nobis sunt animi obcaecati
            voluptatem, optio facere inventore perspiciatis dolores, quis,
            magnam provident distinctio dignissimos modi vero!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
