import TableHead from "./TableHead";
import TableBody from "./TableBody";
import '../ComponentsStyles/table.css'

export default function Table({caption, columnNames, data, className}){
    return (
        <div className="table">
            <section className="table-header">
                <h1>{caption}</h1>
            </section>
            <section className="table-body">
                <table className={className}>
                    <TableHead columnNames={columnNames} />
                    <TableBody objs={data} columnNames={columnNames} />
                </table>
            </section>
        </div>
    );
}