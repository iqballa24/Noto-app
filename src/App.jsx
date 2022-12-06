import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./styles/App.css";

const ActiveNotes = React.lazy(() => import("./pages/ActiveNotes"));
const ArchiveNotes = React.lazy(() => import("./pages/ArchiveNotes"));
const DetailNote = React.lazy(() => import("./pages/DetailNote"));
const AddNote = React.lazy(() => import("./pages/AddNote"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <p>Loading</p>
          </div>
        }
      >
        <Routes>
          <Route path="/active-notes" index element={<ActiveNotes />} exact />
          <Route path="/archive-notes" element={<ArchiveNotes />} exact />
          <Route path="/detail-note/*" element={<DetailNote />} exact />
          <Route path="/add-note" element={<AddNote />} exact />
          <Route path="*" element={<p>Halaman kosong</p>} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
