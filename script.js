let boxes=document.querySelectorAll(".box");
let rbtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-btn");
let sg=document.querySelector("#msg");
let msgcont=document.querySelector(".msg-cont");
let turn0=true;
const winPattens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
var count=0;
const checkdraw =()=>{
    if (count==9&&!chechWinner()){
        msg.innerText=`The match is Draw`,
        msgcont.classList.remove("hide");
        
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turn0){
        count+=1;
        box.innerText="O";
        box.style.color="blue";
        turn0=false;
       checkdraw();
       }
       else{
        box.style.color="green";
        box.innerText="X"
        count+=1;
        turn0=true
       }
       box.disabled=true;
       chechWinner();
       checkdraw();
    })
    
})

const disableboxes =()=>{
    for(let box of boxes){
        box.disabled=true
        count=0;
    }
}
const enableboxes =()=>{
    for(let box of boxes){
        count=0;
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner = (winner) =>{
    msg.innerText=`Conguratulations\n Winner is Player ${winner}`,
    msgcont.classList.remove("hide");
    disableboxes();
}


const chechWinner = () =>{
    for (let pattern of winPattens){
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;
        if(pos1 !=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("winner"," ", pos1);

                showWinner(pos1);
            }
        }
    }
}
const resetGame =() =>{
    turn0=true;
    enableboxes();
    msgcont.classList.add("hide");
}

newgame.addEventListener("click",resetGame);
rbtn.addEventListener("click",resetGame);
