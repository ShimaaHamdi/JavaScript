// 4 method to convert string to num 
document.write('3' + 'sh  <br/> ');
document.write('3' - '3  <br/>');
document.write(Number('2') + '<br/>');
document.write(parseInt('4 SHAIMAA ') + '<br/>'); //parseint => can remove text but after number 
document.write(parseFloat('4.3') + '<br/>'); //parseint => can remove text but after number 


// number  عباره عن أوبجكت جواه حاجات كتير 
document.write(Number.MAX_VALUE + '<br/>');
document.write(Number.MAX_SAFE_INTEGER + '<br/>');
document.write(Number.MIN_VALUE + '<br/>');
document.write(Number.MIN_SAFE_INTEGER + '<br/>');
document.write(Number.isSafeInteger(9007199254740991) + '<br/>');
document.write(Number.isInteger(345634) + '<br/>'); // is value num or unnum
document.write(Number.isNaN('ahmed' * 5) + '<br/>'); 


// Math ==> Is Very Important
document.write(Math.PI + '<br/>');
document.write(Math.E); 
document.write(Math.sqrt(9) + '<br/>' );
document.write(Math.pow(3,3) + '<br/>');
document.write(Math.round(10.9) + '<br/>');
document.write(Math.floor(10.9) + '<br/>'); // بتقرب الرقم لأقرب رقم من تحت 
document.write(Math.ceil(10.1) + '<br/>'); //بتقرب الرقم لأقرب رقم من فوق 
document.write(Math.min(1,2,3,4,5,6,7,8,9,0,-1) + '<br/>'); 
document.write(Math.max(1,2,3,4,5,6,7,8,9,0,-1,89) + '<br/>');
 

// برنامج يحسب نسبة ذكاة المال 
let zakah = window.prompt();
document.write(0.025 * zakah +'EGP' + '<br/>')

// Calculate tax of product 
let product = window.prompt();
document.write( 0.14 * product +'EGP')
