import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={require("../img/single/img1.jpg")} alt="" />
        <div className="user">
          <img src={require("../img/single/userImg.jpg")} alt="" />
          <div className="info">
            <span>Lara</span>
            <p className="postDate">Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={require("../img/edit.png")} alt="" />
            </Link>
            <img src={require("../img/delete.png")} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          molestias necessitatibus ab voluptatum amet quod. Dignissimos, neque?
          Unde, velit rem!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          quidem quae dignissimos! Quae quisquam quaerat dolore provident quia
          atque laudantium suscipit maxime, fugiat, ex facilis aliquid velit
          doloribus ipsam earum ratione quo recusandae cumque dolorum culpa
          officia iure ad harum. Nisi, recusandae ipsam! Nostrum cum tenetur
          labore, praesentium magnam molestias cumque, deleniti soluta tempore
          excepturi dolorum inventore at ex reprehenderit modi unde libero.
          Ipsam illum nostrum excepturi aspernatur! Eaque voluptas velit nam aut
          libero omnis, aliquam placeat consequatur similique provident
          veritatis minima impedit nobis quaerat, quam debitis id, eligendi
          porro nihil quisquam tenetur in quos rem. Voluptatum impedit
          consequuntur similique?
        </p>
      </div>
      <Menu/>
    </div>
  );
};

export default Single;
