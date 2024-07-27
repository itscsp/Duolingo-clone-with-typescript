import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { lazy, Suspense } from "react";
import { Container } from "@mui/material";

const Home = lazy(() => import('./components/Home'));
const Learning = lazy(() => import('./components/Learning'));
const Quiz = lazy(() => import('./components/Quiz'));
const Result = lazy(() => import('./components/Result'));
const Loader = lazy(() => import('./components/Loader'));




function App() {
  return (
    <>
      <Router>
        <Header />
        <Container maxWidth="sm">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={<Learning />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </Suspense>
        </Container>
      </Router>
    </>
  )
}

export default App
