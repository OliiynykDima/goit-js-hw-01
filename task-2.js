const total = 100;
const ordered = prompt('Сколько товаров вы хотите заказать?');

if(ordered > total){
    console.log("На складе недостаточно твоаров!");
}
else{
    console.log("Заказ оформлен, с вами свяжется менеджер");
}