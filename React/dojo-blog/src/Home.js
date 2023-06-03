import { useState } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "my new website", body: "lorem..", author: "mario", id: 1 },
    { title: "Welcome party!", body: "orem", author: "yoshi", id: 2 },
    { title: "web dev to tips", body: "lorem", author: "mario", id: 3 },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
