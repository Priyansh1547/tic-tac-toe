let box = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let res = document.querySelector(".reset");

let turnO = true;
let count = 0;
let userWin = false;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


msg.innerText = "O turn"
box.forEach((box) =>{
    box.addEventListener("click" , () =>{
        if(turnO){
            box.innerHTML = "O";
            msg.innerText = "X turn";
            turnO = false;
        }else{
            box.innerHTML = "X";
            msg.innerText = "O turn";
            turnO = true;
        }
        count++;
        box.disabled = true;
        checkWin();
        reset();
    })
})


const draw = () =>{
    if(count === 9 && userWin === false){
        msg.innerText = "Game draw";
    }
}

const checkWin = () =>{
    for (let patterns of winPatterns) {
        let pos1 = box[patterns[0]].innerText;
        let pos2 = box[patterns[1]].innerText;
        let pos3 = box[patterns[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
            msg.innerHTML = `${pos1} is winner`;
            box.forEach((boxes) =>{
                boxes.disabled = true;
            })
            userWin = true;
            }else{
                draw();
            }
        }
    }
}
const reset = () =>{
    box.forEach((box) =>{
    res.addEventListener("click" , () =>{
        box.innerHTML = "";
        msg.innerText = "";
        box.disabled = false;
        count = 0;
        turnO = true;
        userWin = false
    })
 })
}