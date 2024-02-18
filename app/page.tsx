'use client';
import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [words, setWords] = useState<string[]>([]);
  const [newWord, setNewWord] = useState('');

  const handleAddWord = () => {
    if (newWord.trim() !== '') {
      const updatedWords = [...words, newWord];
      setWords(updatedWords);
      setNewWord('');
    }
  };

  useEffect(() => {
    console.log('Current words:', words);
  }, [words]);
  
  return (
    <div className="flex flex-col items-center p-4 w-80 h-auto">
      <ul className="mb-4">
        {words.length === 0 ? <p>Add new words</p> : words.map((word, index) => <li key={index}>{word}</li>)}
      </ul>
      <div className="flex items-center">
        <input
          type="text"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          placeholder="Enter a word"
          className="mr-4 p-2 border border-gray-400 rounded"
        />
        <button onClick={handleAddWord} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Add
        </button>
      </div>
    </div>
  );
};

export default Home;