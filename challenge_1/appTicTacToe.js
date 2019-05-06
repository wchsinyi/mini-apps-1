var myButton = document.getElementsByClassName('checker')[0];
myButton.addEventListener('click', (e)=>{newBoard.flip(e)}, false);


var Board = function(){
    this.arr = new Array(9).fill(0);
    this.playerOne = true;
    this.n = 3;
    
}

Board.prototype.flip = function(e){    
    var cellName = Number(e.target.id);
    if (this.arr[cellName-1]>0){return;}
    if (this.playerOne){
        this.arr[cellName-1] = 1;
        e.target.innerHTML = 'o'
    } else {
        this.arr[cellName-1] = 10;
        e.target.innerHTML = 'x'
    }
    this.playerOne = !this.playerOne;
    this.checkWin(this.arr,3);
    // console.log(this.checkSum(this.arr,3));
}

Board.prototype.checkWin = function(){
    console.log(this.checkSum(this.arr,3));
    switch (this.checkSum(this.arr, this.n)) {
        case 1 :
        alert('Player One Wins')
        this.refresh();
        break;
        case 2 :
        alert('Player Two Wins')
        this.refresh();
        break;
        case 3 :
        break;
    }
}

Board.prototype.checkSum = function(a, n){
    var newarr = new Array(n).fill(0).map(i=> new Array(n).fill(0));
    for (let k = 0; k < a.length; k++) {
        newarr[Math.floor(k/3)][k%3] = a[k];
    }
    //check left and right diagonals [LAZY VERSION TO FIX];
    sumRD = a[0] + a[4] + a[8];
    sumLD = a[2] + a[4] + a[6];
    if (sumRD===3 || sumLD===3) { return 1;}
    if (sumRD===30 || sumLD===30) { return 2;}
    // check row and columns 
    for (let i = 0; i < newarr[0].length; i++) {
        let sumR = 0 ;
        let sumC = 0 ;
        for (let j = 0; j < newarr[0].length; j++) {
            sumR += newarr[i][j];
            sumC += newarr[j][i];
        }
        if (sumR===3 || sumC===3) {return 1;}
        if (sumR===30 || sumC===30) {return 2;}
    }
    return 0;
}
Board.prototype.refresh = function(){
    this.arr = new Array(9).fill(0);
    this.playerOne = true;
    var allB = document.getElementsByClassName('checker')[0].children
    for (let k of allB){
        for (let c of k.children)
        c.innerHTML = c.id;
    }
}




var newBoard = new Board();