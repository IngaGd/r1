import { useState, useEffect } from 'react';

function Jokes() {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then(response => response.json())
      .then(data => setJoke(data.jokes.slice(0, 10)))
  }, []);

  return (
    <ol className='list'>
      {joke.map((j, i) => <li className="list" key={i}><span>Joke {i + 1}:</span> {j.joke}{j.setup} {j.delivery} </li>)}
    </ol>
  );
}
export default Jokes;




