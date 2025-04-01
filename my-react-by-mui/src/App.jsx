import React from "react"
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyPageA from "./views/MyPageA"
import MyPageB from "./views/MyPageB"


function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyPageA />} />
          <Route path="/mypagea" element={<MyPageB />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
