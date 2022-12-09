import React, { Suspense, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "./store/auth-context";
import Layout from "./components/Layout";
import { Spinner } from "./components/UI";
import "./styles/App.css";

const ActiveNotes = React.lazy(() => import("./pages/ActiveNotes"));
const ArchivedNotes = React.lazy(() => import("./pages/ArchivedNotes"));
const DetailNotes = React.lazy(() => import("./pages/DetailNotes"));
const AddNotes = React.lazy(() => import("./pages/AddNotes"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp"));

function App() {
  const authCtx = useContext(AuthContext);

  if (authCtx.isLoggedIn) {
    return (
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/active-notes" index element={<ActiveNotes />} exact />
            <Route path="/archived-notes" element={<ArchivedNotes />} exact />
            <Route path="/detail-notes/:notesId" element={<DetailNotes />} exact />
            <Route path="/add-notes" element={<AddNotes />} exact />
            <Route path="*" element={<p>Halaman kosong</p>} />
          </Routes>
        </Suspense>
      </Layout>
    );
  }

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/signin" index element={<SignIn />} exact />
        <Route path="/signup" index element={<SignUp />} exact />
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
