let credits = 23580;
let pricePerDroid = 300;
let wantToBuy = prompt('Какое количество дроидов, вы хотите купить?')
let totalPrice = wantToBuy * pricePerDroid;

if(wantToBuy === null){
    console.log('Отменено пользователем!');
}
else if(totalPrice < credits){
    console.log(totalPrice);
    console.log(`Вы купили ${wantToBuy} дроидов, на счету осталось ${(credits - totalPrice).toFixed(0)} кредитов.`);
}
else if(wantToBuy / 300 > credits){
    console.log('Недостаточно средств на счету!');
}
