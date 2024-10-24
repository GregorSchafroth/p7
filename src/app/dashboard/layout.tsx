import { ReactNode } from "react"
import NavBar from "./_components/NavBar"

const layout = ({ children}: {children:ReactNode}) => {
  return (
    <div className="bg-accent/5 min-h-screen">
      <NavBar />
      <div className="container py-6">{children}</div>
    </div>
  )
}
export default layout