import { Link } from 'react-router-dom';

const NotHere = () => {
  return (
    <div className="not-here">
      <h2>Whoops</h2>
      <p>This page cannot be found :/</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotHere;
