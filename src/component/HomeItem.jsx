import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { srcImage } from "../helpers/url";

export default function HomeItem({ item }) {
  return (
    <SwiperSlide key={item._id}>
      <div className="flex img-box">
        <Link to={`/${item._id}`}>
          {/* check if width image is 500px and */}
          <img
            loading="lazy"
            src={srcImage(item.image[0].url)}
            className="rounded-lg relative w-[100%] object-cover"
          />
        </Link>
        <span className="text-slider slider-tittle text-md mb-2 absolute m-2 text-white mt-[180px] font-bold z-50">
          <Link to="/informasiwisata">{item.name}</Link>
        </span>
        <span className="text-slider text-left text-sm absolute m-2 text-white mt-[210px] z-50">
          {/* limit description to 500char */}
          {item.description.length > 100
            ? item.description.substring(0, 100) + "..."
            : item.description}
        </span>
      </div>
    </SwiperSlide>
  );
}
