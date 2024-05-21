import { getStudents } from "../../localStorageWorker";

export const months = {
    January: '01',
    February: '02',
    March: '03',
    April: '04',
    May: '05',
    June: '06',
    July: '07',
    August: '08',
    September: '09',
    October: '10',
    November: '11',
    December: '12'
};

export const currentMonth = Object.keys(months)[new Date().getMonth()];
export const currentYear = String(new Date().getFullYear());
export const students = getStudents();
export const years = ['2023', '2024'];
export const fieldsValuesForLessons = ['id', 'name', 'date', 'price'];