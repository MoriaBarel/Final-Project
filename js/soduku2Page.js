// const clickSubmit1 = (easy) => {
//   alert('hi')
//   window.location.href="./soduku1Page.html"

// }


let main = document.getElementById('main')
let div 

const sodukoSolution = [
[9, 3, 6, 1, 4, 7, 2, 5, 8],
[1, 4, 7, 2, 5, 8, 3, 6, 9],
[2, 5, 8, 3, 6, 9, 4, 7, 1],
[3, 6, 9, 4, 7, 1, 5, 8, 2],
[4, 7, 1, 5, 8, 2, 6, 9, 3],
[5, 8, 2, 6, 9, 3, 7, 1, 4],
[6, 9, 3, 7, 1, 4, 8, 2, 5],
[7, 1, 4, 8, 2, 5, 9, 3, 6],
[8, 2, 5, 9, 3, 6, 1, 4, 7]
]


let sudoku1 = [
  ['', 3, 6, '', 4, '', 2, '', 8],
  [1, 4, '', 2, '', "", 3, "", 9],
  ['', "", 8, '', 6, "", 4, '', 1],
  [3, '', 9, "", '', 1, 5, '', 2],
  [4, "", 1, '', 8, "", 6, "", 3],
  ['', 8, '', "", 9, '', 7, 1, ''],
  [6, "", 3, 7, '', 4, "", "", 5],
  ["", 1, "", 8, 2, '', '', 3, ''],
  [8, '', 5, "", 3, "", 1, "", '']
  ]


createBoard = (sudoku1) => {
  for (let i = 0; i < sudoku1.length; i++)
  {
    for(let j=0;j < sudoku1[i].length; j++)
    {
     div = document.createElement('div')//<div></div>
     div.setAttribute('class', 'cell') //<div class = "cell"></div>
     if (sudoku1[i][j] != '') 
      {
        div.setAttribute('id', `${i}${j}`) == " " //moria:<div id = "ij"></div>
      }
     if (sudoku1[i][j] == '') 
      {
        input = document.createElement('input')//moria:<input></input>
        input.setAttribute('type', 'number') //moria:<input type = "number"></div>
        input.setAttribute('id', `${i}${j}`) == " " //moria:<input id = "ij"></input>
        input.setAttribute('class', 'emptyCell')
        div.appendChild(input)
      }
     else
     {
      div.innerHTML = sudoku1[i][j]
     }
     main.appendChild(div)
    }
  }



let div2 
let qube
let a = 0, b = 0
let checkSquers = 0  
for (let m = 0; m < sudoku1.length - 3; m + 3) {
  for (let n = 0; n < sudoku1[m].length - 3; n + 3)
  {
div2 = document.createElement('div')//<div></div>
div2.className = "big_squere" //<div class = "big_squere"></div>
document.getElementById('main').appendChild(div2);
    for (let i = a; i < a + 3; i++)
    {
      for(let j = b; j < b + 3; j++)
      {
    qube = document.getElementById(`${i}${j}`)
    
    if (qube.nodeName == 'DIV') 
      div2.appendChild(qube);
    else 
    div2.appendChild(qube.parentNode);
    // console.log(sudoku1[i][j]);
      }
    }
    b = b + 3
if (b > 6) {break}
  }  b = 0
a = a + 3
if (a > 6) {break}
}



}




createBoard(sudoku1)

