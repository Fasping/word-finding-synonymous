import { useState } from 'react'
import './App.css'


function App() {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);
 
  const handleFetchSynonyms = (e) => {
    e.preventDefault();
    fetch(`https://api.datamuse.com/words?rel_syn=fast`)
      .then((response) => response.json())
      .then(setSynonyms);
  }

  return (
    <div className="App">
      <form method='POST' actiopn="/url" onSubmit={handleFetchSynonyms}>
        <label htmlFor="word-input">Your Word</label>
        <input
          id="word-input"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App
