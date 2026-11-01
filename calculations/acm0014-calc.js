function calculateACM0014(input) {
    const Bo = 0.25;         // kg CH4 / kg COD (IPCC default)
    const MCF_BL = 0.8;      // Methane Correction Factor for deep anaerobic lagoons
    const GWP_CH4 = 28;      // Global Warming Potential of CH4
    const rho_CH4 = 0.00067; // Methane density (ton/m3)

    // Baseline Emissions
    const COD_in_kg_m3 = input.codInflowConcentration_mg_L / 1000;
    const total_COD_kg = input.wastewaterFlowVolume_m3 * COD_in_kg_m3;
    const methane_baseline_ton = (total_COD_kg * input.codRemovalEfficiency_BL * Bo * MCF_BL) / 1000;
    const BE_y = methane_baseline_ton * GWP_CH4;
    
    // Project Emissions (Electricity)
    const PE_electricity = (input.electricityConsumption_kWh / 1000) * input.gridEmissionFactor_tCO2_MWh;
    
    // Project Emissions (Flaring inefficiency)
    let PE_flare = 0;
    if (input.biogasCaptured_m3 > 0) {
        const methane_volume_m3 = input.biogasCaptured_m3 * (input.methaneFraction_percent / 100);
        const unburned_methane_ton = methane_volume_m3 * (1 - input.flaringEfficiency) * rho_CH4;
        PE_flare = unburned_methane_ton * GWP_CH4;
    }

    const PE_y = PE_electricity + PE_flare;
    
    // Net Emission Reductions
    const ER_y = Math.max(0, BE_y - PE_y);

    return {
        baselineEmissions_tCO2e: Number(BE_y.toFixed(2)),
        projectEmissions_tCO2e: Number(PE_y.toFixed(2)),
        netEmissionReductions_tCO2e: Number(ER_y.toFixed(2)),
        tokensToMint: Math.floor(ER_y)
    };
}

module.exports = { calculateACM0014 };
