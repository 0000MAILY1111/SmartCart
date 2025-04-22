import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../photos/pages/LoginPage'
import { EventosPage } from '../photos/pages/EventosPage'
import Navbar from '../photos/components/Navbar'
import { HomePage } from '../photos/pages/HomePage'
import Sidebar from '../photos/components/Sidebar'
import { CatalogoPage } from '../photos/pages/CatalogoPage'

export const HomeRouter = () => {
    return (
        <>
            <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1">
                    <Navbar />
                    <div className="container mt-3">

                        <Routes>
                            <Route path="/" element={<Navigate to="/login" />} />
                            <Route path="login" element={<LoginPage />} />
                            <Route path="home" element={<HomePage />} />
                            <Route path="events" element={<EventosPage />} />
                            <Route path="catalogo" element={<CatalogoPage />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

