let j =7;
let y = 5;
let redutor = 0;
for (let i = 1; i <= 9; i+=2) {    
    for (let ind = 1; ind <= 3; ind++) {
        console.log("I=" + i + " J=" + (j-redutor))
        redutor= redutor+1;       
    }
    j +=2;
    y +=2; 
    redutor = redutor -3;   
}