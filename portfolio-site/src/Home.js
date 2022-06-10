import PostList from './PostList';
import useFetch from './useFetch';
// import { Link } from 'react-router-dom';

const Home = () => {
  const {
    data: posts,
    isPending,
    error,
  } = useFetch('http://localhost:8000/posts');
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {posts && <PostList posts={posts} title="All posts" />}
      {posts && (
        <PostList
          posts={posts.filter((post) => post.id === 1)}
          title="Filtered posts"
        />
      )}
      {/* <Link to="/hello">Hi</Link> */}
    </div>
  );
};

export default Home;
