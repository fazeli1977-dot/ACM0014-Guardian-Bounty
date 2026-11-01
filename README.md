# ACM0014 - Treatment of Wastewater (Hedera Guardian)

## Project Overview
This repository contains the digitized policy, schemas, and calculation logic for the UNFCCC **ACM0014** methodology (Treatment of wastewater) built for the **Hedera Guardian** platform. This project is submitted for the DLT Earth Methodologies Bounty Programme.

## Directory Structure
- `/schemas/`: JSON-LD schemas for Project Onboarding and MRV (Monitoring, Reporting, and Verification).
- `/calculations/`: Node.js based calculation engine for Baseline Emissions, Project Emissions, and Emission Reductions.
- `/workflow/`: The main `policy-config.json` that connects roles, schemas, and token minting in the Guardian.
- `/tests/`: Local test scripts to verify the mathematical logic before deploying to the Guardian network.

## Methodology & Math (ACM0014)
The calculation engine computes Net Emission Reductions (ER_y) by subtracting Project Emissions (PE_y) from Baseline Methane Emissions (BE_y).

1. **Baseline Emissions:**
   BE_y = Total_COD * COD_Removal_Efficiency * B_o * MCF * GWP_CH4
2. **Project Emissions:**
   PE_y = Electricity_Grid_Emissions + Unburned_Flaring_Emissions
3. **Net Emission Reductions:**
   ER_y = BE_y - PE_y

## How to Test Locally
Run the calculation engine using Node.js:
```bash
node tests/run-test.js
