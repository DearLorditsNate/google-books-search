import React, { Component } from "react";
import API from "../../utils/API";

class SearchForm extends Component {
    state = {
        books: []
    }

      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
          API.searchBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
        }
      };
      render() {
        return (
            <form>
                <div className="form-group">
                <label htmlFor="search">Search for a book</label>
                <input
                    type="input"
                    className="form-control"
                    id="search"
                    placeholder='Harry Potter"'
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
        );
      }
}

export default SearchForm;
