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
    <Router basename="/portfolio">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>

      <div className="min-h-screen bg-white text-slate-800">
        <header className="w-full sticky top-0 z-40 navbar-glass" role="banner">
          {/* Animated gradient accent bar */}
          <div className="w-full navbar-accent-bar" aria-hidden="true" />

          <div className="navbar-container">
            <div className="container-centered px-6 py-4 flex items-center justify-between">
              <NavLink
                to="/"
                className="group flex items-center gap-3"
                aria-label="Home"
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-bold text-xl text-slate-900 group-hover:text-brand-600 transition-colors">
                    Marie Verdonck
                  </div>
                  <div className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors">
                    Translational Immunology
                  </div>
                </div>
              </NavLink>

              <nav
                className="flex items-center gap-2 text-sm"
                aria-label="Primary"
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link-modern ${isActive ? "nav-link-active" : ""}`
                  }
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/experience"
                  className={({ isActive }) =>
                    `nav-link-modern ${isActive ? "nav-link-active" : ""}`
                  }
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  Experience
                </NavLink>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `nav-link-modern ${isActive ? "nav-link-active" : ""}`
                  }
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  Projects
                </NavLink>
                <a
                  href="mailto:marie_verdonck@hms.harvard.edu"
                  className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 bg-brand-500 text-white text-sm font-semibold rounded-lg hover:bg-brand-600 hover:shadow-md transition-all duration-200"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>

        <main id="main" className="container-centered px-6 py-8" role="main">
          <div className="flex flex-col md:flex-row gap-6">
            <Suspense fallback={null}>
              <Profile />
            </Suspense>

            <div className="flex-1 py-4 px-0 md:py-0 md:px-4 space-y-6">
              <Suspense fallback={null}>
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

        <footer
          className="w-full border-t mt-12 bg-slate-50"
          role="contentinfo"
        >
          <div className="container-centered px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
              <div>
                <div className="font-bold text-lg text-slate-900 mb-2">
                  Marie Verdonck
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Boston, MA · Harvard Medical School
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm text-slate-900 mb-3">
                  Get in Touch
                </div>
                <div className="space-y-2">
                  <a
                    href="mailto:marie_verdonck@hms.harvard.edu"
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-brand-600 transition-colors"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    marie_verdonck@hms.harvard.edu
                  </a>
                  <a
                    href="https://www.linkedin.com/in/marie-verdonck/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-brand-600 transition-colors"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Marie Verdonck. All rights reserved.
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
