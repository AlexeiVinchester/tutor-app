/* 
    Здесь подразумевается, что значение под ключами представляет собой
    строку из объектов JSON.stringify(), разделенных ;
*/

export function getCurrentValue(key) {
    return localStorage.getItem(key)
        .split(' ; ')
        .map(param => JSON.parse(param));
}

export function addValueToLocalStorage(key, value) {
    let currentValue = getCurrentValue(key);
    currentValue.push(value);
    localStorage.setItem(
        key,
        currentValue.map(param => JSON.stringify(param)).join(' ; ')
    )
}

/*
    Можно на вход подать строку 2024-04 к примеру
*/

export function getLessonsForMonth(month){
    return getCurrentValue('lessons').filter(lesson => lesson.date.includes(month))
}

export function getEarnedSumm() {
    return getCurrentValue('lessons').reduce((cur, item) => +cur + +item.price, 0);
}

export function getAmountOfLessons() {
    return getCurrentValue('lessons').length;
}

export function getLessonsForStudent(student) {
    return getCurrentValue('lessons').filter(lesson => lesson.name === student);
}

export function getAmountOfLessonsFor(student) {
    return getLessonsForStudent(student).length;
}

export function getStudents(){
    return getCurrentValue('students').map(student => student.name);
}

console.log(getLessonsForMonth('2024-04'))


