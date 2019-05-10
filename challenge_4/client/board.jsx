class Board extends React.Component{
	// specify n by m
	constructor(props){
		super(props);
		this.state = {
			board: []
		}
	}
	render(){
		var newboard =[];
		for (var i = 0; i < this.props.n; i++) {
				newboard[i]=[];
			for (var j = 0; j < this.props.m; j++) {
				newboard[i][j] = <div key={(i*10+j).toString()} class="row" data-x={i.toString()} data-y={j.toString()}> {i}, {j} </div>
			};
			
		};
		return (
			<div className = 'board'>
			{newboard}
			</div>
		)
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