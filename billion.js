function ForaFewBillion(){
    
    var total = .01;
    for(var i = 1; i < 31; i++){
        console.log("DAY"+ i + " - total is " + total)
        total = total + total;
    }
}

ForaFewBillion();


//There is an old tale about a king who offered a servant $10,000 as a reward. The servant instead asked that for 30 days he be given an amount that would double, starting with a penny. (1 penny for the first day, 2 for the second, 4 for the third, then 8, 16, 32 pennies, and so on).

//Use for loops to answer the following:

//How much was the reward after 30 days?