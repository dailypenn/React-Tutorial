import React, { useState, useEffect } from 'react'
import axios from 'axios'

import logo from './logo.svg';
import './App.css';

// API endpoint: https://jsonplaceholder.typicode.com/todos/1
// render data from API endpoint using useEffect & useState
// @Daniel Tao stress the reason why we are using an empty list in useEffect
const App = () => {
  const [ data, setData ] = useState(null)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(resp => {
      setData(resp.data)
    })
  }, [])

  console.log(data)

  if (!data) return null

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Data is Elegant {data.title} </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
