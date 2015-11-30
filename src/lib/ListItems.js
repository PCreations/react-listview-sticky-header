import React, { Component, PropTypes } from 'react';
import createFragment from 'react-addons-create-fragment';

export default class ListItem extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
    styles: PropTypes.object.isRequired
  };

  render() {
    const { items, styles } = this.props;
    return (
      <div>
      {
        items.map((item, index) => {
          var child = {};
          child['listitem_'+index] = React.cloneElement(item, {style: styles});
          return createFragment(child);
        })
      }
      </div>
    );
  }
}
