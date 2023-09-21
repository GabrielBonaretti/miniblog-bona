// react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// firabase
import { onAuthStateChanged } from "firebase/auth";

// pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import CreatePost from "./pages/CreatePost";
import Dashboard from "./pages/DashBoard";
import Search from "./pages/Search";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// styled components
import styled from "styled-components";

// context
import { AuthProvider } from "./context/AuthContext";

// hook
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

const Container = styled.div`
  min-height: 60vh;
  margin-bottom: 5em;
`;

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />

          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/posts/edit/:id"
                element={user ? <EditPost /> : <Navigate to="/login" />}
              />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
            </Routes>
          </Container>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
