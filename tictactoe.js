let boxes= document.querySelectorAll(".box");
let resetbutton= document.querySelector( ".reset-game" );
let newGamebutton= document.querySelector(".newgame");
let msgcontainer=document.querySelector(".msgcont");
let msg= document.querySelector("#winner");
let turnO= true;
const winPatterns = [
    [0, 1, 2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const enabled = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetgame = () =>{
turnO=true;
msgcontainer.classList.add("hide");
enabled();

}

    
boxes.forEach(box => {
    box.addEventListener("click", () => {
        
        if (turnO) {
            box.textContent = "O";
        } else {
            box.textContent = "X";
        }
        turnO = !turnO;
        box.disabled=true;
        checkWin();
        
 
    });
   
    const disabled =() =>{
        for(let box of boxes){
            box.disabled=true;

        }
    }
    const showwinner = (winner) =>{
        msg.innerText= 'Congratulations, Winner is'+(" " + winner);
        msgcontainer.classList.remove("hide");
        disabled();
    } 
    const checkWin = () =>{
        for(let pattern of winPatterns){
            let post1val= boxes[pattern[0]].innerText;
            let post2val= boxes[pattern[1]].innerText;
            let post3val= boxes[pattern[2]].innerText;

            if(post1val!="" && post2val!="" && post3val!=""){
                if(post1val==post2val && post2val==post3val){
                    showwinner(post1val);
                }
            }
        }

    }

});
newGamebutton.addEventListener("click", resetgame);
resetbutton.addEventListener("click", resetgame);



