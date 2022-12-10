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
            <Route index path="/" element={<Navigate replace to="/active-notes" />} />
            <Route path="/active-notes" element={<ActiveNotes />} />
            <Route path="/archived-notes" element={<ArchivedNotes />} />
            <Route path="/detail-notes/:notesId" element={<DetailNotes />} />
            <Route path="/add-notes" element={<AddNotes />} />
            <Route path="*" element={<Navigate to="/active-notes" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    );
  }

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route index path="/" element={<Navigate replace to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate replace to="/signin" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
