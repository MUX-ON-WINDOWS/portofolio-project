import React from 'react';
import '../Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
// images import
import spaceweekImage from '../img/Spaceweek.png';
import AiHelpdeskImages from '../img/AiHelpdesk.png';
import CRUDImage from '../img/CRUDicons.png';
import { NavLink } from 'react-router-dom';

function App() {
  const backgroundColor = { background: '#20176A' };
  const TextColor = { color: 'white' };
  const data = [
    { to: '/spaceweek', text: 'Out of space', url: spaceweekImage, color: { color: TextColor }, background: { background: backgroundColor } },
    { to: '/CRUD', text: 'CRUD', url: CRUDImage, color: { color: TextColor }, background: { background: backgroundColor } },
    { to: '/Discover', text: 'Discover', url: AiHelpdeskImages, color: { color: TextColor }, background: { background: backgroundColor } },
    { to: '/Define', text: 'Define', url: AiHelpdeskImages, color: { color: TextColor }, background: { background: backgroundColor } },
    { to: '/Develop', text: 'Develop', url: AiHelpdeskImages, color: { color: TextColor }, background: { background: backgroundColor } },
  ];

  return (
    <div className='containerWindow'>
      <h1 className='name'>MAX ARNOUTS</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={90}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='card' style={item.background}>
              <NavLink to={item.to}>
                <img src={item.url} alt={item.text} />
                <h1 style={item.color}>{item.text}</h1>
              </NavLink>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
