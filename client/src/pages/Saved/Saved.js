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

  render() {
    return (
      <div>
        <Jumbotron />
        {/* Saved Articles */}
        {this.state.books.map(book => (
          <div className="container">
            <div className="card m-3">
              <div className="card-header">
                <a
                  href={book.link}
                  target="_blank"
                  className="title"
                  rel="noopener noreferrer"
                >
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
                <img src={book.image} alt={book.volumeInfo.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Saved;