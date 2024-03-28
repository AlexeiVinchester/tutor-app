export default function({ pupils }){
    return (
        <ul>
            {
              pupils.map(pupil => (
                <li key={pupil.id}>
                  Name: {pupil.name} Price: {pupil.price} Form: {pupil.form}
                </li>
              ))
            }
          </ul>
    );
}