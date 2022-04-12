var randomNumber = Math.round(Math.random() * 500);
console.log(randomNumber)

var number = parseInt(prompt('trouvez le bon numero'));

//var counter = 1
//
//while (number != randomNumber) {
//    if (number < randomNumber) {
//        number = parseInt(prompt('c\'est plus'))
//        counter++
//    } else {
//        number = parseInt(prompt('c\'est moins'))
//        counter++
//    }
//}



for (counter = 1 ;number != randomNumber; counter++) {
    if (number < randomNumber) {
        number = parseInt(prompt('c\'est plus'))
        
    } else {
        number = parseInt(prompt('c\'est moins'))
        
    }
}
alert('congratulation! tu as utilisé ' + counter + ' tentative')