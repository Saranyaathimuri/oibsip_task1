let output=document.getElementById("_output");
function display(num){
    output.value+=num;
}
function equal(){
    try{
        output.value=eval(output.value);
    }
    catch{
        alert("invalid expression");

    }
}
function clearAll(){
    output.value="";
}
function backspace(){
    output.value=output.value.slice(0,-1);
}