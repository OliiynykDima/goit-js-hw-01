let country = prompt('Введите страну для доставки');
country = country.toLowerCase();

switch (country) {
    case 'китай':  // if (x === 'value1')
        alert('Доставка в китай будет стоить 100 кредитов')
        break;

    case 'чили':  // if (x === 'value1')
        alert('Доставка в китай будет стоить 100 кредитов')
        break;

    case 'австралия':  // if (x === 'value1')
        alert('Доставка в китай будет стоить 100 кредитов')
        break;

    case 'индия':  // if (x === 'value1')
        alert('Доставка в китай будет стоить 100 кредитов')
        break;

    case 'ямайка':  // if (x === 'value1')
        alert('Доставка в китай будет стоить 100 кредитов')
        break;
    default:
        alert('В вашей стране доставка не доступна');
}