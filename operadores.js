// Operadores Aritméticos


a = 3;
b = 2;

soma = a + b;

console.log(soma);

nome = 'Eduardo'
sobrenome = 'Lima'

msg = nome + ' ' + sobrenome;

console.log(msg);

subtracao = a - b;

console.log(subtracao);

multiplicacao = a * b;

console.log(multiplicacao);

divisao = a / b;

console.log(divisao);

resto = b % a;

console.log(resto);

exponenciacao = a ** b;

console.log(exponenciacao);


// Operadores de Atribuição

// =

let cor = 'verde';
console.log(cor);

// *=

let num = 2;

// num *= 2; ====> num = num * 2;
num = num * 2;

console.log(num);


// **=

// num **= 2; ====> num = num ** 2;

let num1 = 2;

num1 **= 2;

console.log(num1);


// /=

// num /= 2; ====> num = num / 2;

let num2 = 2;

num2 /= 2;

console.log(num2);


// +=

// num += 2; ====> num = num + 2;

let num3 = 2;

num3 += 2;

console.log(num3);

// -=   

// num -= 2; ====> num = num - 2;   

let num4 = 2;

num4 -= 2;      

console.log(num4);

// Operadores relacionais


let x = 2;

let y = 3;

let z = '2';

console.log(x > y);

console.log(x < y);

console.log(x == y);

console.log(x != y);

console.log(x == z);

console.log(x === z);

console.log(x !== z);

// operador negação - not - !

let conectado = true;

conectado = !conectado;

console.log('conectado: ' + conectado);

console.log('conectado: ' + !conectado);


// Operadores lógicos binários

let a1 = 2;
let b1 = 3;
let c1 = 2;
let d1 = 3;

// && - e - and
console.log((a1 > b1)&&(c1 > d1));
console.log((a1 < b1)&&(c1 < d1));

// || - ou - or
console.log((a1 > b1)||(c1 < d1));
console.log((a1 > b1)||(c1 > d1));

//Operador incremento e decremento

let x1 = 2;

a2 = ++x1; // ====> x1 = x1 + 1;

console.log(a2)

let x2 = 2;

a3 = --x2; // ====> x1 = x1 - 1;

console.log(a3)


let ab = 2;

cd = ab++; // ====> ab = ab + 1;

console.log(cd)
console.log(ab)


let ef = 2;

gh = ef++; // ====> ef = ef + 1;

console.log(ef)
console.log(gh)