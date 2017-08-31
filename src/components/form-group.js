import React, {Component} from 'react';
import '../styles/form-group.css';

class FormGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {greeting: 'Hello'};
    // this.frenchify = this.frenchify.bind(this);
  }

  frenchify() {
    this.setState({greeting: 'Bonjour'});
  }

  render() {
    return (
      <div className="form-group">
      {this.state.greeting} {this.props.name}!
      <br />
      <button onClick={this.frenchify.bind(this)}>Frenchify!</button>
      </div>
    );
  }
};

export default FormGroup;
