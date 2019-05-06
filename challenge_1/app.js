// function flip() {
//     // get the reference for the body
//     var body = document.getElementsByTagName("body")[0];
  
//     // creates a <table> element and a <tbody> element
//     var tbl = document.createElement("table");
//     var tblBody = document.createElement("tbody");
  
//     // creating all cells
//     for (var i = 0; i < 2; i++) {
//       // creates a table row
//       var row = document.createElement("tr");
  
//       for (var j = 0; j < 2; j++) {
//         // Create a <td> element and a text node, make the text
//         // node the contents of the <td>, and put the <td> at
//         // the end of the table row
//         var cell = document.createElement("td");
//         var cellText = document.createTextNode("cell in row "+i+", column "+j);
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//       }
  
//       // add the row to the end of the table body
//       tblBody.appendChild(row);
//     }
  
//     // put the <tbody> in the <table>
//     tbl.appendChild(tblBody);
//     // appends <table> into <body>
//     body.appendChild(tbl);
//     // sets the border attribute of tbl to 2;
//     tbl.setAttribute("border", "2");
//   }
  

var myButton = document.getElementsByClassName('checker')[0];
myButton.addEventListener('click', (e)=>{closureFlip(e)}, false);

var flip = function(){
    var arr = new Array(9).fill(0);
    var playerOne = true;
    var checkWin = function(arr,n){
        switch (checkSum(arr, n)) {
            case 1 :
            alert('Player One Wins')
            arr = new Array(9).fill(0);
            playerOne = true;
            refresh();
            break;
            case 2 :
            alert('Player Two Wins')
            arr = new Array(9).fill(0);
            playerOne = true;
            refresh();
            break;
            case 3 :
            break;
        }
    }
    var refresh = function(){
        var allB = document.getElementsByClassName('checker')[0]
        allB = allB.children
        var count = 0
        for (let k of allB){
            for (let c of k.children)
            c.innerHTML = c.id;
            count ++;
        }
    }

    return function(e){
        var cellName = Number(e.target.id);
        if (arr[cellName-1]>0){return;}
        if (playerOne){
            arr[cellName-1] = 1;
            playerOne = !playerOne;
            e.target.innerHTML = 'o'
        } else {
            arr[cellName-1] = 10;
            playerOne = !playerOne;
            e.target.innerHTML = 'x'
        }
        checkWin(arr,3);
    }
}

var closureFlip = flip();


var checkSum = function(a, n){
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