const Solution = () => 
{
 

//creating a matrix called "copymatrix" that copy the matrix and the answers.
let copymatrix = sudoku1
for (let i = 0; i < copymatrix.length; i++)
  {
    for(let j=0;j < copymatrix[i].length; j++)
    {
      if(copymatrix[i][j] == '')
      {
        copymatrix[i][j] = {value: parseInt(document.getElementById(`${i}${j}`).value) , type: 'input'}
      }
      else 
      {
        copymatrix[i][j] = {value: copymatrix[i][j], type: 'innerHTML' }
      }
      //[{value:'6', type:'input/innerHTML'}, ...]
    }
  }

 
  isEmpty(copymatrix)

//now we are checking the Rows:
  let checkRows = 0  
  let Check =[0,0,0,0,0,0,0,0,0]
  for (let m = 0; m < copymatrix.length; m++)
  {for(let n=0 ;n < copymatrix[m].length; n++)
    {
      console.log(copymatrix[m][n]);
      Check[copymatrix[m][n].value -1] = Check[copymatrix[m][n].value-1] + 1
      // console.log(Check[copymatrix[m][n]-1]);
      if(Check[copymatrix[m][n].value-1] > 1)
        {
          for(let j=0 ; j<copymatrix[m].length; j++){
        
            if((copymatrix[m][j].value == copymatrix[m][n].value) && (copymatrix[m][j].type == 'input'))
            {
              document.getElementById(`${m}${j}`).parentNode.style.backgroundColor ="red";
//               document.getElementById(`${m}${j}`).style.backgroundColor ="red";
console.log(`checkRows ${m}${j}`);
            checkRows = checkRows + 1
              // break;
            }
          }
          // for(let n = 0; copymatrix[m][n] < Check[copymatrix[m][n]-1]; n++)
       // now we are cheacking the rows:
     // {
          //   document.getElementById(`${m}${n}`).style.backgroundColor ="red";
          // }
          // prompt("Please check your answers")
          
        }
    }
    Check =[0,0,0,0,0,0,0,0,0]

 }

//now we are checking the Column:
let checkColumns  = 0  
let c = 0
Check = [0,0,0,0,0,0,0,0,0]
while (c < 9){
  for(let m = 0 ;m < copymatrix.length; m++)
  {
    Check[copymatrix[m][c].value-1] = Check[copymatrix[m][c].value-1] + 1
    console.log(copymatrix[m][c]);
    if(Check[copymatrix[m][c].value-1] > 1)
    {
      for(let i = 0 ; i<copymatrix.length; i++)
      {
        if(copymatrix[i][c].value = copymatrix[m][c].value && copymatrix[i][c].type == 'input')
        {
          document.getElementById(`${i}${c}`).style.backgroundColor ="red";
          // break;
          console.log(`checkColumns ${i}${c}`);
          checkColumns = checkColumns + 1
        }
      }
    }
    
  } c++
  Check =[0,0,0,0,0,0,0,0,0]
}


  

//now we are checking the squers:
//not need
let a = 0, b = 0
let checkSquers = 0  
// for (let m = 0; m < copymatrix.length - 3; m + 3) {
//   for (let n = 0; n < copymatrix[m].length - 3; n + 3)
//   {
//     for (let i = a; i < a + 3; i++)
//     {
//       for(let j = b; j < b + 3; j++)
//       {
//        Check[copymatrix[i][j].value-1] = Check[copymatrix[i][j].value-1] + 1
//         // console.log(copymatrix[i][j]);
        
//         if(Check[copymatrix[i][j].value-1] > 1)
//         {
//             for(let t=0 ; t<copymatrix.length; t++)
//             {for(let h=0 ; j<copymatrix[t].length; h++)
//             // debugger
//             {
    
//               if((copymatrix[t][h].value == copymatrix[i][j].value) && (copymatrix[t][h].type == 'input'))
//               {
//                 document.getElementById(`${t}${h}`).style.backgroundColor ="red";
//   //            document.getElementById(`${m}${j}`).style.backgroundColor ="red";
// checkSquers = checkSquers + 1
// console.log(`checkSquers ${checkSquers}`);
//                 // break;
//               }
//             }
//             }
    
    
//         }
//       }
//     }
//     b = b + 3
// if (b > 6) {break}
//   }  b = 0
// a = a + 3
// if (a > 6) {break}
// }


}

const isRight = (checkRows, checkColumns) => {
if((checkRows == 0) && (checkColumns == 0))
{
  window.close("soduku1Page.html");
  window.open("welDonePage.html");
}
}

const isEmpty = (copymatrix) => {
  // console.log(`hi ! isEmpty`);
  let breakCheck = false;
  // now i want to check if the user fill al the matrix
  loop1: for (let i = 0; i < copymatrix.length; i++)
  {
  loop2:  for(let j=0;j < copymatrix[i].length; j++)
    {
      if(copymatrix[i][j].value.toString() ==  'NaN')
      {
        alert(`Please fill all the matrix`)
        breakCheck = true
        break 
      } if(breakCheck = true) break
    }
  }
}



const Clear = () => {
  let c = document.querySelectorAll(".emptyCell");
  for (i = 0; i < c.length; i++) 
  {
    c[i].style.backgroundColor = "white";
    c[i].value = "";
  }
  let b = document.querySelectorAll(".cell");
  for (i = 0; i < b.length; i++) 
  {
    b[i].style.backgroundColor = "white";
  }

}
