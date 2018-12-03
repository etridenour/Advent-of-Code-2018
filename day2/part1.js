const fs = require('fs');

fs.readFile('./boxIds.txt', 'utf8', (err, data) => {
    if (err) throw err;

    var sum2 = 0;
    var sum3 = 0;
    
    var array = data.split('\n');
    for(let id of array){
        
        var charMap = {};
        for (let char of id){
            if(!charMap[char]){
                charMap[char] = 1;
            } else{
                charMap[char]++;
            }
        }

        if(Object.values(charMap).includes(2)){
            sum2 += 1
        } 

        if(Object.values(charMap).includes(3)){
            sum3 += 1
        }
    }
    console.log(sum2, sum3)
    var checksum = sum2 * sum3

    console.log(checksum)
});


