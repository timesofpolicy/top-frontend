import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PageLayout from './components/PageLayout';
import { UserContextProvider } from './context/UserContext';
import './index.css';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PageLayout />} />
          {/* <Route index element={<Post />} /> */}
          {/* <Route index element={<Index />}/> */}
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<SignupPage />}/>
          <Route path='/create' element={<CreatePost />}/>
          <Route path='/post/:id' element={<PostPage />}/>
          <Route path='/edit/:id' element={<EditPost />}/>
        </Route>
      </Routes> 
    </UserContextProvider>
  );
}

export default App;
