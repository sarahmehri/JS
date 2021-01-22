

let btn = document.getElementById('btn');
btn.onclick=calling;


function calling(){
    let x = document.getElementById('myText').value;
    //fucking off
    if(x<=0 ||x=== "" || isNaN(x) ){
        document.write("please enter a number!");
    }
    let text = "";
    let i;
    //let nums;
    for (i = 1; i <= x; i++) {

        //if num evenly dividable by 3 and 5
        if(i%3 == 0 && i%5==0){
            text +=  "Hee Haw!" + "<br>";
        }
        //if num evenly dividable by 3
        else if(i%3 == 0){
            text +=  "Hee!" + "<br>";
        }
        //if num evenly dividable by  5
        else if(i%5 == 0){
            text +=  "Haw!" + "<br>";
        }
        //print the rest of the numbers
        else{
            text +=  i + '<br>';
        }

    }
//printing the numbers
    document.write(text);
}


