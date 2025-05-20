import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

const FirstSection = lazy(() => import("./section/FirstSection"));
const NavBar = lazy(() => import("./section/NavBar"));
const Client = lazy(() => import("./section/Client"));
const Community = lazy(() => import("./section/Community/Community"));
const Unlock = lazy(() => import("./section/Unlock"));
const Achievement = lazy(() => import("./section/AchieveSection/Achievement"));
const Calender = lazy(() => import("./section/Calender"));
const Customer = lazy(() => import("./section/Customer"));
const CommunityUpdates = lazy(() =>
  import("./section/CommunityUpdates/CommunityUpdates")
);
const SecondToLast = lazy(() => import("./section/SecondToLast"));
const Footer = lazy(() => import("./section/Footer/Footer"));
const AllSection = lazy(() => import("./section/AllSection"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route path="/" element={<AllSection />} />
          <Route path="firstsection" element={<FirstSection />} />

          <Route path="/navbar" element={<NavBar />} />
          <Route path="/client" element={<Client />} />
          <Route path="/community" element={<Community />} />
          <Route path="/unlock" element={<Unlock />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/communityupdates" element={<CommunityUpdates />} />
          <Route path="/secondtolast" element={<SecondToLast />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
