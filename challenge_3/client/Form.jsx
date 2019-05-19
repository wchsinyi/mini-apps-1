import post from './Post.js'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      inputFieldName: {
        1: ['name', 'email', 'passcode'],
        2: ['line 1', 'line 2', 'city', 'state', 'zip code'],
        3: ['credit card #', 'expiration date', 'CVV', 'billing zip code']
      },
      inputs: {
        1: {},
        2: {},
        3: {}
      }
    }
    this.pagePlus = this.pagePlus.bind(this);
    this.grabText = this.grabText.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  pagePlus(e) {
    e.preventDefault();
    if (this.state.step === 3) {
      this.setState({ step: 1 })
    } else {
      this.setState({ step: this.state.step + 1 })
    }
  }

  grabText(e,i, step){
    i = i.split(' ').join('').replace('#', "")
    var r = this.state.inputs;
    r[step][i] = e.target.value;
    this.setState({inputs: r});
  }

  submitHandler(e){
    e.preventDefault();
    console.log('this.state.inputs',this.state.inputs);
    post(this.state.inputs[this.state.step], this.state.step );
    this.pagePlus(e);
  }

  render() {
    var items = this.state.inputFieldName[this.state.step].map((j, idx) => {
      return (<div key={ (this.state.step*10+idx).toString()}>
        <label>
          {j}
          <input type="text" onChange={ (e)=> {this.grabText(e, j, this.state.step)}  }  /> 
        </label>
      </div>)
    });
    return (
      <form onSubmit={this.submitHandler}>
        {items}
        <input type="submit" value="Submit" />
      </form>
    )
  }
}


export default Form;











// {/*value={'input your ' + i}*/} 