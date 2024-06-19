let rows = window.prompt("Enter row");
let columns = window.prompt("Enter columns");

let symbol  = window.prompt("Enter a symbol to use:");

for(let i=1;i<=rows;i++){
    for(let j=1;j<=columns;j++){
        document.getElementById("rectangle").innerHTML +=symbol;
    }

    document.getElementById("rectangle").innerHTML += "<br>";

}