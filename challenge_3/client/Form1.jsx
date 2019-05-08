class Form1 extends React.Component{
    constructor(props){
      super(props);
      this.state = {
            count: 1
        }
    }

  render() {
    return (
      <div>
          <form >
              <input> Enter your name </input>
          </form>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      hiiiiii
      </div>
    );
  }
}

// function Form1(){
//   return (
//     <div>
//       hiiiiiiiiiiii
//     </div>
//   )
// }
export default Form1;