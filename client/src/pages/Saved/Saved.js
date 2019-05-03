import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import "./style.css";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = i => {
    API.deleteBook(this.state.books[i]._id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Jumbotron />
        {/* Saved Articles */}
        <div className="container">
          {this.state.books.map((book, i) => (
            <div className="card m-3" key={book.title}>
              <div className="card-header">
                <a
                  href={book.link}
                  target="_blank"
                  className="title"
                  rel="noopener noreferrer"
                >
                  {book.title}
                </a>
                <button
                  type="button"
                  className="btn btn-danger save-btn"
                  onClick={() => {
                    this.deleteBook(i);
                  }}
                >
                  Delete Book
                </button>
              </div>
              <div className="card-body">
                <h2>Written by:</h2>
                <p className="card-text">
                  {book.authors.map(author => (
                    <span key={author} className="itl">
                      {author}
                      <br />
                    </span>
                  ))}
                </p>
                <img src={book.image} alt={book.title} />
                <p className="card-text">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Saved;