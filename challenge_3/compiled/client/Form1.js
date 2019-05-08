class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "form",
        null,
        React.createElement(
          "input",
          null,
          " Enter your name "
        )
      ),
      React.createElement(
        "p",
        null,
        "You clicked ",
        this.state.count,
        " times"
      ),
      React.createElement(
        "button",
        { onClick: () => this.setState({ count: this.state.count + 1 }) },
        "Click me"
      ),
      "hiiiiii"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9Gb3JtMS5qc3giXSwibmFtZXMiOlsiRm9ybTEiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImNvdW50IiwicmVuZGVyIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEtBQU4sU0FBb0JDLE1BQU1DLFNBQTFCLENBQW1DO0FBQy9CQyxjQUFZQyxLQUFaLEVBQWtCO0FBQ2hCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDUEMsYUFBTztBQURBLEtBQWI7QUFHRDs7QUFFSEMsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLE9BREo7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFnQixhQUFLRixLQUFMLENBQVdDLEtBQTNCO0FBQUE7QUFBQSxPQUpGO0FBS0U7QUFBQTtBQUFBLFVBQVEsU0FBUyxNQUFNLEtBQUtFLFFBQUwsQ0FBYyxFQUFFRixPQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixDQUE1QixFQUFkLENBQXZCO0FBQUE7QUFBQSxPQUxGO0FBQUE7QUFBQSxLQURGO0FBWUQ7QUFyQmdDOztBQXdCbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlTixLQUFmIiwiZmlsZSI6IkZvcm0xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRm9ybTEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvdW50OiAxXG4gICAgICAgIH1cbiAgICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtID5cbiAgICAgICAgICAgICAgPGlucHV0PiBFbnRlciB5b3VyIG5hbWUgPC9pbnB1dD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxwPllvdSBjbGlja2VkIHt0aGlzLnN0YXRlLmNvdW50fSB0aW1lczwvcD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY291bnQ6IHRoaXMuc3RhdGUuY291bnQgKyAxIH0pfT5cbiAgICAgICAgICBDbGljayBtZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIGhpaWlpaWlcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gRm9ybTEoKXtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgaGlpaWlpaWlpaWlpaVxuLy8gICAgIDwvZGl2PlxuLy8gICApXG4vLyB9XG5leHBvcnQgZGVmYXVsdCBGb3JtMTsiXX0=