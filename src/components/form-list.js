import React, {Component} from 'react';
import FormGroup from './form-group';
import '../styles/form-list.css';

class FormList extends Component {
  constructor(props) {
    super(props);
    this.state = {greetings: ['Jim', 'Sally', 'Buck']};
  }

  renderGreetings() {
    return this.state.greetings.map(name => (
      <FormGroup key={name} name={name} />
    ));
  }

  render() {
    return (
      <div className="form-list">
        {this.renderGreetings()}
      </div>
    );
  }
}

export default FormList;
