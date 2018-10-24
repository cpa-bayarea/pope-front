import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

import './Search.css';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
    }

    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <FormControl className="SearchForm">
        <InputLabel htmlFor="search">Procurar por...</InputLabel>
        <Input id="search" onInput={this.handleQuery} />
        <Link to={`/results?q=${this.state.query}`}>
          <Button>Procurar</Button>
        </Link>
      </FormControl>
    );
  }
}

export default Search;
