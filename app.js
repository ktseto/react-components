// TODO
// const Apples = () => (<li>Apples</li>);
// const Bread = () => (<li>Bread</li>);

const groceryItems = ['Apples', 'Bread'];

//const GroceryListItem = (props) => (<li>{props.item}</li>);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: false };
  }

  onHover() {
    this.setState({ done: !this.state.done });
  }

  render() {
    const style = {
      //textDecoration: this.state.done ? 'line-through' : 'none'
      'font-weight': this.state.done ? 'bold' : 'normal'
    };
    return (<li style={style} onMouseOver={this.onHover.bind(this)}>{this.props.item}</li>);
  }
}


const GroceryList = () => (
  <ul>
    {groceryItems.map((item) => <GroceryListItem item={item} />)}
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));

/*
const GroceryList = () => (
  <ul>
    <GroceryListItem item={groceryItems[0]} />
    <GroceryListItem item={groceryItems[1]} />
  </ul>
);
*/