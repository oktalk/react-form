import React, {Component} from 'react';
import '../styles/form-group.css';

class FormGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {greeting: 'Hello'};
    this.frenchify = this.frenchify.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  frenchify() {
    this.setState({greeting: 'Bonjour'});
  }

  removeGreeting() {
    this.props.removeGreeting(this.props.name);
  }

  render() {
    return (
      <div className="form-group">
        {this.state.greeting} {this.props.name}!
        <br />
        <button onClick={this.frenchify}>Frenchify!</button>
        <button onClick={this.removeGreeting}>Remove</button>
      </div>
    );
  }
};

export default FormGroup;
