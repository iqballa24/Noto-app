import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./styles/App.css";

const ActiveNotes = React.lazy(() => import("./pages/ActiveNotes"));
const ArchivedNotes = React.lazy(() => import("./pages/ArchivedNotes"));
const DetailNotes = React.lazy(() => import("./pages/DetailNotes"));
const AddNotes = React.lazy(() => import("./pages/AddNotes"));

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
          <Route path="/archived-notes" element={<ArchivedNotes />} exact />
          <Route path="/detail-notes/*" element={<DetailNotes />} exact />
          <Route path="/add-notes" element={<AddNotes />} exact />
          <Route path="*" element={<p>Halaman kosong</p>} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
