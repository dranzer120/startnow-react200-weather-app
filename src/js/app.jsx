import React from 'react';
import CityInfo from './components/CityInfo';
import SearchHistory from './components/SearchHistory';
import Search from './components/Search';


export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1>Origin Weather App</h1>        
        </div>

          <div className='row'>
            <div className='col-12'>
              <Search />
            </div>
          </div>

          <div className='row' style={{marginTop: 10}}>
            <div className='col-12 col-md-6'>
              <CityInfo />
            </div>
            <div className='col-12 col-md-6'>
              <SearchHistory />
            </div>
          </div>

      </div>
    );
  }
}
