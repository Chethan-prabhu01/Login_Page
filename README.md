# Modern Two-Panel Login Screen in React

This repository contains the source code for a stylish, responsive, and feature-rich login screen component built with React. The design features a modern two-panel layout with an inspirational quote on one side and a clean, user-friendly login form on the other. This project was developed without any external CSS frameworks like Tailwind, using only CSS-in-JS for all styling.



---

## ✨ Features

* **Visually Stunning Design:** A beautiful two-panel layout that is both modern and engaging.

* **Fully Responsive:** Adapts seamlessly from large desktop screens to mobile devices. On smaller screens, the panels stack vertically for optimal user experience.

* **Interactive Form:**

  * **Email & Password Validation:** Real-time checks for valid email formats and password length requirements.

  * **Show/Hide Password:** A toggle to improve password entry accuracy.

  * **Social Login:** Includes a "Sign in with Google" option.

  * **Standard Links:** "Remember Me," "Forgot Password," and "Sign Up" functionalities are included.

* **Zero Dependencies on CSS Frameworks:** All styling is self-contained within the component using CSS-in-JS, making it easy to integrate into any project.

* **Custom Fonts:** Utilizes "Playfair Display" for headings and "Inter" for body text, loaded directly from Google Fonts.

## 🛠️ Tech Stack

* **React:** The core of the application is built using React with functional components and hooks (`useState`, `useEffect`).

* **CSS-in-JS:** All styling is managed directly within the JavaScript component file for encapsulation and modularity.

* **JavaScript (ES6+):** Modern JavaScript syntax is used throughout the project.

## 🚀 Getting Started

To run this component in your local development environment, you can integrate it into any existing or new React project (like one created with `create-react-app` or `Vite`).

1. **Clone the repository (optional) or download the `LoginScreen.jsx` file.**

2. **Place the `LoginScreen.jsx` file into your project's `src/components` directory.**

3. **Place the `bg_image.jpg` in the `public` folder of your React project.**

4. **Import and use the component in your main `App.js` or another parent component:**


import React from 'react';
import LoginScreen from './components/LoginScreen';

function App() {
return (
<div>
<LoginScreen />
</div>
);
}

export default App;


5. **Install dependencies and run the project:**


npm install
npm start


This project serves as an excellent template for building sophisticated and aesthetically pleasing authentication pages for modern web applications.
