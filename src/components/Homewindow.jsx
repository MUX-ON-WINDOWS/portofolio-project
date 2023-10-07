import React from 'react';
import '../Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// images import
import spaceweekImage from '../img/Spaceweek.png';
import AiHelpdeskImages from '../img/AiHelpdesk.png';
import CRUDImage from '../img/CRUDicons.png';
import { NavLink } from 'react-router-dom';

function App() {
  const backgroundColor = { background: '#20176A' };
  const data = [
    { to: '/spaceweek', text: 'Space week', url: spaceweekImage, color: { color: 'white' }, background: { background: backgroundColor } },
    { to: '/sprint1', text: 'Sprint 1', url: AiHelpdeskImages, color: { color: 'white' }, background: { background: backgroundColor } },
    { to: '/sprint2', text: 'Sprint 2', url: AiHelpdeskImages, color: { color: 'white' }, background: { background: backgroundColor } },
    { to: '/sprint3', text: 'Sprint 3', url: AiHelpdeskImages, color: { color: 'white' }, background: { background: backgroundColor } },
    { to: '/CRUD', text: 'CRUD', url: CRUDImage, color: { color: 'white' }, background: { background: backgroundColor } },
  ];

  return (
    <div className='containerWindow'>
      <h1 className='name'>MAX ARNOUTS</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
