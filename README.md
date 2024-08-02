# User Management System

This is a simple React application for managing user profiles. Users can create, edit, and delete profiles, which include fields such as name, age, address, email, department, and bio. The profiles are stored in the browser's local storage.

# Features

Create Profile: Users can create multiple profiles.

Edit Profile: Users can edit the details of any created profile.

Delete Profile: Users can delete any profile.

Responsive Design: The application is responsive and works well on both desktop and mobile devices.

Project Structure
![Screenshot 2024-08-03 003906](https://github.com/user-attachments/assets/8642c123-6e72-403d-80fe-c26801b3301d)


# My Profile App

This is a React-based application that allows users to create, edit, and delete profiles. The profiles are stored locally using `localStorage` and the UI is styled with Tailwind CSS.

# Front-end (React + TypeScript)
Directory Structure:

```plaintext
├── public/
│   ├── index.html                # Main HTML file
├── src/
│   ├── components/
│   │   ├── ProfileList.tsx        # Component to list, create, edit, and delete profiles
│   │   ├── EditProfile.tsx        # Component to edit a profile
│   ├── App.tsx                    # Main app component
│   ├── index.tsx                  # Entry point of the application
│   ├── styles/
│   │   ├── tailwind.css           # Tailwind CSS file for styling
├── package.json                   # Project dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration for Tailwind
├── README.md                      # Project documentation
```

# Back-end (Node.js + Express + TypeScript)
Directory Structure:

```
src/
|-- controllers/
|   |-- authController.ts
|   |-- userController.ts
|-- models/
|   |-- User.ts
|-- routes/
|   |-- authRoutes.ts
|   |-- userRoutes.ts
|-- middleware/
|   |-- authMiddleware.ts
|-- utils/
|   |-- validateInput.ts
|-- server.ts
```
# Setup and Run
Prerequisites
Make sure you have the following installed:

Node.js (>=14.x)
npm (>=6.x) or yarn (>=1.x)
Installation
Clone the repository:
```
git clone https://github.com/yourusername/my-profile-app.git
cd my-profile-app
```
Install dependencies:
```
npm install
```
# Running the Development Server
To start the development server, run:
```
npm start
```
The application will be available at http://localhost:3000.

Building for Production
To create a production build, run:
```
npm run build

```
# Usage
Create Profile: Click on the "Create New Profile" button to add a new profile.

Edit Profile: Click on the "Edit Profile" button in a profile card to update the profile information.

Delete Profile: Click on the "Delete Profile" button in a profile card to remove the profile.

# Contributing
Contributions are welcome! Please feel free to submit a pull request.

# License
This project is licensed under the MIT License.
```

This README file outlines the project structure, provides setup instructions, and explains how to run the application. You can commit this directly to your project. &#8203;:citation[oaicite:0]{index=0}&#8203;
```
<h1 style="text-align: center; display: flex; justify-content: center; align-items: center; height: 100vh;">
    Happy Coding! 🤝
</h1>

