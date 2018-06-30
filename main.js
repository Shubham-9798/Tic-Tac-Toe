console.log("D");
//console.log(document.getElementById("winner").innerText);
const i=document.getElementsByTagName('td');

console.log(i[2]);
console.log(i.length);
console.log(typeof i);
//console.log(i.getAttribute('id'));

// i.addEventListener("click", function(){
// 	              console.log(this.getAttribute('id'));
// });

var origBoard;
const huplayer = 'O';
const aiPlayer = 'X';
const winCombos =[
                  [0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,6],
                  [1,4,7],
                  [2,5,8],
                  [0,4,8],
                  [6,4,2],  
                 ]
startGame();
var toogle=1;
function startGame(){
	document.querySelector(".endgame").style.display="none";
	origBoard=Array.from(Array(9).keys());
	for(var j=0;j<i.length;j++){
		i[j].innerText = '';
		i[j].style.removeProperty('background-color');
		i[j].addEventListener('click',turnClick,false);
	}
}

 function turnClick(e){
 	console.log(toogle + " tooglr")
     document.querySelector(".endgame").style.display="block";
 	if(toogle==1)
 	  {
 	  	toogle=0;
 	  	turn(e.target.id , huplayer);
 	  	console.log(toogle + " tossoglr")
 	  }else if(toogle==0){
 	  	toogle=1;
 	  	turn(e.target.id , aiPlayer); 	
 	  }

 }

function turn(squareId, player){
	//console.log(origBoard[squareId]);
	console.log(player);
	origBoard[squareId] = player;
	document.getElementById(squareId).innerText = player; 
	//console.log(origBoard[squareId]);
    i[squareId].removeEventListener('click',turnClick,false);
	let gameWon = checkWin(origBoard , player);
	// console.log(gameWon.player,gameWon.index[0]);
	if (gameWon) gameover(gameWon)
	// if(gameWon==null)
} 

function checkWin(board ,player){
    // console.log("DD");
    let gameWon=null;
    for(var k=0;k<9;k++){
    	if(board[winCombos[k][0]]==board[winCombos[k][1]] && board[winCombos[k][1]]==board[winCombos[k][2]])
    		{
    			//document.getElementById(winCombos[k][0]).style.backgroundColor='blue';
    			// alert("S");
    			var index = [winCombos[k][0],winCombos[k][1],winCombos[k][2]];
    			gameWon= {player:player,
    				        index:index
    				    };
    			break;
    		}
    }

    return gameWon;
}

var playerWon={X:'player-2',O:'player-1'}

function gameover(gameWon){
     
   // console.log(gameWon.index);
   
   for(let index of gameWon.index)
   	 document.getElementById(index).style.backgroundColor=
   	                 gameWon.player==huplayer?"blue":"red";
   for(var p=0;p<i.length;p++)
   {
   	i[p].removeEventListener('click',turnClick,false);
   }
   //document.getElementById("winner").innerText = playerWon[t];
   // document.write(playerWon[t]);
   // console.log(typeof gameWon.player);
    var t=gameWon.player;
   // console.log(t);
   // console.log(typeof playerWon[t]+"SSS");
   var para = document.createElement("p");
   var node = document.createTextNode(playerWon[t]);
   para.appendChild(node);
   console.log(para)
   var element = document.getElementById("div1");
   console.log(element);
   element.appendChild(para);
}