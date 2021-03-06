require('normalize.css/normalize.css');
require('styles/App.css');
var TodoItem = React.createFactory(require('TodoItemComponent'));

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <TodoItem />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
