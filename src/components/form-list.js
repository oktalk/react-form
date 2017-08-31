import React, {Component} from 'react';
import FormGroup from './form-group';
import AddGreeter from './greeter';
import '../styles/form-list.css';

class FormList extends Component {
  constructor(props) {
    super(props);
    this.state = {greetings: ['Jim', 'Sally', 'Buck']};
    this.addGreeting = this.addGreeting.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  addGreeting(newName) {
    this.setState({greetings: [...this.state.greetings, newName]});
  }

  removeGreeting(removeName) {
    const filteredGreetings = this.state.greetings.filter(name => {
      return name !== removeName;
    });
    this.setState({greetings: filteredGreetings});
  }

  renderGreetings() {
    return this.state.greetings.map(name => (
      <FormGroup
        key={name}
        name={name}
        removeGreeting={this.removeGreeting}
      />
    ));
  }

  render() {
    return (
      <div className="form-list">
        <AddGreeter addGreeting={this.addGreeting} />
        {this.renderGreetings()}
      </div>
    );
  }
}

export default FormList;
