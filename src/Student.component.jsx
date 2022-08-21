import {useState} from 'react'

function Student(){
    const [firstName,setFirstName] = useState("N/A")
    const [lastName,setLastName] = useState("N/A")
    const [age,setAge] = useState("N/A")
    return(
        <div>
            <h2>Student:</h2>
            <h3>First Name:{firstName}</h3>
            <h3>Last Name:{lastName}</h3>
            <h3>Age:{age}</h3>
        </div>
    )
}

export default Student;