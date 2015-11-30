import React, { Component, PropTypes } from 'react';
import ReactListView from '..';

let styles = {
  outerDiv: {
    height: '400px',
    overflowY: 'auto',
    outline: '1px dashed blue',
    width: '400px',
  },

  ul: {
    margin: '0px',
    listStyleType: 'none',
    padding: '0'
  },

  fixedPosition: {
    position : 'fixed',
    width : '383px',
    top: '0px'
  },

  listHeader: {
    width: '383px',
    height: '20px',
    background: 'green',
    color: 'white'
  },

  listItems: {
    color: 'blue'
  },
};

class App extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  render() {
   const { data } = this.props;
    return (
      <ReactListView
        data={data}
        headerAttName="headerName"
        itemsAttName="items"
        styles={styles} />
    );
  }
}

const DATALIST = [
  {
    headerName : <span>"ListA"</span>,
    items : [
      <p>items1</p>,
      <p>items2</p>,
      <p>items3</p>,
      <p>items4</p>,
      <p>items5</p>,
      <p>items6</p>,
    ]
  }, {
    headerName : "ListB",
    items : [
      <p>items1</p>,
      <p>items2</p>,
      <p>items3</p>,
      <p>items4</p>,
      <p>items5</p>,
      <p>items6</p>,
    ]
  },{
    headerName : "ListC",
    items : [
      <p>items1</p>,
      <p>items2</p>,
      <p>items3</p>,
      <p>items4</p>,
      <p>items5</p>,
      <p>items6</p>,
    ]
  },{
    headerName : "ListD",
    items : [
      <p>items1</p>,
      <p>items2</p>,
      <p>items3</p>,
      <p>items4</p>,
      <p>items5</p>,
      <p>items6</p>,
    ]
  },{
    headerName : "ListE",
    items : [
      <p>items1</p>,
      <p>items2</p>,
      <p>items3</p>,
      <p>items4</p>,
      <p>items5</p>,
      <p>items6</p>,
    ]
  },{
    headerName : "ListF",
    items : [
      <p>items1</p>,
      <p>items2</p>,
      <p>items3</p>,
      <p>items4</p>,
      <p>items5</p>,
      <p>items6</p>,
    ]
  },{
    headerName : "ListG",
    items : [
      <p>items1</p>,
      <p>items2</p>,
      <p>items3</p>,
      <p>items4</p>,
      <p>items5</p>,
      <p>items6</p>,
    ]
  },{
    headerName : "ListH",
    items : [
      <p>items1</p>,
      <p>items2</p>,
      <p>items3</p>,
      <p>items4</p>,
      <p>items5</p>,
      <p>items6</p>,
    ]
  }
];

React.render(<App data= {DATALIST} />, document.body);
