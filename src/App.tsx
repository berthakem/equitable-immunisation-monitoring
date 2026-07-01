import { useMemo, useState } from "react";
import {
  AlertTriangle,
  BarChart3,
  Bot,
  Check,
  ChevronRight,
  ClipboardCheck,
  ExternalLink,
  FileText,
  Info,
  Megaphone,
  MessageSquareText,
  RefreshCw,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ACCESS_THRESHOLD,
  UTILISATION_THRESHOLD,
  barriers,
  buildCampaign,
  CampaignPackage,
  CampaignStatus,
  categoryFor,
  categoryLabel,
  dataWarnings,
  districtData,
  DistrictName,
  dropoutRate,
  estimatedZeroDose,
  sources,
} from "./data";

type View = "monitor" | "outreach" | "evidence";
type ContentTab = "sms" | "radio" | "vht" | "plan";

const statusOrder: CampaignStatus[] = ["Draft", "Under Review", "Approved", "Active", "Completed"];

function initialStatus(): CampaignStatus {
  const saved = localStorage.getItem("eim-campaign-status") as CampaignStatus | null;
  return saved && statusOrder.includes(saved) ? saved : "Draft";
}

function App() {
  const [view, setView] = useState<View>("monitor");
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictName>("Mubende");
  const [filter, setFilter] = useState<"All" | DistrictName>("All");
  const [barrierId, setBarrierId] = useState("access");
  const [audience, setAudience] = useState("Parents and caregivers of children under two");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [campaign, setCampaign] = useState<CampaignPackage | null>(null);
  const [contentTab, setContentTab] = useState<ContentTab>("sms");
  const [status, setStatus] = useState<CampaignStatus>(initialStatus);
  const [reviewConfirmed, setReviewConfirmed] = useState(false);

  const selectedRecord = districtData.find((record) => record.district === selectedDistrict)!;
  const selectedBarrier = barriers.find((barrier) => barrier.id === barrierId)!;
  const filteredData = filter === "All" ? districtData : districtData.filter((record) => record.district === filter);

  const chartData = useMemo(
    () =>
      filteredData.map((record) => ({
        district: record.district,
        Penta1: record.penta1,
        Penta3: record.penta3,
      })),
    [filteredData],
  );

  const totalTarget = districtData.reduce((sum, record) => sum + record.targetChildren, 0);
  const totalZeroDose = districtData.reduce((sum, record) => sum + estimatedZeroDose(record), 0);
  const highPriority = districtData.filter((record) => categoryFor(record.penta1, record.penta3) === 4).length;

  const changeStatus = (next: CampaignStatus) => {
    setStatus(next);
    localStorage.setItem("eim-campaign-status", next);
  };

  const resetDemo = () => {
    setSelectedDistrict("Mubende");
    setFilter("All");
    setBarrierId("access");
    setAudience("Parents and caregivers of children under two");
    setDate("");
    setLocation("");
    setContact("");
    setCampaign(null);
    setContentTab("sms");
    setReviewConfirmed(false);
    changeStatus("Draft");
    setView("monitor");
  };

  const generateCampaign = () => {
    setCampaign(buildCampaign(selectedRecord, selectedBarrier, audience, date, location, contact));
    setContentTab("sms");
    setReviewConfirmed(false);
    changeStatus("Draft");
  };

  const openBot = () => {
    window.botpress?.open();
  };

  const moveForward = () => {
    const currentIndex = statusOrder.indexOf(status);
    if (currentIndex < statusOrder.length - 1) {
      changeStatus(statusOrder[currentIndex + 1]);
    }
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => setView("monitor")} aria-label="Open monitoring overview">
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
        <button className={view === "monitor" ? "active" : ""} onClick={() => setView("monitor")}>
          <BarChart3 size={18} /> Monitoring
        </button>
        <button className={view === "outreach" ? "active" : ""} onClick={() => setView("outreach")}>
          <Megaphone size={18} /> Outreach
        </button>
        <button className={view === "evidence" ? "active" : ""} onClick={() => setView("evidence")}>
          <FileText size={18} /> Evidence
        </button>
      </nav>

      <main>
        {view === "monitor" && (
          <>
            <section className="page-heading">
              <div>
                <p className="eyebrow">Routine immunisation equity</p>
                <h1>Monitoring overview</h1>
                <p>Access and continuation signals for three Uganda planning profiles.</p>
              </div>
              <div className="period-block">
                <span>Reporting period</span>
                <strong>2025 demonstration</strong>
              </div>
            </section>

            <div className="notice notice-warning" role="note">
              <Info size={18} />
              <p><strong>Proof of concept.</strong> Coverage values are synthetic and do not represent current district performance. Published context is dated and cited separately.</p>
            </div>

            <section className="metric-grid" aria-label="Overview metrics">
              <article className="metric-card">
                <span className="metric-icon green"><Users size={19} /></span>
                <div><span>Demo target population</span><strong>{totalTarget.toLocaleString()}</strong></div>
              </article>
              <article className="metric-card">
                <span className="metric-icon amber"><Target size={19} /></span>
                <div><span>Estimated zero-dose</span><strong>{totalZeroDose.toLocaleString()}</strong></div>
              </article>
              <article className="metric-card">
                <span className="metric-icon red"><AlertTriangle size={19} /></span>
                <div><span>Category 4 profiles</span><strong>{highPriority}</strong></div>
              </article>
              <article className="metric-card">
                <span className="metric-icon blue"><ShieldCheck size={19} /></span>
                <div><span>Districts included</span><strong>{districtData.length}</strong></div>
              </article>
            </section>

            <section className="panel comparison-section">
              <div className="section-heading">
                <div>
                  <h2>Coverage comparison</h2>
                  <p>Penta1 indicates initial access; Penta3 indicates continuation.</p>
                </div>
                <div className="segmented-control" aria-label="Filter comparison by district">
                  {(["All", "Wakiso", "Mubende", "Kasese"] as const).map((option) => (
                    <button
                      key={option}
                      className={filter === option ? "active" : ""}
                      onClick={() => setFilter(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="comparison-layout">
                <div className="chart-wrap" aria-label="Penta1 and Penta3 coverage chart">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#dce5e1" />
                      <XAxis dataKey="district" tick={{ fill: "#4a5568", fontSize: 13 }} axisLine={false} tickLine={false} />
                      <YAxis domain={[0, 100]} tick={{ fill: "#4a5568", fontSize: 12 }} axisLine={false} tickLine={false} unit="%" />
                      <Tooltip cursor={{ fill: "#edf4f1" }} />
                      <Legend iconType="square" wrapperStyle={{ fontSize: 13 }} />
                      <Bar dataKey="Penta1" fill="#2b7a78" radius={[3, 3, 0, 0]} maxBarSize={44} />
                      <Bar dataKey="Penta3" fill="#d9a441" radius={[3, 3, 0, 0]} maxBarSize={44} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>District</th>
                        <th>Penta1</th>
                        <th>Dropout</th>
                        <th>RED/REC</th>
                        <th><span className="sr-only">Open details</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((record) => {
                        const category = categoryFor(record.penta1, record.penta3)!;
                        const dropout = dropoutRate(record.penta1, record.penta3)!;
                        return (
                          <tr
                            key={record.district}
                            className={selectedDistrict === record.district ? "selected" : ""}
                            onClick={() => setSelectedDistrict(record.district)}
                          >
                            <td><strong>{record.district}</strong><small>{record.provenance}</small></td>
                            <td>{record.penta1}%</td>
                            <td>{dropout.toFixed(1)}%</td>
                            <td><span className={`category category-${category}`}>C{category}</span></td>
                            <td><ChevronRight size={17} /></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <DistrictDetail
              district={selectedRecord}
              onPlan={() => {
                setView("outreach");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </>
        )}

        {view === "outreach" && (
          <>
            <section className="page-heading">
              <div>
                <p className="eyebrow">Priority to action</p>
                <h1>Outreach workspace</h1>
                <p>Prepare an English campaign package from a locally observed barrier.</p>
              </div>
              <button className="button button-secondary" onClick={resetDemo}>
                <RefreshCw size={17} /> Reset demo
              </button>
            </section>

            <StatusTrack status={status} />

            <section className="panel planner-section">
              <div className="section-heading">
                <div>
                  <h2>Planning context</h2>
                  <p>The barrier is provided by the user and is never inferred from coverage.</p>
                </div>
                <span className="provenance-badge entered">User-entered context</span>
              </div>
              <div className="form-grid">
                <label>
                  Priority district
                  <select value={selectedDistrict} onChange={(event) => setSelectedDistrict(event.target.value as DistrictName)}>
                    {districtData.map((record) => <option key={record.district}>{record.district}</option>)}
                  </select>
                </label>
                <label className="span-two">
                  Observed barrier
                  <select value={barrierId} onChange={(event) => setBarrierId(event.target.value)}>
                    {barriers.map((barrier) => (
                      <option key={barrier.id} value={barrier.id}>{barrier.label}</option>
                    ))}
                  </select>
                  <small>{selectedBarrier.domain}: {selectedBarrier.action}</small>
                </label>
                <label className="span-two">
                  Intended audience
                  <input value={audience} onChange={(event) => setAudience(event.target.value)} />
                </label>
                <label>
                  Confirmed service date
                  <input type="text" placeholder="Leave blank if unconfirmed" value={date} onChange={(event) => setDate(event.target.value)} />
                </label>
                <label>
                  Confirmed location
                  <input type="text" placeholder="Leave blank if unconfirmed" value={location} onChange={(event) => setLocation(event.target.value)} />
                </label>
                <label>
                  Approved local contact
                  <input type="text" placeholder="Leave blank if unconfirmed" value={contact} onChange={(event) => setContact(event.target.value)} />
                </label>
              </div>
              <div className="privacy-note">
                <ShieldCheck size={17} />
                Use aggregate planning context only. Do not enter names, phone numbers, child records or medical histories.
              </div>
              <button className="button button-primary" onClick={generateCampaign}>
                <Sparkles size={17} /> Generate outreach package
              </button>
            </section>

            {campaign ? (
              <CampaignResult
                campaign={campaign}
                setCampaign={setCampaign}
                contentTab={contentTab}
                setContentTab={setContentTab}
                status={status}
                reviewConfirmed={reviewConfirmed}
                setReviewConfirmed={setReviewConfirmed}
                moveForward={moveForward}
              />
            ) : (
              <section className="empty-state">
                <MessageSquareText size={26} />
                <h2>No campaign draft yet</h2>
                <p>Complete the planning context to create the seeded review package.</p>
              </section>
            )}
          </>
        )}

        {view === "evidence" && (
          <>
            <section className="page-heading">
              <div>
                <p className="eyebrow">Methods and safeguards</p>
                <h1>Evidence register</h1>
                <p>Definitions, sources and boundaries supporting this proof of concept.</p>
              </div>
              <button className="button button-accent" onClick={openBot}><Bot size={17} /> Open AI planner</button>
            </section>

            <div className="evidence-layout">
              <section className="panel">
                <div className="section-heading"><div><h2>Primary sources</h2><p>Published context is separate from synthetic planning values.</p></div></div>
                <div className="source-list">
                  {sources.map((source) => (
                    <a href={source.url} target="_blank" rel="noreferrer" key={source.title}>
                      <span><strong>{source.title}</strong><small>{source.organisation}</small></span>
                      <ExternalLink size={17} />
                    </a>
                  ))}
                </div>
              </section>

              <section className="panel">
                <div className="section-heading"><div><h2>RED/REC interpretation</h2><p>Deterministic rules, not AI classification.</p></div></div>
                <dl className="definition-list">
                  <div><dt>Access</dt><dd>Penta1 coverage ≥ {ACCESS_THRESHOLD}%</dd></div>
                  <div><dt>Utilisation</dt><dd>Penta1-to-Penta3 dropout &lt; {UTILISATION_THRESHOLD}%</dd></div>
                  <div><dt>Dropout formula</dt><dd>((Penta1 - Penta3) / Penta1) × 100</dd></div>
                  <div><dt>Category 4</dt><dd>Poor access and poor utilisation; the cause still requires local evidence.</dd></div>
                </dl>
              </section>

              <section className="panel full-span">
                <div className="section-heading"><div><h2>Responsible-use boundaries</h2><p>Programme support only; no clinical or individual decision-making.</p></div></div>
                <div className="boundary-grid">
                  <div><Check size={18} /><span><strong>Aggregate data</strong><small>Public context and visibly labelled demonstration values</small></span></div>
                  <div><Check size={18} /><span><strong>Human review</strong><small>Drafts stop before approval and distribution</small></span></div>
                  <div><Check size={18} /><span><strong>Local confirmation</strong><small>Barriers, dates and locations must be supplied by programme teams</small></span></div>
                  <div><Check size={18} /><span><strong>Clinical boundary</strong><small>Individual questions are referred to qualified health workers</small></span></div>
                </div>
                <div className="limitation-note">
                  <AlertTriangle size={18} />
                  <p>This prototype is not connected to DHIS2, does not display current district performance, and must not be used to target real communities without validated local data and authorisation.</p>
                </div>
              </section>
            </div>
          </>
        )}
      </main>

      <footer>
        <span>Equitable Immunisation Monitoring</span>
        <span>Demonstration project · No personal health data</span>
      </footer>
    </div>
  );
}

function DistrictDetail({ district, onPlan }: { district: (typeof districtData)[number]; onPlan: () => void }) {
  const category = categoryFor(district.penta1, district.penta3)!;
  const dropout = dropoutRate(district.penta1, district.penta3)!;
  const warnings = dataWarnings(district);

  return (
    <section className="panel district-detail">
      <div className="detail-header">
        <div>
          <span className="provenance-badge synthetic">{district.provenance}</span>
          <h2>{district.district} planning profile</h2>
          <p>{district.period}</p>
        </div>
        <div className={`classification classification-${category}`}>
          <span>Category {category}</span>
          <strong>{categoryLabel(category)}</strong>
        </div>
      </div>

      <div className="detail-grid">
        <div className="indicator-strip">
          <div><span>Penta1 access</span><strong>{district.penta1}%</strong></div>
          <div><span>Penta3 continuation</span><strong>{district.penta3}%</strong></div>
          <div><span>Dropout</span><strong>{dropout.toFixed(1)}%</strong></div>
          <div><span>Estimated zero-dose</span><strong>{estimatedZeroDose(district).toLocaleString()}</strong></div>
        </div>
        <div className="calculation-block">
          <h3>Classification logic</h3>
          <p>Access: {district.penta1}% {district.penta1 >= ACCESS_THRESHOLD ? "meets" : "is below"} the {ACCESS_THRESHOLD}% threshold.</p>
          <p>Utilisation: {dropout.toFixed(1)}% dropout {dropout < UTILISATION_THRESHOLD ? "meets" : "exceeds"} the {UTILISATION_THRESHOLD}% threshold.</p>
          <code>(({district.penta1} - {district.penta3}) / {district.penta1}) × 100 = {dropout.toFixed(1)}%</code>
        </div>
      </div>

      <div className="context-row">
        <div>
          <span className="provenance-badge published">Published historical context</span>
          <p>{district.historicalContext}</p>
          <a href={district.contextSource} target="_blank" rel="noreferrer">View source <ExternalLink size={14} /></a>
        </div>
        <div className="interpretation">
          <h3>Interpretation boundary</h3>
          <p>The category identifies an access and utilisation pattern. It does not explain why it occurred. Add a locally observed barrier in the outreach workspace.</p>
        </div>
      </div>

      {warnings.length > 0 && (
        <div className="notice notice-danger">
          <AlertTriangle size={18} />
          <p>{warnings.join(" ")}</p>
        </div>
      )}

      <div className="panel-actions">
        <button className="button button-primary" onClick={onPlan}>Plan outreach for {district.district} <ChevronRight size={17} /></button>
      </div>
    </section>
  );
}

function StatusTrack({ status }: { status: CampaignStatus }) {
  const activeIndex = statusOrder.indexOf(status);
  return (
    <section className="status-track" aria-label={`Campaign status: ${status}`}>
      {statusOrder.map((item, index) => (
        <div key={item} className={index <= activeIndex ? "complete" : ""}>
          <span>{index < activeIndex ? <Check size={14} /> : index + 1}</span>
          <strong>{item}</strong>
        </div>
      ))}
    </section>
  );
}

function CampaignResult({
  campaign,
  setCampaign,
  contentTab,
  setContentTab,
  status,
  reviewConfirmed,
  setReviewConfirmed,
  moveForward,
}: {
  campaign: CampaignPackage;
  setCampaign: (campaign: CampaignPackage) => void;
  contentTab: ContentTab;
  setContentTab: (tab: ContentTab) => void;
  status: CampaignStatus;
  reviewConfirmed: boolean;
  setReviewConfirmed: (confirmed: boolean) => void;
  moveForward: () => void;
}) {
  const nextLabel: Record<CampaignStatus, string> = {
    Draft: "Submit for review",
    "Under Review": "Approve package",
    Approved: "Mark active",
    Active: "Mark completed",
    Completed: "Completed",
  };
  const reviewRequired = status === "Draft" || status === "Under Review";
  const canMove = status !== "Completed" && (!reviewRequired || reviewConfirmed);

  return (
    <section className="panel campaign-result">
      <div className="section-heading">
        <div>
          <span className="provenance-badge generated">Generated demonstration content</span>
          <h2>Outreach package</h2>
          <p>Edit the draft before it enters the review process.</p>
        </div>
        <span className={`status-badge status-${status.toLowerCase().replace(" ", "-")}`}>{status}</span>
      </div>

      <div className="content-tabs" role="tablist" aria-label="Campaign content">
        <button className={contentTab === "sms" ? "active" : ""} onClick={() => setContentTab("sms")}><MessageSquareText size={16} /> SMS / WhatsApp</button>
        <button className={contentTab === "radio" ? "active" : ""} onClick={() => setContentTab("radio")}><Megaphone size={16} /> Radio</button>
        <button className={contentTab === "vht" ? "active" : ""} onClick={() => setContentTab("vht")}><Users size={16} /> VHT points</button>
        <button className={contentTab === "plan" ? "active" : ""} onClick={() => setContentTab("plan")}><ClipboardCheck size={16} /> 7-day plan</button>
      </div>

      <div className="campaign-content">
        {contentTab === "sms" && (
          <label>Editable SMS / WhatsApp draft
            <textarea value={campaign.sms} onChange={(event) => setCampaign({ ...campaign, sms: event.target.value })} rows={7} />
          </label>
        )}
        {contentTab === "radio" && (
          <label>Editable radio announcement
            <textarea value={campaign.radio} onChange={(event) => setCampaign({ ...campaign, radio: event.target.value })} rows={9} />
          </label>
        )}
        {contentTab === "vht" && (
          <div className="editable-list">
            <h3>VHT talking points</h3>
            {campaign.vhtPoints.map((point, index) => (
              <label key={`${index}-${point.slice(0, 8)}`}>
                <span>{index + 1}</span>
                <input
                  value={point}
                  onChange={(event) => {
                    const points = [...campaign.vhtPoints];
                    points[index] = event.target.value;
                    setCampaign({ ...campaign, vhtPoints: points });
                  }}
                />
              </label>
            ))}
          </div>
        )}
        {contentTab === "plan" && (
          <div className="table-wrap plan-table">
            <table>
              <thead><tr><th>Timing</th><th>Action</th><th>Owner</th></tr></thead>
              <tbody>
                {campaign.activityPlan.map((item) => (
                  <tr key={item.day}><td><strong>{item.day}</strong></td><td>{item.action}</td><td>{item.owner}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="review-layout">
        <div>
          <h3>Human review checkpoint</h3>
          <ul>{campaign.reviewItems.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul>
          <p className="measure"><Target size={16} /><span><strong>Monitor:</strong> {campaign.measure}</span></p>
        </div>
        <div className="approval-box">
          {reviewRequired && (
            <label className="checkbox-label">
              <input type="checkbox" checked={reviewConfirmed} onChange={(event) => setReviewConfirmed(event.target.checked)} />
              <span>I confirm this package has received the required human review for the next stage.</span>
            </label>
          )}
          <button className="button button-primary" disabled={!canMove} onClick={moveForward}>
            {nextLabel[status]} {status !== "Completed" && <Send size={16} />}
          </button>
          <small>No message is distributed by this application.</small>
        </div>
      </div>
    </section>
  );
}

export default App;
