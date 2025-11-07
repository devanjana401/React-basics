import React from 'react'

const BasicFc = () => {
    const person = {
        name: 'Anjana',
        age: 23,
        is_student: 'yes'
    }
    return (
        <div>
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <h3>{person.is_student}</h3>
        </div>
    )
}

export default BasicFc
