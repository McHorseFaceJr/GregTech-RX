ServerEvents.recipes(event => {

    event.recipes.gtceu.nuclear_fission('uranium_energy')
        .itemInputs('kubejs:uranium_fuel_rod')
        .inputFluids('gtceu:distilled_water 100')
        .itemOutputs('kubejs:depleted_uranium_rod')
        .duration(600)
        .EUt(-4096);

    event.recipes.gtceu.nuclear_fission('plutonium_energy')
        .itemInputs('kubejs:plutonium_fuel_rod')
        .inputFluids('gtceu:distilled_water 100')
        .itemOutputs('kubejs:depleted_plutonium_rod')
        .duration(600)
        .EUt(-3925);

    event.recipes.gtceu.nuclear_fission('naquadah_energy')
        .itemInputs('kubejs:naquadah_fuel_rod')
        .inputFluids('gtceu:pcb_coolant 2400')
        .itemOutputs('kubejs:depleted_naquadah_rod')
        .duration(600)
        .EUt(-65536);
});