import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("note") != null) {
      this.setState({ note: localStorage.getItem("note") });
    }
  }

  handleChange(event) {
    this.setState({ note: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("note", this.state.note);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.note} onChange={this.handleChange} />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default App;
