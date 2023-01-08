const Person = ({ person, onClick }) => {
    return (
        <>
            <div key={person.id}>{person.name} {person.number} <button onClick={onClick} value={person.id}>delete</button> </div>
        </>
    )
}

export default Person