import React, { useState } from "react";
import "./UserManagement.css";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    contact: "",
    email: "",
    designation: "",
    company: "",
    address: "",
  });
  const [searchId, setSearchId] = useState("");
  const [editing, setEditing] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = () => {
    if (!form.id) return;
    setUsers([...users, form]);
    resetForm();
  };

  const handleUpdate = () => {
    setUsers(users.map((u) => (u.id === form.id ? form : u)));
    setEditing(false);
    resetForm();
  };

  const handleDelete = (id) =>
    setUsers(users.filter((u) => u.id !== id));

  const handleEdit = (user) => {
    setForm(user);
    setEditing(true);
  };

  const resetForm = () => {
    setForm({
      id: "",
      name: "",
      contact: "",
      email: "",
      designation: "",
      company: "",
      address: "",
    });
  };

  const filteredUsers = searchId
    ? users.filter((u) => u.id === searchId)
    : users;

  return (
    <div className="dashboard">
      <div className="wrapper">

        <div className="header">
          <div>
            <h1>User Directory</h1>
          </div>
          <input
            className="search"
            placeholder="Search by ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
        </div>

        <div className="form-card">
          <div className="form-grid">
            <input name="id" value={form.id} onChange={handleChange} placeholder="User ID" disabled={editing}/>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name"/>
            <input name="contact" value={form.contact} onChange={handleChange} placeholder="Contact"/>
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email"/>
            <input name="designation" value={form.designation} onChange={handleChange} placeholder="Designation"/>
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company"/>
            <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="full"/>
          </div>

          <div className="button-row">
            {!editing ? (
              <button className="btn primary" onClick={handleAdd}>Add User</button>
            ) : (
              <button className="btn update" onClick={handleUpdate}>Update</button>
            )}
            <button className="btn outline" onClick={resetForm}>Clear</button>
          </div>
        </div>

        <div className="cards-container">
          {filteredUsers.length === 0 ? (
            <div className="empty">No users available</div>
          ) : (
            filteredUsers.map((u) => (
              <div className="user-card" key={u.id}>
                <div className="card-header">
                  <h3>{u.name}</h3>
                  <span className="badge">{u.designation}</span>
                </div>

                <div className="card-body">
                  <p><strong>ID:</strong> {u.id}</p>
                  <p><strong>Email:</strong> {u.email}</p>
                  <p><strong>Contact:</strong> {u.contact}</p>
                  <p><strong>Company:</strong> {u.company}</p>
                  <p><strong>Address:</strong> {u.address}</p>
                </div>

                <div className="card-actions">
                  <button className="link" onClick={() => handleEdit(u)}>Edit</button>
                  <button className="link danger" onClick={() => handleDelete(u.id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}