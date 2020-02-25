import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox'
import Scroll from '../component/Scroll.js'
import ErrorBoundary from '../component/ErrorBoundary'
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robots:users}))
  }
  onSearchchange=(event)=>{
    this.setState({searchfield: event.target.value})
  }
  render() {
    const {searchfield , robots} = this.state;
    const filterRobots = robots.filter(robot =>{
    return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
      })
      return !robots.length ?
       <h1 style={{padding:'450px', display:'flex' , alignContent:'center' , justifyContent:'center'}}>Loading</h1> :
       (
      <div className='tc'>
        <h1 className='f1'>Robo Friends</h1>
        <SearchBox searchChange={this.onSearchchange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
          }
}

export default App;