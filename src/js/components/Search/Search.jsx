import React from 'react';
import { updateInput } from './searchActions';
import { updateCityDescription } from '../CityInfo/cityInfoActions';
import { updateHistory } from '../SearchHistory/searchHistoryActions'

export default class Search extends React.Component {
    constructor(props) {
    super(props);
  
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSD = this.handleSD.bind(this);
    this.handleNY = this.handleNY.bind(this);
    this.handleJP = this.handleJP.bind(this);
  }

  handleInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateInput(value));
  }

  handleClick(event) {
      const { dispatch, input, date, time } = this.props;
      dispatch(updateCityDescription(input));
      dispatch(updateHistory(input, date, time));
    
  }
  handleSD(event) {
      const{dispatch} = this.props;
      dispatch(updateCityDescription('San Diego'))
  }

  handleNY(event) {
      const{dispatch} = this.props;
      dispatch(updateCityDescription('New York'))
  }
  handleJP(event) {
      const{dispatch} = this.props;
      dispatch(updateCityDescription('Japan'))
  }

    render() {
        const { input } = this.props;
        return (
          <div className="container"> 

            <div className="row">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary" onClick={this.handleSD}>San Diego</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleNY}>New York</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleJP}>Japan</button>
                </div>
                <div className="input-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter City..."
                        value={input}
                        onChange={this.handleInput}
                    />
                    <span className="input-group-btn">
                        <button 
                            className="btn btn-secondary" 
                            type="button"
                            onClick={this.handleClick}>
                            Go!
                        </button>
                    </span>
                </div>
            </div>


          </div>
        );
    }
}