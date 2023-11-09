
let valorNumerico = 97;

for (let i = 0; i < 26; i++) {  
  let valorAlfanumerico = String.fromCharCode(valorNumerico);  
  console.log(`${valorNumerico} e ${valorAlfanumerico}`);  
  valorNumerico++;
}