import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

const Profile = lazy(() => import("./pages/Profile"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Experience = lazy(() => import("./pages/Experience"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>

      <div className="min-h-screen bg-white text-slate-800">
        {/* Brand accent bar */}
        <div
          className="w-full"
          style={{
            height: "4px",
            background:
              "linear-gradient(90deg, var(--brand-500), var(--brand-600))",
          }}
          aria-hidden="true"
        />

        <header className="w-full border-b" role="banner">
          <div className="container-centered px-6 py-4 flex items-center justify-between">
            <div>
              <NavLink to="/" className="font-bold text-lg" aria-label="Home">
                Marie Verdonck
              </NavLink>
              <div className="text-xs text-slate-500">
                Translational Immunology · Cancer Immunotherapy · Genome
                Engineering
              </div>
            </div>

            <nav className="space-x-4 text-sm" aria-label="Primary">
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "text-slate-900 font-semibold" : "text-slate-600"
                  } focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-sm px-1`
                }
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                Experience
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "text-slate-900 font-semibold" : "text-slate-600"
                  } focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-sm px-1`
                }
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                Projects
              </NavLink>
            </nav>
          </div>
        </header>

        <main id="main" className="container-centered px-6 py-8" role="main">
          <div className="flex flex-col md:flex-row gap-6">
            <Suspense
              fallback={<div className="sr-only">Loading profile…</div>}
            >
              <Profile />
            </Suspense>

            <div className="flex-1 py-4 px-0 md:py-0 md:px-4 space-y-6">
              <Suspense fallback={<div>Loading…</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Portfolio />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </main>

        <footer className="w-full border-t mt-8" role="contentinfo">
          <div className="container-centered px-6 py-6 text-sm text-slate-600 flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
            <div>
              © {new Date().getFullYear()} Marie Verdonck — Translational
              Immunology
            </div>
            <div id="contact">
              Email:{" "}
              <a
                href="mailto:marie_verdonck@hms.harvard.edu"
                className="text-slate-700 hover:underline"
              >
                marie_verdonck@hms.harvard.edu
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function NotFound() {
  return (
    <div className="text-sm">
      <h2 className="text-xl font-semibold">Page not found</h2>
      <p className="text-slate-600 mt-1">Try the navigation above.</p>
    </div>
  );
}

export default App;
