import React, { useState } from 'react';
import Modal from '../../components/Modal';

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'member' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'trainer' },
  { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'admin' },
  { id: 4, name: 'Robert Black', email: 'robert@example.com', role: 'member' },
  { id: 5, name: 'Alice White', email: 'alice@example.com', role: 'trainer' },
  { id: 6, name: 'Sarah Lee', email: 'sarah@example.com', role: 'admin' },
  { id: 7, name: 'David Grey', email: 'david@example.com', role: 'member' },
  { id: 8, name: 'Emma Brown', email: 'emma@example.com', role: 'trainer' },
  { id: 9, name: 'Michael Green', email: 'michael@example.com', role: 'member' },
  { id: 10, name: 'Olivia Blue', email: 'olivia@example.com', role: 'admin' },
];

const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'member' });
  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  const usersPerPage = 5;

  const validate = (user) => {
    const newErrors = {};
    if (!user.name.trim()) newErrors.name = 'Name is required';
    else if (!/^[A-Za-z\s]+$/.test(user.name)) newErrors.name = 'Only letters allowed';

    if (!user.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(user.email)) newErrors.email = 'Invalid email format';

    return newErrors;
  };

  const handleDelete = (id) => {
    const userToDelete = users.find((u) => u.id === id);
    if (window.confirm(`Are you sure you want to delete ${userToDelete.name}?`)) {
      setUsers(users.filter((user) => user.id !== id));
      setModalContent({
        title: 'User Deleted',
        description: `User ${userToDelete.name} has been removed.`,
        rating: 5,
        reviews: [],
      });
      setShowModal(true);
    }
  };

  const handleEditClick = (user) => {
    setEditingUser({ ...user });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSave = () => {
    const validation = validate(editingUser);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setUsers(users.map((u) => (u.id === editingUser.id ? editingUser : u)));
    setEditingUser(null);
    setErrors({});
  };

  const handleAddUser = () => {
    const validation = validate(newUser);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    const newUserData = {
      ...newUser,
      id: users.length ? users[users.length - 1].id + 1 : 1,
    };
    setUsers([...users, newUserData]);
    setNewUser({ name: '', email: '', role: 'member' });
    setErrors({});

    setModalContent({
      title: 'User Added',
      description: `User ${newUserData.name} has been successfully added!`,
      rating: 5,
      reviews: [],
    });
    setShowModal(true);
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (!sortBy) return 0;
    const compareA = a[sortBy].toLowerCase();
    const compareB = b[sortBy].toLowerCase();
    return sortOrder === 'asc' ? compareA.localeCompare(compareB) : compareB.localeCompare(compareA);
  });

  const usersToDisplay = sortedUsers.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div>
      <h2>Users Management</h2>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
          <option value="all">All Roles</option>
          <option value="member">Member</option>
          <option value="trainer">Trainer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th onClick={() => {
              setSortBy('name');
              setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
            }}>Name</th>
            <th onClick={() => {
              setSortBy('email');
              setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
            }}>Email</th>
            <th onClick={() => {
              setSortBy('role');
              setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
            }}>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersToDisplay.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleEditClick(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)} style={{ marginLeft: '10px', color: 'red' }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
        <span>{currentPage} / {totalPages}</span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>

      {editingUser && (
        <div className="edit-modal">
          <h3>Edit User</h3>
          <label>
            Name:
            <input
              name="name"
              value={editingUser.name}
              onChange={handleEditChange}
              className={errors.name ? 'error' : ''}
            />
          </label>
          {errors.name && <p className="error-text">{errors.name}</p>}
          <label>
            Email:
            <input
              name="email"
              value={editingUser.email}
              onChange={handleEditChange}
              className={errors.email ? 'error' : ''}
            />
          </label>
          {errors.email && <p className="error-text">{errors.email}</p>}
          <label>
            Role:
            <select name="role" value={editingUser.role} onChange={handleEditChange}>
              <option value="member">Member</option>
              <option value="trainer">Trainer</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <div style={{ marginTop: '10px' }}>
            <button onClick={handleEditSave}>Save</button>
            <button onClick={() => setEditingUser(null)} style={{ marginLeft: '10px' }}>Cancel</button>
          </div>
        </div>
      )}

      <h3>Add New User</h3>
      <div className="edit-modal">
        <label>
          Name:
          <input
            name="name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className={errors.name ? 'error' : ''}
          />
        </label>
        {errors.name && <p className="error-text">{errors.name}</p>}
        <label>
          Email:
          <input
            name="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className={errors.email ? 'error' : ''}
          />
        </label>
        {errors.email && <p className="error-text">{errors.email}</p>}
        <label>
          Role:
          <select
            name="role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          >
            <option value="member">Member</option>
            <option value="trainer">Trainer</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <div style={{ marginTop: '10px' }}>
          <button onClick={handleAddUser}>Add User</button>
        </div>
      </div>

      {showModal && (
        <Modal
          title={modalContent.title}
          description={modalContent.description}
          rating={5}
          reviews={modalContent.reviews || []}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Users;
