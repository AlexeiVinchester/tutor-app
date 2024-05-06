export default class Lesson {
    constructor(id, name, price, date){
        this.id = id;
        this.name = name;
        this.price = price;
        this.date = date;
    }
}



let startLessons = [
    new Lesson('1', 'Anton and Ilya', '30', '2024-04-01'),
    new Lesson('2', 'Diana', '25', '2024-04-01'),
    new Lesson('3', 'Saveliy', '25', '2024-04-02'),
    new Lesson('4', 'Tihon', '40', '2024-04-02'),
    new Lesson('5', 'Bogdana', '25', '2024-04-02'),
    new Lesson('6', 'Diana', '25', '2024-04-03'),
    new Lesson('7', 'Darya', '25', '2024-04-04'),
    new Lesson('8', 'Kirill_Zel', '25', '2024-04-04'),
    new Lesson('9', 'Diana', '25', '2024-04-04'),
    new Lesson('10', 'Bogdana', '25', '2024-04-04'),
    new Lesson('11', 'Tihon', '40', '2024-04-05'),
    new Lesson('12', 'Kirill_Yan', '25', '2024-04-05'),
    new Lesson('13', 'Anton and Ilya', '30', '2024-04-08'),
    new Lesson('14', 'Diana', '25', '2024-04-08'),
    new Lesson('15', 'Saveliy', '25', '2024-04-09'),
    new Lesson('16', 'Tihon', '40', '2024-04-09'),
    new Lesson('17', 'Vasilisa', '25', '2024-04-09'),
    new Lesson('18', 'Kirill_Zel', '25', '2024-04-10'),
    new Lesson('19', 'Vasilisa', '25', '2024-04-10'),
    new Lesson('20', 'Diana', '25', '2024-04-10'),
    new Lesson('21', 'Darya', '25', '2024-04-11'),
    new Lesson('22', 'Diana', '25', '2024-04-11'),
    new Lesson('23', 'Kirill_Yan', '25', '2024-04-12'),
    new Lesson('24', 'Anton and Ilya', '30', '2024-04-15'),
    new Lesson('25', 'Diana', '25', '2024-04-15'),
    new Lesson('26', 'Tihon', '40', '2024-04-16'),
    new Lesson('27', 'Saveliy', '25', '2024-04-16'),
    new Lesson('28', 'Vasilisa', '25', '2024-04-16'),
    new Lesson('29', 'Bogdana', '25', '2024-04-16'),
    new Lesson('30', 'Kirill_Zel', '25', '2024-04-17'),
    new Lesson('31', 'Kirill_Yan', '25', '2024-04-17'),
    new Lesson('32', 'Vasilisa', '25', '2024-04-17'),
    new Lesson('33', 'Diana', '25', '2024-04-17'),
    new Lesson('34', 'Darya', '25', '2024-04-18'),
    new Lesson('35', 'Diana', '25', '2024-04-18'),
    new Lesson('36', 'Bogdana', '25', '2024-04-18'),
    new Lesson('37', 'Tihon', '40', '2024-04-19'),
    new Lesson('38', 'Anton and Ilya', '30', '2024-04-22'),
    new Lesson('39', 'Tihon', '40', '2024-04-23'),
    new Lesson('40', 'Vasilisa', '25', '2024-04-23'),
    new Lesson('41', 'Bogdana', '25', '2024-04-23'),
    new Lesson('42', 'Kirill_Zel', '25', '2024-04-24'),
    new Lesson('43', 'Kirill_Yan', '25', '2024-04-24'),
    new Lesson('44', 'Darya', '25', '2024-04-25'),
    new Lesson('45', 'Vasilisa', '25', '2024-04-25'),
    new Lesson('46', 'Vasilisa', '25', '2024-04-28'),
    new Lesson('47', 'Anton and Ilya', '30', '2024-04-29'),
    new Lesson('48', 'Diana', '25', '2024-04-29'),
    new Lesson('49', 'Saveliy', '25', '2024-04-30'),
    new Lesson('50', 'Vasilisa', '25', '2024-04-30'),
    new Lesson('51', 'Bogdana', '25', '2024-04-30'),
    new Lesson('52', 'Diana', '25', '2024-04-30'),
];
let newStr = startLessons.map(item => JSON.stringify(item)).join(' ; ');
localStorage.setItem('lessons', newStr)



