import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import SearchForm from "../../components/SearchForm";
import API from "../../utils/API";
import "./style.css";

class Search extends Component {
  state = {
    books: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(this.state.search)
      .then(res => this.setState({ books: res.data.items }))
      .catch(err => console.log(err));
  };

  saveBook = (i) => {
    const bookData = {
      title: this.state.books[i].volumeInfo.title,
      authors: this.state.books[i].volumeInfo.authors,
      description: this.state.books[i].volumeInfo.description,
      image: this.state.books[i].volumeInfo.imageLinks.thumbnail,
      link: this.state.books[i].volumeInfo.previewLink
    }

    console.log(bookData);

    API.saveBook(bookData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
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
              name="search"
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
        <div className="container">
          {this.state.books.map((book, i) => (
            <div className="card m-3" key={book.volumeInfo.title}>
              <div className="card-header">
                <a
                  href={book.volumeInfo.previewLink}
                  target="_blank"
                  className="title"
                  rel="noopener noreferrer"
                >
                  {book.volumeInfo.title}
                </a>
                <button
                  type="button"
                  className="btn btn-success save-btn"
                  onClick={() => {this.saveBook(i)}}
                >
                  Save Book
                </button>
              </div>
              <div className="card-body">
                <p className="card-text">{book.volumeInfo.description}</p>
                <p className="card-text">
                  {book.volumeInfo.authors.map(author => (
                    <span key={author}>
                      {author}
                      <br />
                    </span>
                  ))}
                </p>
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
