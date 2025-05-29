const emojins = [
    "😃",
    "😃",
    "🤣",
    "🤣",
    "❤️",
    "❤️",
    "😂",
    "😂",
    "👌",
    "👌",
    "😎",
    "😎",
];

let openCards = [];

let ShuffleEmojins = emojins.sort(()=>
    (Math.random() > 0.5 ? 2 : -1));
for(let i=0; i < emojins.length; i++ ){
    let box =document.createElement("div");
    box.className = "item";
    box.innerHTML = ShuffleEmojins[i];
    box.onclick = handleClink;
    document.querySelector(".game").appendChild(box);
}

function handleClin(){
    if(openCards.length < 2){
        this.classlist.add("boxOpen");
        openCards.push(this);
    }
    if (openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classlist.add("boxMatch");
        openCards[1].classlist.add("boxMatch");
    }else {
        openCards[0].classlist.remove("boxOpen");
        openCards[1].classlist.remove("boxOpen");
    }
    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojins.length){
        alert("Você venceu!");
    }

}