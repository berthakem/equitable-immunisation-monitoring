import { AlertTriangle, Bot, Check, ExternalLink } from "lucide-react";
import { ACCESS_THRESHOLD, UTILISATION_THRESHOLD, sources } from "../data";

export function Evidence({ openBot }: { openBot: () => void }) {
  return (
    <>
      <section className="page-heading">
        <div>
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
  );
}
