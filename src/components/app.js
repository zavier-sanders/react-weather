import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import NavBar from '../components/nav_bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchBar/>
        <WeatherList />
      </div>
    );
  }
}
