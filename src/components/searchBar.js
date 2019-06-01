import React, { Component } from "react";
import { Field, reduxForm} from 'redux-form';

import { withRouther } from 'react-router-dom';

class SearchBar extends Component {
    
    handleFormSubmit = function({query}) {
        this.props.onSubmit(query);       
    }
    
    renderInput(field) {
        return <input type="text" placeholder="&#xf002;Search DailySmarty" {...field.input} />
    }
    
    render() {

        const { handleSubmit } = this.props;

        return(
            <form className={`search-bar search-bar-${this.props.page}`} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                 <div className="search-bar-wrapper">
                    <Field name="query" component={this.renderInput}/>
                    <p>Press return to search</p>
                </div>
            </form>
        ) 
    }
}

searchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouther(SearchBar);

export default SearchBar;