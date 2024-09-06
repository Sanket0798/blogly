import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p className="desc">{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
