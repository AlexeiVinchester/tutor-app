import TableTr from "./TableTr";

export default function TableBody({objs, columnNames}){
    return (
        <tbody>
            {
                objs.map(obj => (
                   <TableTr obj={obj} columnNames={columnNames} />
                ))
            }
        </tbody>
    );
}