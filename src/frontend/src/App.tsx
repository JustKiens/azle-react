import { useState } from 'react';
import axios from 'axios';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    axios.get(`${import.meta.env.VITE_CANISTER_URL}/greet`, {
      params: { name }
    })
    .then(response => {
      setGreeting(response.data.greeting);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main >
  );
}

export default App;
