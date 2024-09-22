import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './routes/LogIn.jsx';
import LoginProfesor from './routes/LogInProfesor.jsx';
import LoginAlumno from './routes/LogInAlumno.jsx';
import HomeProfesor from './routes/HomeProfesor.jsx';
import HomeAlumno from './routes/HomeAlumno.jsx';
import CursoPage from './routes/CursoPage.jsx';
import ClasesPage from './routes/ClasesPage.jsx';
import ClaseEnSiPage from './routes/ClaseEnSiPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "/login",
    element: <Login /> 
  },
  {
    path: "/logInProfesor",
    element: <LoginProfesor />
  },
  {
    path: "/logInAlumno",
    element: <LoginAlumno />
  },
  {
    path: "/homeProfesor",
    element: <HomeProfesor />
  },
  {
    path: "/homeAlumno",
    element: <HomeAlumno />
  },
  {
    path: "/homeProfesor/:cursoId", 
    element: <CursoPage /> 
  },
  {
    path: "/homeProfesor/:cursoId/:moduloId", 
    element: <ClasesPage />
  },
  {
    path: "/homeProfesor/:cursoId/:moduloId/:claseId", 
    element: <ClaseEnSiPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
