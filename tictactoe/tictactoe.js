letter = "X";

function play(cell){
  console.log(cell);
    blocks = document.getElementById(cell).innerHTML;
   if (blocks == "X" || blocks == "O"){
       alert("Oops, this square has already been chosen!");
   } else{
        document.getElementById(cell).innerHTML = letter;
        if (letter == "X"){
            letter = "O";
        }else{
            letter = "X";
        }
   }
  check1();
  
  return false;
}

function check() {
  return false;
}

function check1(){
  console.log("check");
   c11 = document.getElementById('cel11').innerHTML;
   c12 = document.getElementById('cel12').innerHTML;
   c13 = document.getElementById('cel13').innerHTML;
   c21 = document.getElementById('cel21').innerHTML;
   c22 = document.getElementById('cel22').innerHTML;
   c23 = document.getElementById('cel23').innerHTML;
   c31 = document.getElementById('cel31').innerHTML;
   c32 = document.getElementById('cel32').innerHTML;
   c33 = document.getElementById('cel33').innerHTML;
   if (((c11 != '') && (c12 != '') && (c13 != '') && (c11 == c12) && (c12 == c13)) ||
    ((c11 != '') && (c22 != '') && (c33 != '') && (c11 == c22) && (c22 == c33)) ||
     ((c11 != '') && (c21 != '') && (c31 != '') && (c11 == c21) && (c21 == c31)) ||
      ((c21 != '') && (c22 != '') && (c23 != '') && (c21 == c22) && (c22 == c23)) ||
       ((c31 != '') && (c32 != '') && (c33 != '') && (c31 == c32) && (c32 == c33)) ||
        ((c12 != '') && (c22 != '') && (c32 != '') && (c12 == c22) && (c22 == c32)) ||
         ((c13 != '') && (c23 != '') && (c33 != '') && (c13 == c23) && (c23 == c33)) ||
          ((c31 != '') && (c22 != '') && (c13 != '') && (c31 == c22) && (c22 == c13))){
       //document.getElementById('result').innerHTML = 'You won! Congratulations Champion! ' + (letter === 'X' ? 'O' : 'X');
     setTimeout(function(){ alert("You won! Congratulations Champion!"); }, 1000);
     setTimeout(function(){ novo(); }, 2000);
   }
}

function novo(){
    for (i=1; i<4; i++){
       for (j=1; j<4; j++){
        cellname = 'cel' + i + j
           document.getElementById(cellname).innerHTML = '';
      
      }
   }
}
