function Gameboard () {
  /*let boardPos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]*/
  
  function initPosition () {
    player=0;
    sate=0;
    return{player, state}
  }

  let pos1 = initPosition;
  let pos2 = initPosition;
  let pos3 = initPosition;
  let pos4 = initPosition;
  let pos5 = initPosition;
  let pos6 = initPosition;
  let pos7 = initPosition;
  let pos8 = initPosition;
  let pos9 = initPosition;

  board = {pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9}

  const updateBoard = (player, state, position) => {
    let x = pos + position; 
    boardPos.x.player=player;
    boardPos.x.sate=state;
  }
  return {boardPos, newPostion};
}

function positionState (player, state) {
  retun {player, state};
}

function Player (name) {
  return {name};
}

function GameTurn (playerOne, playerTwo) {
  turn = playerOne;
  const turnToggle = () => {
    if(turn === playerOne) turn = playerTwo;
  }

}

function getPosition () {
  console.log("Enter position");

}






//const btn = document.querySelector("#btn");
//btn.onclick = () => alert("Hello World\!");




//const link = document.querySelector(".comm");
//link.textContent = "Mozilla Developer Network";
/*link.href = "https://developer.mozilla.org";*/
// const sect = document.querySelector("section");
// const para = document.createElement("div");
// para.textContent = "This is the new div";

// para.setAttribute("class", "secDiv");   //auto styled in css as soon as given class, inline styles below
// sect.appendChild(para);

// const text = document.createTextNode(
//     " this is the created text node addition",
//   );
//   const linkPara = document.querySelector(".secDiv");
//   linkPara.appendChild(text);
//   sect.appendChild(linkPara);

//   const btn = document.querySelector("#btn");
//   btn.addEventListener("click", function (e) {
//     sect.removeChild(linkPara);
//     e.target.style.background = "blue";
//   });

//sect.removeChild(linkPara);   //Removing a node is pretty simple as well, at least when you have a reference to the node to be removed and its parent. In our current case, we just use Node.removeChild(), like this
//linkPara.remove();     //When you want to remove a node based only on a reference to itself, which is fairly common, you can use Element.remove()
//linkPara.parentNode.removeChild(linkPara);  //older browsers

//Inline styles
/*para.style.color = "white";
para.style.backgroundColor = "purple";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";*/
