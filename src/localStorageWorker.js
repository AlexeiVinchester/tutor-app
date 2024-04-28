/* 
    Здесь подразумевается, что значение под ключами представляет собой
    строку из объектов JSON.stringify(), разделенных ;
*/

export function getCurrentValue(key){
    return localStorage.getItem(key)
                       .split(' ; ')
                       .map(param => JSON.parse(param));
}

export function addValueToLocalStorage(key, value){
    let currentValue = getCurrentValue(key);
    currentValue.push(value);
    localStorage.setItem(
        key, 
        currentValue.map(param => JSON.stringify(param)).join(' ; ')   
    )
}

export function getEarnedSumm(){
    return getCurrentValue('lessons').reduce((cur, item) => +cur + +item.price, 0);
}

console.log(getEarnedSumm())

