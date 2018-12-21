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
function deepCompare ( a, b) {
   if (a === b)
       return true;

    else return false;
}
console.log(deepCompare({ one: 1, two:'2'}, { one: 1, two:'2'}));
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
function mergeArrays(...args){
    var array = args.concat(...args);
    array.forEach(fuction(...elems) {
        var obj = {};

        for (var i = 0; i < arr.length; i++) {
            var str = args[i];
            obj[str] = true;
        }

        return Object.keys(obj);
    });
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));