import React from "react";
import "./home.scss";

import Orders from "../../Assets/Icons/orders.png";

const statics = [
  {
    image: "",
    title: "Weekly Sales",
    color:'green',
  },
  {
    image: "",
    title: "New Users",
    color:'blue',
  },
  {
    image: Orders,
    title: "Item Orders",
    color:'orange',
  },
  {
    image: "",
    title: "Bug Reports",
    color:'yellow',
  },
];



export default function Home() {
  return (

    <div className="home">
      {statics.map((item)=>{
        
        return  <div key={item.title} className="box  info" style={{backgroundColor:item.color}}>
        <div className="Image">
          <img src={item.image} height={40} width={40} alt=""  />
        </div>
        <div className="number">{150}</div>
        <div className="title">{item.title}</div>
      </div>
      })}
      <div className="box box5">box5</div>
      <div className="box box6">box6</div>
      <div className="box box7">box7</div>
      <div className="box box8">box8</div>
      <div className="box box9">box9</div>
    </div>
  );
}
