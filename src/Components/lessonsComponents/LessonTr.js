export default function LessonTr({ number, name, date, price}){
    return (
        <tr key={number}>
            <td>{number}</td>
            <td>{name}</td>
            <td>{date}</td>
            <td>{price}</td>
        </tr>
    );
}