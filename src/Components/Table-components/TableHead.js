export default function TableHead({ columnNames }){
    return (
        <thead>
            <tr>
                {
                    columnNames.map(columnName => (
                        <th>{columnName}</th>
                    ))
                }
            </tr>
        </thead>
    );
}