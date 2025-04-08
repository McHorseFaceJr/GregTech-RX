GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('parts_assembling')
         .category('multiblock')
         .setEUIO('in')
         .setMaxIOSize(12, 12, 6, 6)
         .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
         .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('parts_assembler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('parts_assembling')
        .generator(true)
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK))
        .appearanceBlock(GCyMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('HBBBH','HCCCH','HCCCH')
            .aisle('HBBBH','B###H','HCDDH')
            .aisle('HBBBH','HcDDH','HCDDH')
            .where('c', Predicates.controller(Predicates.blocks(definition.get())))
            .where("B", Predicates.blocks("gtceu:solid_machine_casing"))
            .where("C", Predicates.blocks("gtceu:assembly_line_grating"))
            .where("D", Predicates.blocks("gtceu:tempered_glass"))
            .where("H",
                  Predicates.blocks('gtceu:large_scale_assembler_casing')
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
        )
            .where('#', Predicates.any())
            .build())
            .workableCasingRenderer(GTCEu.id("block/casings/gcym/large_scale_assembling_casing"),    
                            "gtceu:block/multiblock/gcym/large_assembler", false)
})
