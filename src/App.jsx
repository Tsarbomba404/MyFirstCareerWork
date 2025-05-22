import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./section/ProtectedRoute";

// Lazy-loaded components
const AllSection = lazy(() => import("./section/AllSection"));
const SignUpPage = lazy(() => import("./section/SignPages/SignUp"));
const SignInPage = lazy(() => import("./section/SignPages/Login"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          {/* ✅ Auth Routes */}
          <Route path="/" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />

          {/* ✅ Protected Main App Route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AllSection />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
