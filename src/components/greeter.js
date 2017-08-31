import React, {Component} from 'react';
import '../styles/greeter.css';

class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = {greetingName: ''};
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addGreeting = this.addGreeting.bind(this);
  }

  addGreeting() {
    if (this.state.greetingName !== '') {
      this.props.addGreeting(this.state.greetingName);
    }
    this.setState({greetingName: ''});
  }

  handleUpdate(event) {
    this.setState({greetingName: event.target.value});
  }

  render() {
    return (
      <div className="greeter">
        <input
          type="text"
          onChange={this.handleUpdate}
          value={this.state.greetingName}
        />
        &nbsp;&nbsp;
        <button onClick={this.addGreeting}>Add</button>
      </div>
    );
  }
}

export default AddGreeter;
