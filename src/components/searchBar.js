import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { withRouter } from 'react-router-dom';

class SearchBar extends Component {

  handleFormfSubmit = function({query}) {
    this.props.onSubmit(query);
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

SearchBar = withRouter(SearchBar);

export default SearchBar; 