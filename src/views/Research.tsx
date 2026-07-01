import { AlertTriangle, Bot, ExternalLink, FileSearch, Landmark, Layers, MapPinned, Sparkles } from "lucide-react";
import {
  besdDomains,
  besdPrinciple,
  districtRationale,
  researchSources,
  scriptFindings,
  selectionSummary,
  strategyPrinciples,
  strategySynthesis,
  textAnalysisSchedule,
} from "../content";

export function Research({ openBot }: { openBot: () => void }) {
  return (
    <>
      <section className="page-heading">
        <div>
          <p className="eyebrow">Deep research &amp; text analysis</p>
          <h1>Research &amp; analysis</h1>
          <p>Synthesis of the published evidence base that guides the outreach workflow.</p>
        </div>
        <button className="button button-accent" onClick={openBot}><Bot size={17} /> Ask the AI planner</button>
      </section>

      <div className="notice notice-warning" role="note">
        <Sparkles size={18} />
        <p>
          <strong>AI-assisted synthesis of published sources — not new primary research.</strong> The text below
          summarises the cited reports and guidance. Named district findings are historical, and no demand
          barrier is inferred from coverage. Confirm every point against the linked source before use.
        </p>
      </div>

      {/* 1. Why these three ---------------------------------------------- */}
      <section className="panel research-block">
        <div className="section-heading">
          <div>
            <span className="provenance-badge ai-assisted">AI-assisted synthesis</span>
            <h2><MapPinned size={18} /> Why these three districts</h2>
            <p>{selectionSummary.method}</p>
          </div>
        </div>
        <div className="research-cards">
          {districtRationale.map((item) => (
            <article key={item.district} className="research-card">
              <h3>{item.district}</h3>
              <p className="rationale-headline">{item.headline}</p>
              <p className="rationale-detail">{item.detail}</p>
              <a href={item.source.url} target="_blank" rel="noreferrer">{item.source.label} <ExternalLink size={13} /></a>
            </article>
          ))}
        </div>
        <p className="research-caveat"><AlertTriangle size={15} /> {selectionSummary.caveat}</p>
      </section>

      {/* 2. Barrier / BeSD analysis -------------------------------------- */}
      <section className="panel research-block">
        <div className="section-heading">
          <div>
            <span className="provenance-badge ai-assisted">AI-assisted synthesis</span>
            <h2><Layers size={18} /> Barrier analysis — WHO BeSD framework</h2>
            <p>Four behavioural and social driver domains, each with the outreach response it implies.</p>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Domain</th><th>Examples</th><th>Response it implies</th></tr>
            </thead>
            <tbody>
              {besdDomains.map((domain) => (
                <tr key={domain.domain}>
                  <td><strong>{domain.domain}</strong></td>
                  <td>{domain.examples}</td>
                  <td>{domain.response}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="research-caveat"><AlertTriangle size={15} /> {besdPrinciple}</p>
      </section>

      {/* 3. Text analysis of draft scripts ------------------------------- */}
      <section className="panel research-block">
        <div className="section-heading">
          <div>
            <span className="provenance-badge ai-assisted">AI-assisted text analysis</span>
            <h2><FileSearch size={18} /> Text analysis of the draft scripts</h2>
            <p>
              The demonstration VHT and radio drafts checked against the{" "}
              <a href={textAnalysisSchedule.url} target="_blank" rel="noreferrer">{textAnalysisSchedule.label}</a>.
            </p>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Draft claim</th><th>Flag</th><th>Issue</th><th>Recommended correction</th></tr>
            </thead>
            <tbody>
              {scriptFindings.map((finding) => (
                <tr key={finding.claim}>
                  <td>{finding.claim}</td>
                  <td><span className={`finding-flag flag-${finding.severity.toLowerCase()}`}>{finding.severity}</span></td>
                  <td>{finding.issue}</td>
                  <td>{finding.correction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Programme / strategy synthesis ------------------------------- */}
      <section className="panel research-block">
        <div className="section-heading">
          <div>
            <span className="provenance-badge ai-assisted">AI-assisted synthesis</span>
            <h2><Landmark size={18} /> Programme &amp; strategy synthesis</h2>
            <p>{strategySynthesis}</p>
          </div>
        </div>
        <div className="principle-strip">
          {strategyPrinciples.map((principle) => <span key={principle}>{principle}</span>)}
        </div>
      </section>

      {/* Sources --------------------------------------------------------- */}
      <section className="panel research-block">
        <div className="section-heading"><div><h2>Sources used in this synthesis</h2></div></div>
        <div className="source-list">
          {researchSources.map((source) => (
            <a href={source.url} target="_blank" rel="noreferrer" key={source.title}>
              <span><strong>{source.title}</strong></span>
              <ExternalLink size={17} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
