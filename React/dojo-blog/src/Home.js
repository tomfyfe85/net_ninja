import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  // const [title, setTitle] = useState()

  const [blogs, setBlogs] = useState([
    { title: "my new website", body: "lorem..", author: "mario", id: 1 },
    { title: "Welcome party!", body: "orem", author: "yoshi", id: 2 },
    { title: "web dev to tips", body: "lorem", author: "mario", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
