export default function TableHead({ columnNames }){
    return (
        <thead>
            <tr>
                {
                    columnNames.map((columnName, index) => (
                        <th key={index}>{columnName}</th>
                    ))
                }
            </tr>
        </thead>
    );
}