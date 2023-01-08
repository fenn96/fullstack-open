const Person = ({ person }) => {
    return (
        <>
            <div key={person.id}>{person.name} {person.number}</div>
            <input type="hidden" value={person.id} />
        </>
    )
}

export default Person