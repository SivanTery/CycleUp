import React from 'react'
// import { Routes, Route } from 'react-router'
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { AppHeader } from './cmps/app-header.jsx'
import { HomePage } from './pages/home-page.jsx';
import { ScanPage } from './pages/scan-page.jsx';
import { ProductPage } from './pages/product-page.jsx';
import { ProductAddPage } from './pages/product-add.jsx';

import { AppFooter } from './cmps/app-footer'

// TODO: explain about provider and store
import { Provider } from 'react-redux';
import { store } from './store/store.js';

// import { UserDetails } from './pages/user-details'

export function RootCmp() {

    return (
        <Provider store={store}>
            <Router>
                <div className="app main-layout">
                    <AppHeader />
                    <main className='app-main-container full'>
                        <Routes>
                            <Route element={<HomePage />} path="/" />
                            <Route element={<ScanPage />} path="/scan" />
                            <Route element={<ProductPage />} path="/products" />
                            <Route element={<ProductAddPage />} path="/add-product" />
                        </Routes>
                    </main>
                    <AppFooter />
                </div>
            </Router>
        </Provider>
    )
}


