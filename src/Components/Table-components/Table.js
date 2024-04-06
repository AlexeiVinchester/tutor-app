import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function Table({caption, columnNames, data}){
    return (
        <table>
            <caption>{caption}</caption>
            <TableHead columnNames={columnNames} />
            <TableBody objs={data} columnNames={columnNames} />
        </table>
    );
}