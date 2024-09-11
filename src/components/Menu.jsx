import React from "react";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolores! A sequi laudantium sit nam?",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolores! A sequi laudantium sit nam?",
      img: require("../img/home/1.jpg"),
    },
    {
      id: 2,
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolores! A sequi laudantium sit nam?",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolores! A sequi laudantium sit nam?",
      img: require("../img/home/2.jpg"),
    },
    {
      id: 3,
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolores! A sequi laudantium sit nam?",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolores! A sequi laudantium sit nam?",
      img: require("../img/home/3.jpg"),
    },
    {
      id: 4,
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolores! A sequi laudantium sit nam?",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolores! A sequi laudantium sit nam?",
      img: require("../img/home/4.jpg"),
    },
  ];

  return (
    <div className="menu">
      <h1 className="otherPost">Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2 className="otherPostTitle">{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
