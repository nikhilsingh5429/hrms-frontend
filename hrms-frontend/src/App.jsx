import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/employees")
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);

  const addEmployee = async () => {
    const res = await fetch("http://localhost:8000/api/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, role })
    });

    const newEmp = await res.json();
    setEmployees([...employees, newEmp]);
    setName("");
    setRole("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>HRMS - Employees</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Role"
        value={role}
        onChange={e => setRole(e.target.value)}
      />
      <button onClick={addEmployee}>Add</button>

      <ul>
        {employees.map(emp => (
          <li key={emp.id}>{emp.name} - {emp.role}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
