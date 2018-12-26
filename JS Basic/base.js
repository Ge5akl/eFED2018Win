function countChar (string, symb){
    var str = string.toLowerCase();
    var count = 0;
    var c = str.charAt(symb);
    for(i=0; i<=c.length; i++){
        count++;
    }
    return count;
}

console.log(countChar('My Random String', 'm'));
//Задача 2
function deepCompare (a, b) {
    for (let key in a) {
      if (!b.hasOwnProperty(key) || a[key] !== b[key]) {
         return false;
      }
    }
   
   return true;
 }
 console.log(deepCompare({ one: 1, two: 2 }, { one: 1, two:'2'}));
//Задача 3
function chessBoard (h, w) {
    let height = h;
    let width = w;
    let board = '';
    for (y = 0; y < height; y++) {
        for(x = 0; x < width; x++) {
            if ((x + y) % 2 === 0) {
                board += ' ';
            }else {
                board += '#';
            }
        }
        board += '\n';
    }
}
console.log(chessBoard(8, 8));
//Задача 4
function makeArray(start, end, step){
    var steps = step === undefined || step === 0 ? 1 : step;
    var arr = [],
        s = Math.abs((Math.abs(start - end) + 1) / steps);
    for (var i = 0; i < s; i++)
        arr.push(start + i * steps);
    return arr;
}
console.log(makeArray(1,10));
//Задача 5
function reverseArray(arr) {
    let i,
        result = [];

    for ( i = arr.length - 1; i >= 0; i-- ) {
        result.push(arr[i]);
    }
    return result;
}
function reverseArrayInPlace(arr) {
    let i,
        old;

    for ( i = 0; i < Math.floor(arr.length / 2); i++ ) {
        old = arr[i];
        arr[i] = arr[arr.length - (1 + i)];
        arr[arr.length - (1 + i)] = old;
    }
    return arr;
}
console.log(reverseArray([1, 2, 3, 4]));
//Задача 6

function UnionArrays(A,B)
{
    var M=A.length, N=B.length, i=0, j=0,
        C=[], k=Math.min(A[0],B[0]), D=[k];
 
    if (A[M-1]<=B[N-1]) {B[N]=B[N-1]; }
    else                { B[N]=A[M-1]; }
 
    for (var m=0; m<M+N; m++)
        { if (A[i]<=B[j]) { C[m]=A[i]; i++; }
          else            { C[m]=B[j]; j++; }
 
          if (m>0 && C[m]!=k) { D[D.length]=C[m]; k=C[m]; }
        }
 
    return D;
}
 console.log(UnionArrays([1,3],[-2,3], [1,4])); 

