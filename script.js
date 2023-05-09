let textbox=document.getElementById("textbox");
textbox.addEventListener("input",count);

function count(){
    let input=this.value;
    let character=input.length;

    document.getElementById("char").innerHTML=character;

    //Words
     input=input.trim();
    let words=input.split(" ");

    let cleanList=words.filter(function(elm){
        return elm!=" ";
    })
    document.getElementById("words").innerHTML=cleanList.length;
}

textbox.addEventListener('focus',function(){
    textbox.style.background="violet";
    textbox.style.color="black";
 })
 
 textbox.addEventListener('blur',function(){
    textbox.style.background="white";
 })