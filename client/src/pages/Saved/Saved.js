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
      .then(res => console.log(res))
      .catch(err => console.log(err));

      this.loadBooks();
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
                <p className="card-text">{book.description}</p>
                <p className="card-text">{book.authors}</p>
                <img src={book.image} alt={book.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Saved;