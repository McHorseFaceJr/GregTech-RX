GTCEuStartupEvents.registry('gtceu:recipe_type', evnt => {
    evnt.create('starter_reactor_recipies')
        .category('hv')
        .setEUIO('out')
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)

})

GTCEuStartupEvents.registry('gtceu:machine', event => {
//Machine        
    event.create('starter_reactor', 'generator', GTValues.HV, GTValues.EV) // (1)
        .recipeType('starter_reactor_recipies')
        .tankScalingFunction(tier => tier * 1600)
        .workableTieredHullRenderer('gtceu:block/machines/chemical_reactor')
})