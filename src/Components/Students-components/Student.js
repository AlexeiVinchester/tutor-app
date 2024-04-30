export class Student {
    constructor(id, name, price, form){
        this.id = id;
        this.name = name;
        this.price = price;
        this.form = form;
    }
}

let startStudents = [
    new Student('1', 'Anton and Ilya', '30', '6'),
    new Student('2', 'Saveliy', '25', '6'),
    new Student('3', 'Tihon', '25', '5'),
    new Student('4', 'Diana', '25', '5'),
    new Student('5', 'Bogdana', '25', '5'),
    new Student('6', 'Vasilisa', '25', '5'),
    new Student('7', 'Kirill_Zel', '25', '6'),
    new Student('8', 'Kirill_Yan', '25', '6'),
    new Student('9', 'Darya', '25', '6'),
];
let newStr = startStudents.map(item => JSON.stringify(item)).join(' ; ');
localStorage.setItem('students', newStr)

