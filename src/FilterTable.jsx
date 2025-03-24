import { useState } from "react";

export default function FilterTableData() {
  const [nameSearch, setNameSearch] = useState("");    
  const [ageSearch, setAgeSearch] = useState(""); // Keep it empty initially
  const [selecteCity, setSelectedCity] = useState("");
  const users = [
    { name: "Ali", age: 25, city: "Karachi" },
    { name: "Sara", age: 18, city: "Lahore" },
    { name: "John", age: 30, city: "Islamabad" },
    { name: "Aisha", age: 17, city: "Quetta" },
  ];

  // Filter the users based on both Name and Age
  const filteredUsers = users.filter(user => 
    (user.name.toLowerCase().includes(nameSearch.toLowerCase()) || nameSearch==="") && 
    (ageSearch === "" || user.age === Number(ageSearch)) && (selecteCity === "" || user.city === selecteCity)// Age filter should only apply if ageSearch is not empty
  );

  return (
    <div>
      <h1>Filter Table Data</h1>

      {/* Input Fields for Search */}
      <input  
        type="text" placeholder="Search by Name" value={nameSearch} onChange={(e) => setNameSearch(e.target.value)}/>
      
      <input type="number" placeholder="Search by Age" value={ageSearch} onChange={(e) => setAgeSearch(e.target.value)}/>
       
        <label htmlFor="">
            <select  value={selecteCity} onChange={(e) => setSelectedCity(e.target.value)}>
                <option value="">Select Your City</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Lahore">Lahore</option>
                <option value="Quetta">Quetta</option>
                <option value="Sukkur">Sukkur</option>
            </select>
        </label>
      {/* Table Displaying Filtered Data */}
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
