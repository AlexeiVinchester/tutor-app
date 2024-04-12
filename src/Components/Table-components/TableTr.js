export default function TableTr({obj, columnNames}) {
    return (
        <tr key={obj.id}>
            {
                columnNames.map(columnName => (
                    <td className={`td-${columnName}`} >{obj[columnName]}</td>
                ))
            }
        </tr>
    );
}