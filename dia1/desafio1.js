console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );

//reescrever os códigos abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido sem erro: 
let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (1 == '1'){
    console.log("As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes"); 

}else{
    console.log ("As variáveis numeroUm e stringUm não tem o mesmo valor");
}

if (30 === '30') {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');

  } else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');
  }

  if (10 == "10") {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes');

  } else {
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor');
  }