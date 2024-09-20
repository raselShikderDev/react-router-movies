
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact, { getContactFormData } from "./pages/Contact";
import Movie from "./pages/Movie";
import AppLayout from "./component/Layout/AppLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import { moviesApi } from "./api/MoviesApi";
import MovieDetail from "./component/UI/MovieDetail";
import { movieDetailsData } from "./api/MovieDetailsData";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
    
        {
          path: "/about",
          element: <About/>
        },
    
        {
          path: "/contact",
          element: <Contact />,
          action: getContactFormData
        },
    
        {
          path: "/movie",
          element: <Movie />,
          loader: moviesApi,
        },

        {
          path: "/movie/:movieDetails",
          element: <MovieDetail />,
          loader: movieDetailsData,
        },

        {
          path: "/signin",
          element: <SignIn/>
        },

        {
          path: "/signup",
          element: <SignUp/>
        },
      ]
    },
  ])
  
  return <RouterProvider router={router}/>
}

export default App;
