export function setNewValue(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


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

export function getLessonsForMonth(month, year){
    return getCurrentValue('lessons').filter(lesson => lesson.date.includes(`${year}-${month}-`))
}

export function getStudentsForMonth(month, year) {
    return Array.from(new Set(
        getLessonsForMonth(month, year).map(lesson => lesson.name)
    ));
}

export function getEarnedSumForMonth(month, year){
    return getLessonsForMonth(month, year).reduce((cur, item) => +cur + +item.price, 0);
}

export function getAmountOfLessonsForMonth(month, year){
    return getLessonsForMonth(month, year).length;
}

export function getLessonsForStudentForMonth(month, year, student){
    return getLessonsForMonth(month, year).filter(lesson => lesson.name === student);
}

export function getAmountOfLessonsForStudentForMonth(month, year, student) {
    return getLessonsForStudentForMonth(month, year, student).length;
}

export function getNextIdForLessons(){
    return getFullAmountOfLessons() + 1;
}

export function getNextIdForStudents() {
    return getCurrentValue('students').length + 1;
}

export function getNextId(value){
    return value === 'lesson' ? getNextIdForLessons() : getNextIdForStudents();
}

export function getIncomeForStudentPerMonth(month, year, student){
    return getLessonsForStudentForMonth(month, year, student)
            .reduce((cur, item) => +cur + +item.price, 0);
}

// below functions for all period

export function getFullEarnedSumm() {
    return getCurrentValue('lessons').reduce((cur, item) => +cur + +item.price, 0);
}

export function getFullAmountOfLessons() {
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

export function getFullIncomePerStudent(student) {
    return getLessonsForStudent(student).reduce((cur, item) => +cur + +item.price, 0);
}


/*const task = {
    id: 0,
    text: 'To create description of code',
    done: true
}*/

//setNewValue('tasks', [task])


