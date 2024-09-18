import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './routes/LogIn.jsx';
import LoginProfesor from './routes/LogInProfesor.jsx';
import LoginAlumno from './routes/LogInAlumno.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Ruta principal
  },
  {
    path: "/login",
    element: <Login /> // Ruta para el componente de login
  },
  {
    path: "/logInProfesor",
    element: <LoginProfesor />
  },
  {
    path: "/logInAlumno",
    element: <LoginAlumno />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
