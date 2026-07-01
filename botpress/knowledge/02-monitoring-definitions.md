# Monitoring Definitions and Interpretation

## Zero-Dose

In the Gavi zero-dose framework, a zero-dose child is generally represented by a child who has not received the first dose of a diphtheria-, tetanus-, and pertussis-containing vaccine.

In Uganda, Penta1 is commonly used as the proxy for initial access to routine immunisation.

Do not automatically treat every survey measure labelled “no vaccinations” as identical to Penta1 zero-dose. Always preserve the source definition.

## First-Dose Coverage

Penta1 or DTP1 coverage is used as an access proxy because it represents whether children are initially reached by routine immunisation services.

Administrative coverage may be affected by:

- Inaccurate target-population denominators
- Population movement
- Cross-boundary service use
- Incomplete or duplicate reporting
- Data-entry errors

Coverage above 100% should be flagged and investigated, not silently capped.

## Third-Dose Coverage

Penta3 or DTP3 coverage represents continuation through the primary multi-dose series. It must be interpreted together with first-dose coverage and the dropout rate.

## Dropout Rate

The standard first-to-third-dose dropout calculation is:

`((Penta1 - Penta3) / Penta1) × 100`

The calculation cannot be performed when Penta1 is zero or unavailable.

## Access and Utilisation Categories

The demonstration uses the established RED/REC access and utilisation interpretation:

- **Category 1:** good access and good utilisation
- **Category 2:** good access and poor utilisation
- **Category 3:** poor access and good utilisation among those reached
- **Category 4:** poor access and poor utilisation

The demonstration configuration uses:

- Good access: first-dose coverage at or above 80%
- Good utilisation: dropout below 10%

These thresholds and their source must be visible in the application.

## Interpretation Boundaries

A Category 4 result indicates that both initial access and continuation require attention. It does not, by itself, identify the cause.

A Category 2 result may indicate continuation, service quality, follow-up, or demand challenges, but further local evidence is required.

A Category 3 result indicates an access challenge despite relatively good continuation among children who enter the service.

## Sources

- WHO AFRO, Implementing the Reaching Every District Approach: https://www.afro.who.int/sites/default/files/2017-06/ivd-AFRO-RED-Guide_2008%20FINAL.pdf
- Uganda Learning Hub rapid assessment: https://zdlh.gavi.org/resources/report-rapid-assessment-zero-dose-situation-uganda
- Uganda Zero-Dose Landscape: https://zdlh.gavi.org/country-profiles/uganda

