import { useState } from 'react'
import './App.css'


function App() {
  const [word, setWord] = useState("");
 
  const handleFetchSynonyms = (e) => {
    e.preventDefault();
    fetch(`https://api.datamuse.com/word?rel_syn=fast`);
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
