

var reverse = function(x){
    let reversed = 0;
    while (x !== 0 ){
        reversed = reversed*10 + (x%10);
        x = parseInt(x /10);

    }
    return reversed;
   
    
};
const reversed = reverse(-890);
 console.log(reversed);


