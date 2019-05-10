class Board extends React.Component {
	// specify n by m
	constructor(props) {
		super(props);
		this.state = {
			board: []
		};
	}
	render() {
		var newboard = [];
		for (var i = 0; i < this.props.n; i++) {
			newboard[i] = [];
			for (var j = 0; j < this.props.m; j++) {
				newboard[i][j] = React.createElement(
					"div",
					{ key: (i * 10 + j).toString(), "class": "row", "data-x": i.toString(), "data-y": j.toString() },
					" ",
					i,
					", ",
					j,
					" "
				);
			};
		};
		return React.createElement(
			"div",
			{ className: "board" },
			newboard
		);
	}

}

export default Board;

// you want your board to be static 
// class below another class where this class really doesn't do anything much, if ay all. 
// a smarter way to do it? faster?


// Serving files from Express

// Similar to the hint in challenge #2, you can use express.static to tell Express where to look for files to serve up to the browser. The convention is to serve client files from the public folder, like so:

//   1│    app.use(express.static('public')
// By default, Express will look for a file called index.html and serve that file whenver you browse to the root (/) route.


// what is npm build?
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9ib2FyZC5qc3giXSwibmFtZXMiOlsiQm9hcmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImJvYXJkIiwicmVuZGVyIiwibmV3Ym9hcmQiLCJpIiwibiIsImoiLCJtIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEtBQU4sU0FBb0JDLE1BQU1DLFNBQTFCLENBQW1DO0FBQ2xDO0FBQ0FDLGFBQVlDLEtBQVosRUFBa0I7QUFDakIsUUFBTUEsS0FBTjtBQUNBLE9BQUtDLEtBQUwsR0FBYTtBQUNaQyxVQUFPO0FBREssR0FBYjtBQUdBO0FBQ0RDLFVBQVE7QUFDUCxNQUFJQyxXQUFVLEVBQWQ7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLTCxLQUFMLENBQVdNLENBQS9CLEVBQWtDRCxHQUFsQyxFQUF1QztBQUNyQ0QsWUFBU0MsQ0FBVCxJQUFZLEVBQVo7QUFDRCxRQUFLLElBQUlFLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLUCxLQUFMLENBQVdRLENBQS9CLEVBQWtDRCxHQUFsQyxFQUF1QztBQUN0Q0gsYUFBU0MsQ0FBVCxFQUFZRSxDQUFaLElBQWlCO0FBQUE7QUFBQSxPQUFLLEtBQUssQ0FBQ0YsSUFBRSxFQUFGLEdBQUtFLENBQU4sRUFBU0UsUUFBVCxFQUFWLEVBQStCLFNBQU0sS0FBckMsRUFBMkMsVUFBUUosRUFBRUksUUFBRixFQUFuRCxFQUFpRSxVQUFRRixFQUFFRSxRQUFGLEVBQXpFO0FBQUE7QUFBeUZKLE1BQXpGO0FBQUE7QUFBOEZFLE1BQTlGO0FBQUE7QUFBQSxLQUFqQjtBQUNBO0FBRUQ7QUFDRCxTQUNDO0FBQUE7QUFBQSxLQUFLLFdBQVksT0FBakI7QUFDQ0g7QUFERCxHQUREO0FBS0E7O0FBdEJpQzs7QUEwQm5DLGVBQWVSLEtBQWY7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQSIsImZpbGUiOiJib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHQvLyBzcGVjaWZ5IG4gYnkgbVxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRib2FyZDogW11cblx0XHR9XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0dmFyIG5ld2JvYXJkID1bXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMubjsgaSsrKSB7XG5cdFx0XHRcdG5ld2JvYXJkW2ldPVtdO1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnByb3BzLm07IGorKykge1xuXHRcdFx0XHRuZXdib2FyZFtpXVtqXSA9IDxkaXYga2V5PXsoaSoxMCtqKS50b1N0cmluZygpfSBjbGFzcz1cInJvd1wiIGRhdGEteD17aS50b1N0cmluZygpfSBkYXRhLXk9e2oudG9TdHJpbmcoKX0+IHtpfSwge2p9IDwvZGl2PlxuXHRcdFx0fTtcblx0XHRcdFxuXHRcdH07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lID0gJ2JvYXJkJz5cblx0XHRcdHtuZXdib2FyZH1cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkOyBcblxuLy8geW91IHdhbnQgeW91ciBib2FyZCB0byBiZSBzdGF0aWMgXG4vLyBjbGFzcyBiZWxvdyBhbm90aGVyIGNsYXNzIHdoZXJlIHRoaXMgY2xhc3MgcmVhbGx5IGRvZXNuJ3QgZG8gYW55dGhpbmcgbXVjaCwgaWYgYXkgYWxsLiBcbi8vIGEgc21hcnRlciB3YXkgdG8gZG8gaXQ/IGZhc3Rlcj9cblxuXG4vLyBTZXJ2aW5nIGZpbGVzIGZyb20gRXhwcmVzc1xuXG4vLyBTaW1pbGFyIHRvIHRoZSBoaW50IGluIGNoYWxsZW5nZSAjMiwgeW91IGNhbiB1c2UgZXhwcmVzcy5zdGF0aWMgdG8gdGVsbCBFeHByZXNzIHdoZXJlIHRvIGxvb2sgZm9yIGZpbGVzIHRvIHNlcnZlIHVwIHRvIHRoZSBicm93c2VyLiBUaGUgY29udmVudGlvbiBpcyB0byBzZXJ2ZSBjbGllbnQgZmlsZXMgZnJvbSB0aGUgcHVibGljIGZvbGRlciwgbGlrZSBzbzpcblxuLy8gICAx4pSCICAgIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpXG4vLyBCeSBkZWZhdWx0LCBFeHByZXNzIHdpbGwgbG9vayBmb3IgYSBmaWxlIGNhbGxlZCBpbmRleC5odG1sIGFuZCBzZXJ2ZSB0aGF0IGZpbGUgd2hlbnZlciB5b3UgYnJvd3NlIHRvIHRoZSByb290ICgvKSByb3V0ZS5cblxuXG4vLyB3aGF0IGlzIG5wbSBidWlsZD8gIl19