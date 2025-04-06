GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('draconic_crafting')
         .category('multiblock')
         .setEUIO('in')
         .setMaxIOSize(12, 12, 6, 6)
         .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
         .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('draconic_crafting_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('draconic_crafting')
        .generator(true)
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_HSSE_STURDY)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('HH#HH','h#P#h','hPPPh','P###P','P###P','P###P','P###P','P###P','P###P','P###P','#PPP#','##P##')
            .aisle('H###H','#PPP#','PhhhP','#hhh#','#hGh#','#hGh#','#hGh#','#hGh#','#hGh#','#hhh#','PhdhP','#PPP#')
            .aisle('#####','PPPPP','PhhhP','#hdh#','#GdG#','#GAG#','#GCG#','#GAG#','#GdG#','#hdh#','PdddP','PPPPP')
            .aisle('H###H','#PPP#','PhhhP','#hch#','#hGh#','#hGh#','#hGh#','#hGh#','#hGh#','#hhh#','PhdhP','#PPP#')
            .aisle('HH#HH','h#P#h','hPPPh','P###P','P###P','P###P','P###P','P###P','P###P','P###P','#PPP#','##P##')
            .where('c', Predicates.controller(Predicates.blocks(definition.get())))
            .where("P", Predicates.blocks('gtceu:plascrete'))
            .where('C', Predicates.blocks('draconicevolution:crafting_core'))
            .where("A", Predicates.air)
            .where("h", Predicates.blocks('gtceu:sturdy_machine_casing'))
            .where("d", Predicates.blocks('draconicevolution:draconium_block'))
            .where("G",Predicates.blocks('gtceu:tempered_glass'))
            .where("H",
                  Predicates.blocks('gtceu:sturdy_machine_casing')
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
        )
            .where('#', Predicates.any())
            .build())
            .workableCasingRenderer(GTCEu.id("block/casings/gcym/large_scale_assembling_casing"),    
                            "gtceu:block/multiblock/gcym/large_assembler", false)
})
