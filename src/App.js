import React from "react";
import Header from "./Component/Header";
import Users from "./Component/Users";
import Team from "./Component/Team";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Toaster />
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/team" element={<Team />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
