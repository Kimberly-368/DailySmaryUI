import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends Component {

  handleFormfSubmit = function({query}) {
    console.log('trying to handle submit for query', query);
    //navigate to an new route.
  }

  renderInput(field) {
    return <input type="text" placeholder="Search DailySmarty" {...field.input}/>
  }

  render() {

    const { handleSubmit } =this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormfSubmit.bind(this))}>
        <Field name="query" component={this.renderInput}/>
      </form>
    )
  }
}

SearchBar = reduxForm({
  form: 'searchBar'
})(SearchBar);

export default SearchBar; 