import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes, privateRoutes, adminRoutes } from './routes'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <>
      <Router>
        <Routes>
          { publicRoutes.map((publicRoute, index) => {
            const PublicLayout = publicRoute.layout;
            const PublicPage = publicRoute.component;

            return (
              <Route key={ index } path={ publicRoute.path } element={
                <PublicLayout>
                  <PublicPage />
                </PublicLayout>
              } />
            );
          })}
          { isLoggedIn && privateRoutes.map((privateRoute, index) => {
            const PrivateLayout = privateRoute.layout;
            const PrivatePage = privateRoute.component;

            return (
              <Route key={ index } path={ privateRoute.path } element={
                <PrivateLayout>
                  <PrivatePage />
                </PrivateLayout>
              } />
            );
          })}
        </Routes>
      </Router>
    </>
  )
}

export default App