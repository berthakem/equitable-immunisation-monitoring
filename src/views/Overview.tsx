import { ArrowRight, BarChart3, Bot, ExternalLink, FlaskConical, MapPin, ShieldCheck } from "lucide-react";
import { DistrictName, districtData, estimatedZeroDose } from "../data";
import { districtRationale, selectionSummary } from "../content";

export function Overview({
  goToDashboard,
  goToResearch,
  openBot,
  onSelectDistrict,
}: {
  goToDashboard: () => void;
  goToResearch: () => void;
  openBot: () => void;
  onSelectDistrict: (district: DistrictName) => void;
}) {
  const totalZeroDose = districtData.reduce((sum, record) => sum + estimatedZeroDose(record), 0);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>Turning transparent zero-dose evidence into a review-ready outreach plan.</h1>
          <p className="hero-lede">
            A focused demonstration for immunisation programme managers in three high-burden Uganda
            districts — <strong>Wakiso, Mubende, and Kasese</strong>. It shows <em>where</em> children may be
            missed using transparent access and utilisation indicators, then helps prepare an
            English outreach package that always stops at human review.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={goToDashboard}>
              <BarChart3 size={17} /> Open the dashboard
            </button>
            <button className="button button-secondary" onClick={goToResearch}>
              <FlaskConical size={17} /> Read the research
            </button>
            <button className="button button-accent" onClick={openBot}>
              <Bot size={17} /> Ask the AI planner
            </button>
          </div>
        </div>
        <aside className="hero-panel">
          <span className="provenance-badge synthetic">Demonstration figures</span>
          <div className="hero-stat"><strong>3</strong><span>priority districts</span></div>
          <div className="hero-stat"><strong>{totalZeroDose.toLocaleString()}</strong><span>estimated zero-dose children (synthetic)</span></div>
          <div className="hero-stat"><strong>RED/REC</strong><span>transparent access &amp; utilisation categories</span></div>
        </aside>
      </section>

      <section className="panel selection-panel">
        <div className="section-heading">
          <div>
            <span className="provenance-badge published">Why these three</span>
            <h2>Selected from a published rapid assessment</h2>
            <p>{selectionSummary.method}</p>
          </div>
          <div className="period-block">
            <span>Assessment period</span>
            <strong>{selectionSummary.period}</strong>
          </div>
        </div>

        <div className="rationale-grid">
          {districtRationale.map((item) => (
            <article key={item.district} className="rationale-card">
              <header>
                <MapPin size={16} />
                <h3>{item.district}</h3>
              </header>
              <p className="rationale-headline">{item.headline}</p>
              <ul className="chip-list">
                {item.subAreas.map((area) => <li key={area}>{area}</li>)}
              </ul>
              <p className="rationale-detail">{item.detail}</p>
              <div className="rationale-foot">
                <a href={item.source.url} target="_blank" rel="noreferrer">
                  {item.source.label} <ExternalLink size={13} />
                </a>
                <button className="link-button" onClick={() => onSelectDistrict(item.district)}>
                  View on dashboard <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="notice notice-warning" role="note">
          <ShieldCheck size={18} />
          <p><strong>Historical evidence, not current conditions.</strong> {selectionSummary.caveat}</p>
        </div>
      </section>
    </>
  );
}
