import React from 'react';
import TextSelector from '../components/TextSelector';

class NameTag extends React.Component {
  state = {
    text: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
   
  render() {
    const { text } = this.state;
    return (
      <>
        <h1>Name Tag</h1>
        <TextSelector text={text} onChange={this.onChange} />
      </>
    ); 
  }
}

export default NameTag;
