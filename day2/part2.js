const fs = require('fs');

fs.readFile('./boxIds.txt', 'utf8', (err, data) => {
    if (err) throw err;
    
    var array = data.split('\n');

    for(let x = 0; x < array.length; x++){
    
        for(let y = 1; y < array.length; y++){
        
            let similar = '';
            let different = 0;

            for(let z = 0; z < array[x].length; z++){
                if(array[x][z] === array[y][z]){
                    similar += array[x][z];
                } else {
                    different++;
                    if(different > 1){
                        break;
                    }
                }
            }
            if(different === 1){
                console.log(similar)
            }
        }
    }
});