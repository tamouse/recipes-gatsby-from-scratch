import React from "react"
import styled from "styled-components"
import "./layout.css"

import PageHeader from "./PageHeader"
import Sidebar from "./Sidebar"

export default ({ children }) => (
  <LayoutWrapper>
    <PageHeader />
    <SideBySide>
      <Sidebar />
      <MainContent role="main">{children}</MainContent>
    </SideBySide>
  </LayoutWrapper>
)

const LayoutWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
`

const SideBySide = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: top;
  }
`
const MainContent = styled.main`
  margin: 0 auto;
  padding: 1em;
  @media (min-width: 768px) {
    flex: 5;
  }
`

const SidebarWrapper = styled.aside`
  @media (min-width: 768px) {
    flex: 1;
  }
`
