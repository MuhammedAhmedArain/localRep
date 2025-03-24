import { useState } from "react";

export default function MultiInputForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");


    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            
            if (!email.includes("@")) {
                setError("Invalid email address");
              } else {
                setError("");
                alert(`Name is ${name}, Email is ${email}`);
              }

            
        }}>
                   
            <label> Name : 
            <input type="text" name ="name" value={name} onChange={(e)=>setName(e.target.value)} />
            </label>
            <br /><br />
            <label> Email :        
            <input type="email" name ="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <br /><br />
            {error && <p style={{ color: "black" }}>{error}</p>}
            <button type="submit">Submit</button><br /><br />
        
        </form>
    )
}

export function CheckboxForm(){
    const [isChecked, setChacked] = useState(false);
    const [gender, setGender]= useState(false)

    return (

        <form>
            <label >
            <input type="checkbox" checked={isChecked} onChange={()=>setChacked(!isChecked)}/>
            
        Accept terms and Conditions
            </label>
            <p>{isChecked ? "Accepted" : "Not Accepted"}</p>

            <label htmlFor="">
                <input type="radio" value ="Male" checked={gender === "Male"} onChange={(e)=>setGender(e.target.value)}/>
                Male
            </label>
            <label htmlFor="">
                <input type="radio" value ="Female" checked={gender === "Female"} onChange={(e)=>setGender(e.target.value)}/>
                Female
            </label>
        
        </form>    
    
    )
}

export function DropDown(){
    const[selected,setSelected] = useState("");

    return(
        <form>
            <label htmlFor="">
                Choose Your Country
                <select value={selected} onChange={(e)=>setSelected(e.target.value)}>
                    <option value="">Select Your Country</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Sri Lanka">Sri Lanka</option>

                </select>
            </label>
        </form>
    )
}