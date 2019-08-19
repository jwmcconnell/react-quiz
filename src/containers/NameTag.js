import React from 'react';
import TextSelector from '../components/TextSelector';
import ColorSelector from '../components/ColorSelector';

class NameTag extends React.Component {
  state = {
    text: '',
    color: '#FFF'
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
   
  render() {
    const { text, color } = this.state;
    return (
      <>
        <h1>Name Tag</h1>
        <TextSelector text={text} onChange={this.onChange} />
        <ColorSelector color={color} onChange={this.onChange} />
      </>
    ); 
  }
}

export default NameTag;
