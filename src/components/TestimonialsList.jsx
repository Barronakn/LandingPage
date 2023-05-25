const TestimonialsList = ({ img, nom, profession, avis }) => {
  return (
    <div className="testimonial mx-7">
      <div className="flex gap-8 relative">
        <img
          className="bg-white rounded-lg p-4 w-24 h-24 shadow-lg fixed top-14 left-10 z-10"
          src={img}
        />
        <p className="flex flex-col ml-32">
          <span className="font-bold text-gray-800 text-xl">{nom}</span>
          <span className="text-orange-900 text-sm">{profession}</span>
        </p>
      </div>
      <div className="avis z-0 bg-white text-gray-700 p-8 rounded-lg shadow-lg">
        <p>{avis}</p>
      </div>
    </div>
  );
};

export default TestimonialsList;
