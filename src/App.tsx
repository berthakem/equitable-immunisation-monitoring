import { useState } from "react";
import { BarChart3, Bot, FileText, FlaskConical, Home, Megaphone, RefreshCw } from "lucide-react";
import { CampaignStatus, DistrictName } from "./data";
import { Overview } from "./views/Overview";
import { Dashboard } from "./views/Dashboard";
import { Research } from "./views/Research";
import { Outreach } from "./views/Outreach";
import { Evidence } from "./views/Evidence";

type View = "overview" | "dashboard" | "research" | "outreach" | "evidence";

const statusOrder: CampaignStatus[] = ["Draft", "Under Review", "Approved", "Active", "Completed"];

const navItems: { id: View; label: string; icon: typeof Home }[] = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "research", label: "Research", icon: FlaskConical },
  { id: "outreach", label: "Outreach", icon: Megaphone },
  { id: "evidence", label: "Evidence", icon: FileText },
];

function initialStatus(): CampaignStatus {
  const saved = localStorage.getItem("eim-campaign-status") as CampaignStatus | null;
  return saved && statusOrder.includes(saved) ? saved : "Draft";
}

function App() {
  const [view, setView] = useState<View>("overview");
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictName>("Mubende");
  const [status, setStatus] = useState<CampaignStatus>(initialStatus);
  const [resetNonce, setResetNonce] = useState(0);

  const changeStatus = (next: CampaignStatus) => {
    setStatus(next);
    localStorage.setItem("eim-campaign-status", next);
  };

  const goTo = (next: View) => {
    setView(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openBot = () => {
    window.botpress?.open();
  };

  const resetDemo = () => {
    setSelectedDistrict("Mubende");
    changeStatus("Draft");
    setResetNonce((nonce) => nonce + 1);
    goTo("overview");
  };

  const openDistrict = (district: DistrictName) => {
    setSelectedDistrict(district);
    goTo("dashboard");
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => goTo("overview")} aria-label="Open project overview">
          <span className="brand-mark" aria-hidden="true">EI</span>
          <span>
            <strong>Equitable Immunisation Monitoring</strong>
            <small>Uganda demonstration</small>
          </span>
        </button>
        <div className="topbar-actions">
          <span className="demo-chip"><span aria-hidden="true" /> Synthetic planning data</span>
          <button className="icon-button" onClick={resetDemo} title="Reset demonstration" aria-label="Reset demonstration">
            <RefreshCw size={18} />
          </button>
          <button className="button button-accent" onClick={openBot}>
            <Bot size={17} /> Open AI planner
          </button>
        </div>
      </header>

      <nav className="primary-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button key={item.id} className={view === item.id ? "active" : ""} onClick={() => setView(item.id)}>
            <item.icon size={18} /> {item.label}
          </button>
        ))}
      </nav>

      <main>
        {view === "overview" && (
          <Overview
            goToDashboard={() => goTo("dashboard")}
            goToResearch={() => goTo("research")}
            openBot={openBot}
            onSelectDistrict={openDistrict}
          />
        )}
        {view === "dashboard" && (
          <Dashboard
            selectedDistrict={selectedDistrict}
            setSelectedDistrict={setSelectedDistrict}
            onPlan={() => goTo("outreach")}
          />
        )}
        {view === "research" && <Research openBot={openBot} />}
        {view === "outreach" && (
          <Outreach
            key={resetNonce}
            selectedDistrict={selectedDistrict}
            setSelectedDistrict={setSelectedDistrict}
            status={status}
            changeStatus={changeStatus}
            onReset={resetDemo}
          />
        )}
        {view === "evidence" && <Evidence openBot={openBot} />}
      </main>

      <footer>
        <span>Equitable Immunisation Monitoring</span>
        <span>Demonstration project · No personal health data</span>
      </footer>
    </div>
  );
}

export default App;
