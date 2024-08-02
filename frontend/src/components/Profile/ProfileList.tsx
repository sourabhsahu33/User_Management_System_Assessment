// ProfileList.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Profile {
  id: number;
  name: string;
  age: string;
  address: string;
  email: string;
  department: string;
  bio: string;
}

const ProfileList: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load profiles from local storage on initial render
    const storedProfiles = JSON.parse(localStorage.getItem('profiles') || '[]');
    setProfiles(storedProfiles);
  }, []);

  const handleCreateProfile = () => {
    const newProfile: Profile = {
      id: profiles.length > 0 ? profiles[profiles.length - 1].id + 1 : 1,
      name: 'New Profile',
      age: '',
      address: '',
      email: '',
      department: '',
      bio: '',
    };
    const updatedProfiles = [...profiles, newProfile];
    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    navigate(`/profile/edit/${newProfile.id}`);
  };

  const handleEditProfile = (id: number) => {
    navigate(`/profile/edit/${id}`);
  };

  const handleDeleteProfile = (id: number) => {
    const updatedProfiles = profiles.filter(profile => profile.id !== id);
    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Manage Profiles</h2>
      <button
        onClick={handleCreateProfile}
        className="bg-green-500 text-white px-6 py-2 rounded mb-4 hover:bg-green-600"
      >
        Create New Profile
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <div key={profile.id} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">{profile.name}</h3>
            <p className="text-sm mb-1"><strong>Age:</strong> {profile.age}</p>
            <p className="text-sm mb-1"><strong>Address:</strong> {profile.address}</p>
            <p className="text-sm mb-1"><strong>Email:</strong> {profile.email}</p>
            <p className="text-sm mb-1"><strong>Department:</strong> {profile.department}</p>
            <p className="text-sm mb-4"><strong>Bio:</strong> {profile.bio}</p>
            <div className="flex justify-between">
              <button
                onClick={() => handleEditProfile(profile.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit Profile
              </button>
              <button
                onClick={() => handleDeleteProfile(profile.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
