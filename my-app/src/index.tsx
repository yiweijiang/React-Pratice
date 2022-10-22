import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import MenubarComponent from './component/MenubarComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hello from './component/Hello'
import Hi from './component/Hi'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(
//   <React.StrictMode>
//     <Hello />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

root.render(
    <BrowserRouter>
        <MenubarComponent />
        <Routes>
            <Route path="/" element={<Hi />} />
            <Route path="/Hello" element={<Hello />} />
        </Routes>
    </BrowserRouter>
)
reportWebVitals();