const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Enter admin password');

if(message === null){
    message = 'Отменено пользователем!';
}
else if(message === ADMIN_PASSWORD){
    message = 'Добро пожаловать!';
}
else{
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
