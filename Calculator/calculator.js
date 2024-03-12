function display(num){
    inputbox.value += num;
}

function clearall(){
    inputbox.value = "";
}

function back(){
    inputbox.value=inputbox.value.slice(0,-1);
}