import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Fecth weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="hero section">
        <div className="container w-container">
          <h1>Get a five-day forecast&nbsp;<br/> In any US city</h1>
          <div className="sign-up-form w-form">
            <form onSubmit={this.onFormSubmit.bind(this)} className="w-clearfix">
              <input
                className="field w-input"
                placeholder="Get a five-day forecast in your favorite cities"

                value={this.state.term}
                onChange={this.onInputChange.bind(this)}
               />

             <button type="submit" className="button w-button">Search</button>

            </form>

          </div>
        </div>
      </div>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
