import React, { Component } from 'react';
import FlexList from './FlexList.js';
import Youtube from './Youtube.js';
import Vimeo from './Vimeo.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        This is a numbered list
        <FlexList numbered={true}>
          <li> First element </li>
          <li> Second element </li>
        </FlexList>
        And these are bullet points
        <FlexList numbered={false}>
          <li> Some element </li>
          <li> Some other element </li>
        </FlexList>
        <Youtube url="https://www.youtube.com/embed/dQw4w9WgXcQ"/>
        <Vimeo url="https://player.vimeo.com/video/206311312"/>
      </div>
    );
  }
}

export default App;
