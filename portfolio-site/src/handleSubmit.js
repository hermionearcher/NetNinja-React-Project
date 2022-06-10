// import { useState } from 'react';

// const [title, setTitle] = useState('');
// const [body, setBody] = useState('');
// const [author, setAuthor] = useState('Hermione');
// const [isPending, setIsPending] = useState(false);

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // ^ Prevents page from refreshing on button click
//   const post = { title, body, author };

//   setIsPending(true);

//   fetch(e, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(post),
//   }).then(() => {
//     console.log('New blog added');
//     setIsPending(false);
//   });
// };

// export default handleSubmit;
