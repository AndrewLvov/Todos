'use strict';

import React from 'react';

require('styles//TodoItem.css');

class TodoItemComponent extends React.Component {
  render() {
    return (
      <div className="todoitem-component">
        Todo item
      </div>
    );
  }
}

TodoItemComponent.displayName = 'TodoItemComponent';

// Uncomment properties you need
// TodoItemComponent.propTypes = {};
// TodoItemComponent.defaultProps = {};

export default TodoItemComponent;
