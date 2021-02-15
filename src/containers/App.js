import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setRobots(users)
      })
  }, []); // add [] to mimic componentDidMount, execute once
  
  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }
  
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
  
  return (!robots.length) ?
    <h1 className='tc'>LOADING</h1> :
    (
      <div className='tc'>
        <h1>ROBOFRIENDS HOOKS</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
    )
}

export default App;