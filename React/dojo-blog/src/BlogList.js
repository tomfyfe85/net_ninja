import PropTypes from 'prop-types';

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
    {blogs.map(blog => (
      <div className="blog-preview" key={blog.id} >
        <h2>{ blog.title }</h2>
        <p>Written by { blog.author }</p>
      </div>
    ))}
  </div>
);
}
BlogList.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
    title: PropTypes.string
  
};

export default BlogList;
