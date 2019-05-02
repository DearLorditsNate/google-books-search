import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import SearchForm from "../../components/SearchForm";
import API from "../../utils/API";
import "./style.css";

class Search extends Component {
  state = {
    books: []
  };

  //   searchBooks = () => {
  //     API.searchBooks()
  //       .then(res => this.setState({ books: res.data }))
  //       .catch(err => console.log(err));
  //   };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(this.state.name)
      .then(res => this.setState({ books: res.data.items }))
      .catch(err => console.log(err));
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <form>
          <div className="form-group">
            <label htmlFor="search">Search for a book</label>
            <input
              type="input"
              className="form-control"
              id="search"
              placeholder='"Harry Potter"'
              onChange={this.handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleFormSubmit}
          >
            Submit
          </button>
        </form>
        {this.state.books.map(book => (
          <div className="container">
            <div className="card m-3">
              <div className="card-header">
                <a href={book.link} target="_blank" className="title">
                  {book.title}
                </a>
                <a
                  href="/save"
                  className="btn btn-success save-btn"
                  data-id="{{_id}}"
                >
                  Save Article
                </a>
              </div>
              <div className="card-body">
                <p className="card-text">{book.description}</p>
                <p className="card-text">{book.authors}</p>
                <img src={book.image} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Search;
