import { PropTypes } from "prop-types"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';

const SlideImg = (props) => {
  const {dataImages} = props;
  return (
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="h-[50%]"
      >
        {dataImages.map((image,key) => (
          <SwiperSlide key={key++}>
            <div className="swiper-zoom-container">
              <img src={image} className="w-[800px] h-[800px] px-[50px] pb-[20px]"/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}

SlideImg.propTypes = {
  dataImages: PropTypes.any,
}
export default SlideImg