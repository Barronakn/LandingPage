import { useState, useEffect } from "react";
import TestimonialsList from "./TestimonialsList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const [affiche, setAffiche] = useState(3);
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 1024) {
        setAffiche(2);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const handleWindow = () => {
      if (window.innerWidth < 768) {
        setAffiche(1);
      }
    };

    window.addEventListener("resize", handleWindow);

    return () => {
      window.removeEventListener("resize", handleWindow);
    };
  }, []);

  const datas = [
    {
      id: 0,
      img: "/src/assets/client1.svg",
      nom: "Client name",
      profession: "- CEO, Company",
      avis: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ad iure. Suscipit sequi, odit tenetur repellendus sapiente sint, eveniet similique modi, inventore eius est totam? Fugit necessitatibus minus placeat aliquid!",
    },
    {
      id: 1,
      img: "/src/assets/client2.svg",
      nom: "Client name",
      profession: "- CEO, Company",
      avis: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ad iure. Suscipit sequi, odit tenetur repellendus sapiente sint, eveniet similique modi, inventore eius est totam? Fugit necessitatibus minus placeat aliquid!",
    },
    {
      id: 2,
      img: "/src/assets/client3.svg",
      nom: "Client name",
      profession: "- CEO, Company",
      avis: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ad iure. Suscipit sequi, odit tenetur repellendus sapiente sint, eveniet similique modi, inventore eius est totam? Fugit necessitatibus minus placeat aliquid!",
    },
    {
      id: 3,
      img: "/src/assets/client4.svg",
      nom: "Client name",
      profession: "- CEO, Company",
      avis: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ad iure. Suscipit sequi, odit tenetur repellendus sapiente sint, eveniet similique modi, inventore eius est totam? Fugit necessitatibus minus placeat aliquid!",
    },

    {
      id: 4,
      img: "/src/assets/client5.svg",
      nom: "Client name",
      profession: "- CEO, Company",
      avis: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ad iure. Suscipit sequi, odit tenetur repellendus sapiente sint, eveniet similique modi, inventore eius est totam? Fugit necessitatibus minus placeat aliquid!",
    },
    {
      id: 5,
      img: "/src/assets/client6.svg",
      nom: "Client name",
      profession: "- CEO, Company",
      avis: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ad iure. Suscipit sequi, odit tenetur repellendus sapiente sint, eveniet similique modi, inventore eius est totam? Fugit necessitatibus minus placeat aliquid!",
    },
    {
      id: 6,
      img: "/src/assets/client7.svg",
      nom: "Client name",
      profession: "- CEO, Company",
      avis: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ad iure. Suscipit sequi, odit tenetur repellendus sapiente sint, eveniet similique modi, inventore eius est totam? Fugit necessitatibus minus placeat aliquid!",
    },
    {
      id: 7,
      img: "/src/assets/client8.svg",
      nom: "Client name",
      profession: "- CEO, Company",
      avis: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ad iure. Suscipit sequi, odit tenetur repellendus sapiente sint, eveniet similique modi, inventore eius est totam? Fugit necessitatibus minus placeat aliquid!",
    },
  ];
  return (
    <div id="testimonials" className="testimonials bg-rose-100 px-32 py-20">
      <h1 className="text-3xl font-bold">
        What our <span className="underline">Clients</span> have to say...
      </h1>
      <Swiper
        slidesPerView={affiche}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {datas.map((data) => {
          return (
            <SwiperSlide key={data.id} className="flex py-20">
              <TestimonialsList {...data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
