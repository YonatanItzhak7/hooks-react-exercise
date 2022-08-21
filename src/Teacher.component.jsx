import {useState} from 'react'
import Course from './Course.component'
function Teacher({Obj}){
const [firstName,setFirstName] = useState(Obj.firstName)
const [lastName,setLastName] = useState(Obj.lastName)
function ChangeFirstName(){
    setFirstName("Yonatan")
}
function ChangeLastName(){
    setLastName("Itzhak")
}
function ChangeToUpperCase(){
    setFirstName(firstName.toUpperCase())
    setLastName(lastName.toUpperCase())
}
return (
    <div>
        <h1>{firstName},{lastName}</h1>
        <button onClick={ChangeFirstName}>Change First Name</button>
        <button onClick={ChangeLastName}>Change Last Name</button>
         <button onClick={ChangeToUpperCase}>Upper Case</button>
    </div>
)
}

export default Teacher;