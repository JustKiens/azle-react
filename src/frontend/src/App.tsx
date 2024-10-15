import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    axios
      .get(`${import.meta.env.VITE_CANISTER_URL}/greet`, {
        params: { name },
      })
      .then((response) => {
        setGreeting(response.data.greeting);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <img className="w-32 mb-8" src="/logo2.svg" alt="DFINITY logo" />
      <form
        className="bg-white p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="block text-lg mb-2">
          Enter your name:
        </label>
        <div className="flex space-x-4">
          <input
            id="name"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
            alt="Name"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Click Me!
          </button>
        </div>
      </form>
      {greeting && (
        <section className="mt-6 text-xl text-gray-700">{greeting}</section>
      )}
    </main>
  );
}

export default App;
