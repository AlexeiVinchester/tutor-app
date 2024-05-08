import TableTr from "./TableTr";

export default function TableBody({objs, columnNames}){
    return (
        <tbody className="table-body">
            {
                objs.map(obj => (
                   <TableTr key={obj.id} obj={obj} columnNames={columnNames} />
                ))
            }
        </tbody>
    );
}