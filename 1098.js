let I = 0, J = 1

while (I <= 2) {

  for (let A = 0; A <= 2; A++) {

        if (I == 0 || I == 1 || I >= 1.9) {

              console.log(`I=${Math.round(I)} J=${Math.round(J)}`)

        }else{

              console.log(`I=${I.toFixed(1)} J=${J.toFixed(1)}`)

        }

        J++

  }

  I += 0.2

  J += 0.2 - 3-0
}
