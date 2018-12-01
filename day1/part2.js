const fs = require('fs');


// fs.readFile('./freq.txt', 'utf8', (err, data) => {
//     if (err) throw err;

//     var sum = 0
//     var sumArray = [0];
//     var check = false

   
//         for(let num of data.split('\n')){
//             let change = parseInt(num, 10)
//             sum += change
//             sumArray.push(sum);
//         }

//         checkForDoubles(sumArray);
  

//     function checkForDoubles(a) {
//         var counts = [];
//         for(var i = 0; i <= a.length; i++) {
//             if(counts[a[i]] === undefined) {
//                 counts[a[i]] = 1;
//             } else {
//                 console.log('Found: ' + a[i]);
//                 check = true
//             }
//         }
//     }
// });


fs.readFile('./freq.txt', 'utf8', (err, data) => {
var val = 0;
    var found = {};
    var done = false;
    while(!done) {
        for(let line of data.split('\n')) {
            var change = parseInt(line, 10);
            val += change;
            if(found[val]) {
                console.log(val);
                done = true;
                break;
            }
            else {
                found[val] = true;
            }
        }
    }
})