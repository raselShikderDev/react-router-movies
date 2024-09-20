/* eslint-disable no-unused-vars */
import { NavLink, useRouteError, useNavigate } from "react-router-dom"

export default function ErrorPage() {
  const err = useRouteError()
  // console.log(err)

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(-1)
    // console.log(navigate)
  }

    return (
        <div className="flex w-full h-svh justify-center items-center">
            <div className="text-center">
                {/* <h1 className="font-bold mb-1 text-8xl">{err ? err.status : "404 unknon"}</h1>
                <h3 className="font-bold mb-10">{err ? err.statusText : "not found"}</h3> */}
                <h1 className="font-bold mb-1 text-8xl">404</h1>
                <h3 className="font-bold mb-10">not found</h3>
                <NavLink className="rounded text-white bg-sky-500 py-2 px-5" to="/">
                    Home Page
          </NavLink>
          <button onClick={handleNavigate} className="rounded ml-3 text-white bg-teal-900 py-2 px-5">Previus Page</button>
            </div>
    </div>
  )
}
