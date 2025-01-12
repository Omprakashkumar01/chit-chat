import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectRoute from './components/Styles/ProtectRoute';
import { MainLoaders } from './components/layout/Loaders';

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chats = lazy(() => import("./pages/Chats"));
const Notfound = lazy(() => import("./pages/Notfound"));
const Group = lazy(() => import("./pages/Group"));

let user = true;
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<MainLoaders />} >
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path='/' element={<Home />} />
            <Route path='/chat/:chatId' element={<Chats />} />

            <Route path='/group' element={<Group />} />

          </Route>
          <Route path='/login' element={
            <ProtectRoute user={!user} redirect="/">
              <Login />
            </ProtectRoute>} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App