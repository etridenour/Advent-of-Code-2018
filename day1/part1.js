const fs = require('fs');


fs.readFile('./freq.txt', 'utf8', (err, data) => {
    if (err) throw err;

    var sum = 0

    for(let num of data.split('\n')){
        let change = parseInt(num, 10)
        sum += change
    }

    console.log(sum)
});


