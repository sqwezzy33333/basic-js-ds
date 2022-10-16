let arrDDD = [ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2], [ 1, 2], ['^^', 1, 2] ];
function countCats(backyard) {
   let stackT = [];
   let catsInArray;
   for (let i = 0; i < backyard.length; i++){
      for(let y = 0; y < backyard[i].length; y++){
         let indexY = backyard[i][y];
         if(indexY == '^^'){
            stackT.push(indexY);
         }

      }
   }
   catsInArray = stackT.length; 
   return catsInArray;
}

console.log(countCats(arrDDD))