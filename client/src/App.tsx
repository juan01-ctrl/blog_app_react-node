import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Nav from "./components/Nav";
import Footer from './components/Footer/index';

import { Blog, PostPage, NewPost, Login, Register } from "./views";
import { AuthContext } from './context/Context';
function App() {
  const {state:{user}} = useContext(AuthContext)

  const isAuth = user;
  return (
    <>
      <BrowserRouter basename="/">
        <Nav/>
        <AnimatePresence>
        <Routes>
          <Route path="/" element={isAuth ?<Blog/> : <Login />}/>
          <Route path="/login" element={isAuth ?<Blog/> : <Login />} />
          <Route path="/register" element={isAuth ?<Blog/> : <Register />} />
          <Route path="/createpost" element={isAuth ?<NewPost/> : <Login />} />
          <Route path="/post/:postId" element={isAuth ?<PostPage />: <Login />} />
        </Routes>
        {isAuth && <Footer/>}
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
