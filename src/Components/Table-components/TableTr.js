import { useId } from "react";

export default function TableTr({obj, columnNames}) {
    return (
        <tr key={obj.id}>
            {
                columnNames.map(columnName => (
                    <Td obj={obj} columnName={columnName} />
                ))
            }
        </tr>
    );
}

function Td({obj, columnName}) {
    const key = useId();
    return (
        <td key={key} className={`td-${columnName}`} >{obj[columnName]}</td>
    );
}