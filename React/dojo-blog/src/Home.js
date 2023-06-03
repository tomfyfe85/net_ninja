import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [title, setTitle] = useState('All Blogs!')
  const [blogs, setBlogs] = useState([
    { title: "my new website", body: "lorem..", author: "mario", id: 1 },
    { title: "Welcome party!", body: "orem", author: "yoshi", id: 2 },
    { title: "web dev to tips", body: "lorem", author: "mario", id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title={title} />
    </div>
  );
};

export default Home;
