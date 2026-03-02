import { useState } from "react";
import type { RecordType } from "../types/records";

const StatePage = () => {
  const [records, setRecords] = useState<RecordType[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [mode, setMode] = useState<"save" | "update">("save");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const record: RecordType = {
      id: +new Date(),
      name: (data.name as string).trim(),
      city: (data.city as string).trim(),
      age: Number(data.age),
    };

    if (!record.name || !record.city || record.age <= 0) {
      alert("Invalid Input");
      return;
    }

    // SAVE
    if (mode === "save") {
      setRecords(prev => [...prev, record]);
    }

    // UPDATE
    if (mode === "update" && selectedId !== null) {
      setRecords(prev =>
        prev.map(r =>
          r.id === selectedId
            ? { ...r, name: record.name, city: record.city, age: record.age }
            : r
        )
      );
      setMode("save");
      setSelectedId(null);
    }

    e.currentTarget.reset();
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(e.target.value);
    if (!id) return;

    setSelectedId(id);

    const user = records.find(r => r.id === id);
    if (!user) return;

    const form = document.querySelector("form") as HTMLFormElement;

    (form.elements.namedItem("name") as HTMLInputElement).value = user.name;
    (form.elements.namedItem("city") as HTMLInputElement).value = user.city;
    (form.elements.namedItem("age") as HTMLInputElement).value =
      user.age.toString();

    setMode("update");
  };

 return (
  <div>

    <h3>User Form</h3>

    {/* FORM */}
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input name="name" />
      </div>

      <div>
        <label>City:</label>
        <input name="city" />
      </div>

      <div>
        <label>Age:</label>
        <input name="age" type="number" />
      </div>

      <button type="submit">
        {mode === "save" ? "Save" : "Update"}
      </button>
    </form>

    <hr />

    {/* SELECT BY ID */}
    <div>
      <label>Select based on ID:</label>
      <select value={selectedId ?? ""} onChange={handleSelect}>
        <option value="">Select ID</option>
        {records.map(r => (
          <option key={r.id} value={r.id}>
            {r.id}
          </option>
        ))}
      </select>
    </div>

    <hr />

    {/* FILTER PANEL (UI only for now) */}
    <h3>Filters</h3>

    <div>
      <label>Select Field:</label>
      <select>
        <option>Select Field</option>
      </select>
    </div>

    <div>
      <label>Unique Values:</label>
      <select>
        <option>Select Value</option>
      </select>
    </div>

    <button>Filter</button>
    <button>All</button>

    <hr />

    {/* TABLE */}
    <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {records.map(r => (
          <tr key={r.id}>
            <td>{r.name}</td>
            <td>{r.city}</td>
            <td>{r.age}</td>
          </tr>
        ))}
      </tbody>
    </table>

  </div>
);
};

export default StatePage;