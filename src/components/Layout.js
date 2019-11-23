import React from "react"
import PageHeader from "./PageHeader"
import Sidebar from "./Sidebar"

export default ({ children }) => (
  <>
    <PageHeader />
    <Sidebar />
    <main role="main">{children}</main>
  </>
)
