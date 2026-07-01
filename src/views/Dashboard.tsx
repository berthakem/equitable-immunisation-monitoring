import { useMemo, useState } from "react";
import { AlertTriangle, ChevronRight, ExternalLink, Info, ShieldCheck, Target, Users } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {
  ACCESS_THRESHOLD,
  UTILISATION_THRESHOLD,
  categoryFor,
  categoryLabel,
  dataWarnings,
  districtData,
  DistrictName,
  dropoutRate,
  estimatedZeroDose,
} from "../data";

export function Dashboard({
  selectedDistrict,
  setSelectedDistrict,
  onPlan,
}: {
  selectedDistrict: DistrictName;
  setSelectedDistrict: (district: DistrictName) => void;
  onPlan: () => void;
}) {
  const [filter, setFilter] = useState<"All" | DistrictName>("All");

  const selectedRecord = districtData.find((record) => record.district === selectedDistrict)!;
  const filteredData = filter === "All" ? districtData : districtData.filter((record) => record.district === filter);

  const chartData = useMemo(
    () => filteredData.map((record) => ({ district: record.district, Penta1: record.penta1, Penta3: record.penta3 })),
    [filteredData],
  );

  const totalTarget = districtData.reduce((sum, record) => sum + record.targetChildren, 0);
  const totalZeroDose = districtData.reduce((sum, record) => sum + estimatedZeroDose(record), 0);
  const highPriority = districtData.filter((record) => categoryFor(record.penta1, record.penta3) === 4).length;

  return (
    <>
      <section className="page-heading">
        <div>
          <p className="eyebrow">Routine immunisation equity</p>
          <h1>Monitoring dashboard</h1>
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
              <button key={option} className={filter === option ? "active" : ""} onClick={() => setFilter(option)}>
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

      <DistrictDetail district={selectedRecord} onPlan={onPlan} />
    </>
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
