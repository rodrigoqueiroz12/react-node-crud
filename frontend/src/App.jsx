import { Outlet } from "react-router-dom"
import Main from "./layout/Main"

const App = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  )
}

export default App
