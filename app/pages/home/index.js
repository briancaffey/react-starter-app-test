import React from 'react';
import md from './index.md';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = 'Home · React Starter';
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: md.html }} />
    );
  }

}

export default HomePage;
