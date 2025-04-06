GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('nuclear_fission')
         .category('multiblock')
         .setEUIO('out')
         .setMaxIOSize(12, 12, 6, 6)
         .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
         .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('nuclear_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('nuclear_fission')
        .generator(true)
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK))
        .appearanceBlock(GCyMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('HHH','HHH','HHH')
            .aisle('HHH','HHH','HHH')
            .aisle('HHH','HCH','HHH')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where("H",
                  Predicates.blocks('gtceu:fusion_casing')
                    .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(3))
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1))
        )
            .where('#', Predicates.any())
            .build())
            .workableCasingRenderer(GTCEu.id("block/casings/fusion/fusion_casing"),
                            "gtceu:block/multiblock/fusion_reactor", false)
})
