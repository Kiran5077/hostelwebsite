// src/RoomBooking.jsx
import React, { useState } from 'react';
import './Room.css'
import { Link } from 'react-router-dom';



 export const rooms = [
  {
    id:1,
    name: 'Single Room',
    price: '$100 per night',
    description: 'A cozy room perfect for solo travelers.',
    image: '/assets/rooms.jpeg',
  },
  {
    id:2,
    name: 'Double Room',
    price: '$150 per night',
    description: 'A spacious room ideal for couples or friends.',
    image: '/assets/room2.jpeg',
  },
  {
    id:3,
    name: 'Double Room',
    price: '$150 per night',
    description: 'A spacious room ideal for couples or friends.',
    image: '/assets/room3.jpeg',
  },
  {
    id:4,
    name: 'Double Room',
    price: '$150 per night',
    description: 'A spacious room ideal for couples or friends.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c79ae8158392425.6449f671c8453.jpg',
  },
  {
    id:5,
    name: 'Double Room',
    price: '$150 per night',
    description: 'A spacious room ideal for couples or friends.',
    image: 'https://i.pinimg.com/736x/c3/8d/27/c38d27398719b33c3f94f28a20713c50.jpg',
  },
  {
    id:6,
    name: 'Double Room',
    price: '$150 per night',
    description: 'A spacious room ideal for couples or friends.',
    image: 'https://th.bing.com/th/id/OIP.f9aKx5Ml_KqpxC4XA26qAAHaE0?w=1400&h=910&rs=1&pid=ImgDetMain',
  },
  {
    id:7,
    name: 'Double Room',
    price: '$150 per night',
    description: 'A spacious room ideal for couples or friends.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/8eaa2398742175.5ee2ccd6dab6c.jpg',
  },
  {
    id:8,
    name: 'Double Room',
    price: '$150 per night',
    description: 'A spacious room ideal for couples or friends.',
    image: 'https://th.bing.com/th/id/OIP.qiUaUodWxlOTO7o8peNK4gAAAA?w=404&h=316&rs=1&pid=ImgDetMain',
    
  },
  {
    id:8,
    name: 'Double Room',
    price: '$150 per night',
    description: 'A spacious room ideal for couples or friends.',
    image: 'https://th.bing.com/th/id/OIP.0o8bEbrx4Ik1tk-SDox5tgAAAA?w=404&h=316&rs=1&pid=ImgDetMain',
    
  },
];

const Room = () => {


  return (
    <>
    <div className="Menusu" >
      <h1 className='center'>Room Booking</h1>
      </div>
      <div className="room-types" id='room'>
        {rooms.map((room) => (
          <div key={room.id} className="room" >
            <img src={room.image} alt={room.name} />
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <p>{room.price}</p>
            <Link to={`/Room/${room.id}`}><button className='btn'>book now</button></Link>
          </div>
        ))}
      </div>
  
       
    </>
  );
};

export default Room;