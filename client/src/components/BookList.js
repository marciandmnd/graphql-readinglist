import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  displayBooks() {
    var data = this.props.data;
    if(data.loading) {
      return (<div>Loading ...</div>)
    }

    let html = data.books.map(book => <li key={ book.id } onClick={(e) => this.setState({selected: book.id})}>{book.name}</li>);

    return (
      <ul id="book-list">
        { html }
      </ul>
    );
  }

  render() {
    return (
      <div className="BookList">
        {this.displayBooks()}
        <BookDetails bookId={this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
