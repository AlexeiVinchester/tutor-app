export default class Lesson {
    constructor(id, name, price, date){
        this.id = id;
        this.name = name;
        this.price = price;
        this.date = date;
    }
}
/*let startLessons = [
    new Lesson('1', 'Anton and Ilya', '30', '2024-04-01'),
    new Lesson('2', 'Diana', '25', '2024-04-01')
];
let newStr = startLessons.map(item => JSON.stringify(item)).join(' ; ');
localStorage.setItem('lessons', newStr)

console.log(localStorage.getItem('lessons'));*/

