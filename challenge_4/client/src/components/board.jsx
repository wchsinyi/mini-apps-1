class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			board: new Array(this.props.n).fill(0).map(i => new Array(this.props.m).fill(0)),
			playerOne: true
		}
		this.move = this.move.bind(this);
		this.togglebutton = this.togglebutton.bind(this);

	}
	move(e) {
		var x = Math.floor(Number(e.target.name) / 10)
		var y = e.target.name % 10
		var i = this.props.n - 1;
		while (i >= 0) {
			var player = this.state.playerOne ? 1 : 20;
			var tempBoard = this.state.board;
			if (tempBoard[i][y] === 0) {
				tempBoard[i][y] = player;
				this.setState(
					{ playerOne: !this.state.playerOne, board: tempBoard }
				)
				this.togglebutton(i, y, player);
				break;
			}
			i--;
		}
		console.log(this.state.board);
	}
	togglebutton(i, y, player) {
		let name = i * 10 + y;
		$('[name=' + name + ']').toggleClass("player" + player.toString());
	}
	render() {
		var newboard = [];
		for (var i = 0; i < this.props.n; i++) {
			for (var j = 0; j < this.props.m; j++) {
				var t = (
					<div key={i}>
						<Row i={i} j={j} move={this.move}></Row>
					</div>
				);
			}
			newboard.push(t);
		};
		return (<div>{newboard}</div>)
	}

}

function Row({ i, j, move }) {
	var arr = [];
	for (var k = 0; k <= j; k++) {
		arr.push(<button key={(i * 20 + k).toString()} className="row" data-x={i.toString()} data-y={k.toString()} name={(i * 10 + k).toString()} onClick={move}> {i}, {k} </button>)
	};
	return (arr);
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