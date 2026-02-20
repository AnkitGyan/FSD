import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import SearchBar from "./components/Searchbar";

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [searchId, setSearchId] = useState("");

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    setEditUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const searchedUser = searchId
    ? users.filter((user) => user.id.toString().includes(searchId))
    : users;

  return (
    <div>
      <h2 className="text-center mb-4">User Management System</h2>

      <UserForm
        addUser={addUser}
        editUser={editUser}
        updateUser={updateUser}
      />

      <SearchBar searchId={searchId} setSearchId={setSearchId} />

      <UserTable
        users={searchedUser}
        deleteUser={deleteUser}
        setEditUser={setEditUser}
      />
    </div>
  );
}

export default App;