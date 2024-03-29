import LessonTr from "./LessonTr";

export default function LessonsTable({ lessons }){

    return (
        <table>
            <caption>Lessons</caption>
            <thead>
                <tr>
                    <th>ID</th><th>Name</th><th>Date</th><th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    lessons.map(lesson => (
                        <LessonTr 
                            number={lesson.id} 
                            name={lesson.name}
                            date={lesson.date} 
                            price={lesson.price}
                        />
                    ))
                }
                
            </tbody>
        </table>
    );
}