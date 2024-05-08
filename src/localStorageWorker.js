/* 
    Здесь подразумевается, что значение под ключами представляет собой
    строку из объектов JSON.stringify(), разделенных ;
*/
// import Lesson from "./Components/Lessons-components/lesson";
// import { Student } from "./Components/Students-components/Student";

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

export function getLessonsForMonth(month){
    return getCurrentValue('lessons').filter(lesson => lesson.date.includes(month))
}

export function getEarnedSumForMonth(month){
    return getLessonsForMonth(month).reduce((cur, item) => +cur + +item.price, 0);
}

export function getAmountOfLessonsForMonth(month){
    return getLessonsForMonth(month).length;
}

export function getLessonsForStudentForMonth(month, student){
    return getLessonsForMonth(month).filter(lesson => lesson.name === student);
}

export function getAmountOfLessonsForStudentForMonth(month, student) {
    return getLessonsForStudentForMonth(month, student).length;
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

export function getIncomeForStudentPerMonth(month, student){
    return getLessonsForStudentForMonth(month, student)
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




