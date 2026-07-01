import { useState } from "react";
import {
  Check,
  ClipboardCheck,
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
  barriers,
  buildCampaign,
  CampaignPackage,
  CampaignStatus,
  districtData,
  DistrictName,
} from "../data";

const statusOrder: CampaignStatus[] = ["Draft", "Under Review", "Approved", "Active", "Completed"];
type ContentTab = "sms" | "radio" | "vht" | "plan";

export function Outreach({
  selectedDistrict,
  setSelectedDistrict,
  status,
  changeStatus,
  onReset,
}: {
  selectedDistrict: DistrictName;
  setSelectedDistrict: (district: DistrictName) => void;
  status: CampaignStatus;
  changeStatus: (next: CampaignStatus) => void;
  onReset: () => void;
}) {
  const [barrierId, setBarrierId] = useState("access");
  const [audience, setAudience] = useState("Parents and caregivers of children under two");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [campaign, setCampaign] = useState<CampaignPackage | null>(null);
  const [contentTab, setContentTab] = useState<ContentTab>("sms");
  const [reviewConfirmed, setReviewConfirmed] = useState(false);

  const selectedRecord = districtData.find((record) => record.district === selectedDistrict)!;
  const selectedBarrier = barriers.find((barrier) => barrier.id === barrierId)!;

  const generateCampaign = () => {
    setCampaign(buildCampaign(selectedRecord, selectedBarrier, audience, date, location, contact));
    setContentTab("sms");
    setReviewConfirmed(false);
    changeStatus("Draft");
  };

  const moveForward = () => {
    const currentIndex = statusOrder.indexOf(status);
    if (currentIndex < statusOrder.length - 1) {
      changeStatus(statusOrder[currentIndex + 1]);
      setReviewConfirmed(false);
    }
  };

  return (
    <>
      <section className="page-heading">
        <div>
          <h1>Outreach workspace</h1>
          <p>Prepare an English campaign package from a locally observed barrier.</p>
        </div>
        <button className="button button-secondary" onClick={onReset}>
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
