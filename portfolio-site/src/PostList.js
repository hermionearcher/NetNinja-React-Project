import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {
  // Below is an alternative
  // const posts = props.posts;
  // const title = props.title;

  return (
    <div className="postList">
      <h2>{title}</h2>
      {posts.map((post) => (
        <div className="post-preview" key={post.id}>
          <div className="post-flex">
            <Link to={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
              <p>Written by {post.author}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
