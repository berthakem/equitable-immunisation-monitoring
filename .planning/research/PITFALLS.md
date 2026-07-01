# Pitfalls Research

## 1. Treating Published Reports as a Complete Dataset

Public reports often expose selected charts or summary tables, not consistent row-level data.

**Mitigation:** Maintain a source inventory, preserve unavailable values, and label demonstration values field by field.

## 2. Calling Every Unvaccinated Child “Zero-Dose”

Survey “no vaccinations,” Penta1 non-receipt, and administrative zero-dose estimates are related but not automatically interchangeable.

**Mitigation:** Store the indicator definition with each value and avoid merging unlike measures.

## 3. Inferring Demand Barriers from Coverage

Low coverage can reflect access, supply, denominator, data-quality, service-experience, or demand problems.

**Mitigation:** The dashboard identifies where attention is needed; the user separately records observed barriers.

## 4. Opaque Priority Scores

A single weighted score can look authoritative while hiding assumptions.

**Mitigation:** Use RED/REC access/utilisation categories and show the contributing values and thresholds.

## 5. Administrative Coverage Above 100%

Population denominators, cross-border use, catchment movement, and reporting issues can produce impossible-looking coverage.

**Mitigation:** Flag the value, do not silently cap it, and explain possible data-quality causes.

## 6. Overclaiming Real-Time Monitoring

The public evidence is historical and the demonstration data is not a live feed.

**Mitigation:** Display period/source prominently and call the product a proof of concept.

## 7. Unsafe Automated Messaging

Generated immunisation messages may be inaccurate, culturally inappropriate, or inconsistent with approved policy.

**Mitigation:** Use reviewed templates, label drafts, require human approval, and do not connect real sending channels in v1.

## 8. Chatbot Hallucination

Even a knowledge-base chatbot may answer beyond supplied evidence.

**Mitigation:** Restrict the knowledge base, provide a no-answer response, add source-oriented prompts, and test a fixed evaluation set.

## 9. Demo Fragility

Network-dependent chatbot or external services may fail during the four-minute presentation.

**Mitigation:** Make the analytical and campaign-generation path fully local, seed a resettable demo, and prepare screenshots or a short recording.

## 10. Scope Expansion

Maps, all Uganda districts, multilingual messaging, real DHIS2, and live automation can consume the entire schedule.

**Mitigation:** Hold the MVP to three districts, a small number of areas, one campaign workflow, and one chatbot.

