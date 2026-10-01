
import { useState } from "react";
import {
  BriefcaseBusiness,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  FileText,
  FolderKanban,
  Goal,
  Heart,
  Menu,
  MessageSquareText,
  PanelLeftClose,
  PanelLeftOpen,
  Sparkles,
  Target,
  Timer,
  UserRound,
  X,
} from "lucide-react";

import Logo from "./components/Logo";
import ProfessionalProfile from "./components/ProfessionalProfile";
import Resume from "./components/Resume";

type NavigationItem = {
  label: string;
  icon: React.ElementType;
  children?: string[];
};

const navigationItems: NavigationItem[] = [
  {
    label: "Professional Profile",
    icon: UserRound,
  },
  {
    label: "Resume",
    icon: FileText,
  },
  {
    label: "Cover Letters",
    icon: MessageSquareText,
  },
  {
    label: "Interview Q&A",
    icon: BriefcaseBusiness,
    children: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux",
      "HTML",
      "CSS",
      "Testing",
    ],
  },
  {
    label: "Career Goals",
    icon: Goal,
  },
  {
    label: "Target Organizations",
    icon: Target,
  },
  {
    label: "Salary Goals",
    icon: CircleDollarSign,
  },
  {
    label: "Hobbies",
    icon: Heart,
  },
  {
    label: "Time Management",
    icon: Timer,
  },
  {
    label: "Projects & Achievements",
    icon: FolderKanban,
  },
  {
    label: "AI Career Assistant",
    icon: Sparkles,
  },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [interviewOpen, setInterviewOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Professional Profile");

  const handleNavigation = (label: string) => {
    setActiveItem(label);
    setMobileMenuOpen(false);
  };

  const renderPageContent = () => {
    if (activeItem === "Professional Profile") {
      return <ProfessionalProfile />;
    }

    if (activeItem === "Resume") {
      return <Resume />;
    }

    return (
      <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <Sparkles className="h-7 w-7" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {activeItem}
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            This ProfileHub section will be designed separately.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Mobile Header */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 lg:hidden">
        <Logo size="sm" />

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </header>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-200
          bg-white transition-all duration-300
          ${sidebarOpen ? "w-72" : "w-20"}
          ${
            mobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
          <Logo size="sm" showText={sidebarOpen} />

          <button
            type="button"
            onClick={() => {
              if (window.innerWidth < 1024) {
                setMobileMenuOpen(false);
              } else {
                setSidebarOpen((previous) => !previous);
              }
            }}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? (
              <PanelLeftClose className="h-5 w-5" />
            ) : (
              <PanelLeftOpen className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3">
          <div className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.label;

              return (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => {
                      if (item.children) {
                        setInterviewOpen((previous) => !previous);
                        setActiveItem(item.label);
                      } else {
                        handleNavigation(item.label);
                      }
                    }}
                    className={`
                      group flex w-full items-center rounded-xl px-3 py-2.5
                      text-sm font-medium transition
                      ${
                        isActive
                          ? "bg-indigo-50 text-indigo-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }
                    `}
                  >
                    <Icon
                      className={`h-5 w-5 shrink-0 ${
                        isActive
                          ? "text-indigo-600"
                          : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    />

                    {sidebarOpen && (
                      <>
                        <span className="ml-3 flex-1 text-left">
                          {item.label}
                        </span>

                        {item.children &&
                          (interviewOpen ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          ))}
                      </>
                    )}
                  </button>

                  {/* Interview Q&A Submenu */}
                  {item.children && interviewOpen && sidebarOpen && (
                    <div className="ml-5 mt-1 space-y-1 border-l border-slate-200 pl-4">
                      {item.children.map((child) => (
                        <button
                          key={child}
                          type="button"
                          onClick={() => handleNavigation(child)}
                          className={`
                            flex w-full items-center rounded-lg px-3 py-2
                            text-left text-sm transition
                            ${
                              activeItem === child
                                ? "bg-indigo-50 font-medium text-indigo-700"
                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                            }
                          `}
                        >
                          {child}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-slate-200 p-3">
          <div
            className={`
              flex items-center rounded-xl bg-slate-50
              ${sidebarOpen ? "gap-3 p-3" : "justify-center p-2"}
            `}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
              CK
            </div>

            {sidebarOpen && (
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">
                  Chanchal Kumar Mandal
                </p>

                <p className="truncate text-xs text-slate-500">
                  Senior Frontend Engineer
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`
          min-h-screen pt-16 transition-all duration-300 lg:pt-0
          ${sidebarOpen ? "lg:pl-72" : "lg:pl-20"}
        `}
      >
        {/* Desktop Top Bar */}
        <header className="hidden h-16 items-center justify-between border-b border-slate-200 bg-white px-6 lg:flex">
          <div>
            <h1 className="text-lg font-semibold text-slate-900">
              {activeItem}
            </h1>

            <p className="text-xs text-slate-500">
              Manage your professional workspace
            </p>
          </div>

          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-500 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
            aria-label="AI Assistant"
          >
            <Sparkles className="h-5 w-5" />
          </button>
        </header>

        {/* Page Content */}
        <section className="p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">{renderPageContent()}</div>
        </section>
      </main>

      {/* Mobile Close Button */}
      {mobileMenuOpen && (
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed right-4 top-4 z-[60] rounded-lg bg-white p-2 text-slate-600 shadow-lg lg:hidden"
          aria-label="Close navigation"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default App;