import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "my new website", body: "lorem..", author: "mario", id: 1 },
    { title: "Welcome party!", body: "orem", author: "yoshi", id: 2 },
    { title: "web dev to tips", body: "lorem", author: "mari0", id: 3 },
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={() => setName("luigi")}>Change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
