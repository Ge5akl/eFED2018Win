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

// Задача 7 Every Some

function every(arg, func) {
    for(var i=0; i < arg; i++) {
        if (!func(arg[i])) 
        return false;
    }
    return true;
}
function some(arg, func) {
    for(var i=0; i < arg; i++) {
        if (func(arg[i])) 
        return true;
    }
    return false;
}

onsole.log(every([1, 4, NaN, 6], Number.isNaN));
console.log(every([NaN, NaN], Number.isNaN));
console.log(some([1, 2, 6], Number.isNaN));
console.log(some([1, 4, NaN, 6], Number.isNaN));

// Задача 8 Повтор

function multiplyOrThrow(a, b) {
    if (Math.random() < 0.5) {
      return a * b;
    } else {
      throw "MultiplicatorUnitFailure";
    }
  }
  function makeAnotherTry(a, b) {
    try {
      return multiplyOrThrow(a, b);
    } catch (e) {
      console.log("Ошибка!");
      return makeAnotherTry(a, b);
    }
  }
  
// Задача 9 

function replaceQuotes(string) {
    var text = string;
    var result = text.replace((/(\b'\b)|'/g), (p0, p1) => p1 ? "'" : '"');
}

console.log(replaceQuotes(result(“I’m the ‘hero’”)))

//Задача 10
function findNumbers(array) {
    var numbersArray = [];
    for (var i = 0; i < array.length; i++) {
        if (isNumber(array[i]))
            numbersArray.push(array[i]);
    }  return numbersArray;}
    function isNumber(value) {
    if (value == ".")
        return false;
    var regExp = /^[+-]?[0-9]*[.]?[0-9]*([eE][+-]?[0-9]*)?$/;
    return !!regExp.exec(value);
}

//Задача 11
function getNames (date){
    var months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
        'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    var weekDays = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
    var day = date.getDay();
    var month = date.getMonth();
    alert(months[month] + ',' + weekDays[day]);
}
console.log(getNames(new Date()));

//Задача 12
function getDifferenceInYears(startDate, finishDate) {

    var differenceInDays = (finishDate - startDate) / (24  3600  1000);
    var differenceInYears = Math.round((10 * differenceInDays) / 365) / 10;
    return differenceInYears;
}