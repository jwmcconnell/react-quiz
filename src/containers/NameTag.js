import React from 'react';
import TextSelector from '../components/TextSelector';
import ColorSelector from '../components/ColorSelector';
import Shape from '../components/Shape';

class NameTag extends React.Component {
  state = {
    text: '',
    color: '#000000',
    backgroundColor: '#FFFFFF'
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
   
  render() {
    const { text, color, backgroundColor } = this.state;
    return (
      <>
        <h1>Name Tag</h1>
        <TextSelector text={text} onChange={this.onChange} />
        <ColorSelector color={color} backgroundColor={backgroundColor} onChange={this.onChange} />
        <Shape text={text} color={color} backgroundColor={backgroundColor} />
      </>
    ); 
  }
}

export default NameTag;
