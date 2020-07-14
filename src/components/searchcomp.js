import React, { useEffect, useState, useRef, Component } from 'react';
import './bootstrap.min.css' 
//import './Search.css'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import './searchcomp.css'

class SearchComp extends Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
      };
    
      static defaultProps = {
        suggestions: []
      };
    

    constructor(props){
        super(props);
        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput:'',
        }

    };


/*onSearchchange = (event)=>{
    this.setState({userinput: event.target.value})
}*/
onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    this.setState({
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: true,
        userInput: e.currentTarget.value
      });
    };

onClick = e => {
        // Update the user input and reset the rest of the state
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: e.currentTarget.innerText
        });
      };
    
      onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;
    
        // User pressed the enter key, update the input and close the
        // suggestions
        if (e.keyCode === 13) {
          this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion]
          });
        }
        // User pressed the up arrow, decrement the index
        else if (e.keyCode === 38) {
          if (activeSuggestion === 0) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
          if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
      };

    render(){
        let her = '/';

        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
              activeSuggestion,
              filteredSuggestions,
              showSuggestions,
              userInput
            }
          } = this;

          let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em></em>
          </div>
        );
      }
    }

    return(
    <div className='container-fluid'>
        <div className='row mb2'>
        <div className='col-md-1'></div>
        <div className="col-md-5 input-group" style={{width: "100%"}}>
          <input type="text" className="form-control" placeholder="Search services" type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}/>
          <div className="input-group-append">
            <button className="btn btn-secondary black" id='btt' type="button">
              <Link to ={ her + this.state.userInput.toLowerCase()}><i className="fa fa-search white"></i></Link>
            </button>
        </div>
        </div>
        <div className='sugg' style={{position:"absolute",backgroundColor:'white',zIndex:'1',marginTop:'40px'}}>
        {suggestionsListComponent}
        </div>
        
        
            <div className='col-md-6'>
            </div>
        </div>

        </div>
        )
        
    }
};
    
    export default SearchComp;