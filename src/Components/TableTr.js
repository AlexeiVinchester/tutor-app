export default function TableTr({obj, columnNames}) {
    return (
        <tr key={obj.id}>
            {
                columnNames.map(columnName => (
                    <td>{obj[columnName]}</td>
                ))
            }
        </tr>
    );
}