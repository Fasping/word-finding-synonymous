import { useState } from 'react'
import './App.css'


function App() {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);

  const fetchSynonyms = (word) => {
  fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
    .then((response) => response.json())
    .then(setSynonyms);
  }
  
  const handleFetchSynonyms = (e) => {
      e.preventDefault();
      fetchSynonyms(word);
    };

  const handleSynonymClicked = (newWord)=> {
    setWord(newWord);
    fetchSynonyms(newWord);
  } 
  
  return (
    <div className="App">
      <form method="POST" actiopn="/url" onSubmit={handleFetchSynonyms}>
        <label htmlFor="word-input">Your Word</label>
        <input
          id="word-input"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
      <ul>
        {synonyms.map((synonyms) => (
          <li onClick={()=> handleSynonymClicked(synonyms.word) } key={synonyms.word}>{synonyms.word}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
