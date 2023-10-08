let S = 1;
let D = 2;
for (let i = 3; i <= 39; i+=2) {
    S += i/D
    D*=2 
}
console.log(S.toFixed(2))
