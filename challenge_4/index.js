import Board from "./client/board.js";

var n = 4;
var m = 7;
ReactDOM.render(<div><Board n={n} m={m}/></div>, 
	document.getElementById('originalBoard')
)


