import React, {useEffect, useState} from 'react'
// import { Routes, Route } from 'react-router'
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { AppHeader } from './cmps/app-header.jsx'

// Pages
import { HomePage } from './pages/home-page.jsx';
import { Login } from './pages/login.jsx';
import { Leads } from './pages/leads.jsx';
import { Signup } from './pages/signup.jsx';
import { ForgotPassword } from './pages/forgot-password.jsx';
import { ScanPage } from './pages/scan-page.jsx';
import { ProductPage } from './pages/product-page.jsx';
import { ProductAddPage } from './pages/product-add.jsx';
import { InviteFriendsPage } from './pages/invite-friends.jsx';
import { BenefitsPage } from './pages/benefits.jsx';
import { UserDetails } from './pages/user-details'
import { UserUpdate } from './pages/user-update'
import { SearchGarbage } from './pages/search-garbage'

import { AppFooter } from './cmps/app-footer'
import {dbService } from './services/db.service.js'

// TODO: explain about provider and store
import { Provider } from 'react-redux';
import { store } from './store/store.js';


export function RootCmp() {



    return (
        <Provider store={store}>
            <Router>
                <div className="app main-layout">
                    <AppHeader />
                    <main className='app-main-container full'>
                        <Routes>
                            <Route element={<HomePage />} path="/" />
                            <Route element={<UserDetails />} path="/user" />
                            <Route element={<UserUpdate />} path="/user-update" />
                            <Route element={<Leads />} path="/leads" />
                            <Route element={<SearchGarbage />} path="/search-garbage" />
                            <Route element={<Login />} path="/login" />
                            <Route element={<Signup />} path="/signup" />
                            <Route element={<ForgotPassword />} path="/forgot-password" />
                            <Route element={<ScanPage />} path="/scan" />
                            <Route element={<ProductPage />} path="/products" />
                            <Route element={<ProductAddPage />} path="/add-product" />
                            <Route element={<InviteFriendsPage />} path="/invite-friends" />
                            <Route element={<BenefitsPage />} path="/benefits" />

                        </Routes>
                    </main>
                    <AppFooter />
                </div>
            </Router>
        </Provider>
    )
}