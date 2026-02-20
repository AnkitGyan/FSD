import React, { useState, useEffect } from "react";

const UserForm = ({ addUser, editUser, updateUser }) => {
  const [user, setUser] = useState({
    name: "",
    contact: "",
    email: "",
  });

  useEffect(() => {
    if (editUser) {
      setUser(editUser);
    }
  }, [editUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name || !user.contact || !user.email) {
      alert("All fields are required");
      return;
    }

    if (editUser) {
      updateUser(user);
    } else {
      addUser(user);
    }

    setUser({ name: "", contact: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4">
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <input
            type="text"
            name="contact"
            className="form-control"
            placeholder="Contact"
            value={user.contact}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="btn btn-primary mt-3">
        {editUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;