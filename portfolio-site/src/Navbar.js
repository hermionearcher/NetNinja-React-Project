import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px',
          }}
        >
          New Post
        </Link>

        {/* 
        Need two curly braces {{ }} for style as the value is an object 
        Outer braces - represent a dynamic value 
        Inner braces - is the JS objet
        */}
      </div>
    </nav>
  );
};

export default Navbar;
