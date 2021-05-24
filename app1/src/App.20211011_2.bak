import React from "react";
// import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(args){
    super();
    console.log('constructor exec 1st in page once');
  }
  state = {
    count: 0,
  };
  add = () => {
    console.log("add");
    // this.state.count=1; //err
    this.setState(curr=>({ count:curr.count + 1 }));
    // this.setState({ count: this.state.count + 1 }); //상태 의존적으로 성능 저하
  };
  minus = () => {
    console.log("minus");
    // this.state.count=-1; //err
    // this.setState({ count: this.state.count-1 });
    this.setState(curr=>({ count:curr.count - 1 }));
  };
  componentDidMount(){
    console.log('componentDidMount exec 3rd in page once');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate not exec 3rd, but every functioning after render')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount exec last in page once, but can not check in logging');
  }
  render() {
    console.log('render exec 2nd, and every functioning');
    return (
      <div>
        <h1>the number is :{this.state.count - 1}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }
}

export default App;
