import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import handleSubmit from './handleSubmit.js';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Hermione');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ^ Prevents page from refreshing on button click
    const post = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    }).then(() => {
      setIsPending(false);
      history.push('/');
    });
  };

  return (
    <div className="create">
      <h2>Add a new post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Hermione">Hermione</option>
          <option value="Grace">Grace</option>
        </select>
        {!isPending && <button>Add Post</button>}
        {isPending && <button disabled>Posting...</button>}
      </form>
    </div>
  );
};

export default Create;
