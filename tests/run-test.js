const { calculateACM0014 } = require('./acm0014-calc.js');

const sampleData = {
    monitoringPeriodStart: "2026-10-01",
    monitoringPeriodEnd: "2026-10-31",
    wastewaterFlowVolume_m3: 150000,
    codInflowConcentration_mg_L: 3200,
    codRemovalEfficiency_BL: 0.75,
    electricityConsumption_kWh: 42000,
    gridEmissionFactor_tCO2_MWh: 0.65,
    biogasCaptured_m3: 85000,
    methaneFraction_percent: 62,
    flaringEfficiency: 0.92
};

console.log("\n=== ACM0014 Calculation Output ===");
console.table(calculateACM0014(sampleData));
console.log("==================================\n");
