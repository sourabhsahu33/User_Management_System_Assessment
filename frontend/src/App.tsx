import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import ProfileList from './components/Profile/ProfileList';
import UserDirectory from './components/Users/UserDirectory';
import UserProfile from './components/Users/UserProfile';
import HomePage from './components/HomePage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profiles" element={<ProfileList />} />
        <Route path="/profile/edit/:id" element={<EditProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/users" element={<UserDirectory />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
