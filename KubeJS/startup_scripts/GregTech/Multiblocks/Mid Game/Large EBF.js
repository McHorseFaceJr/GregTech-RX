GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_electric_blast_furnace_recipe_type')
         .category('multiblock')
         .setEUIO('in')
         .setMaxIOSize(16, 16, 8, 8)
         .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
         .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_electric_blast_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['large_electric_blast_furnace_recipe_type', 'electric_blast_furnace'])
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK))
        .appearanceBlock(GCyMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('HHHHH','AAAAA','AAAAA','AAAAA','AAAAA','HHHHH','HHHHH')
            .aisle('HHHHH','AA#AA','AA#AA','AA#AA','AA#AA','HB#BH','HHCHH')
            .aisle('HHHHH','A###A','A###A','A###A','A###A','H###H','HCCCH')
            .aisle('HHHHH','AA#AA','AA#AA','AA#AA','AA#AA','HB#BH','HHCHH')
            .aisle('HXHHH','AAAAA','AAAAA','AAAAA','AAAAA','HHHHH','HHHHH')
            
            .where('X', Predicates.controller(Predicates.blocks(definition.get())))
            .where("A", Predicates.blocks(GTBlocks.COIL_HSSG.get()))
            .where("B", Predicates.blocks('gtceu:electrolytic_cell'))
            .where("C", Predicates.blocks(GTBlocks.CASING_EXTREME_ENGINE_INTAKE.get()))
            .where("H", Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
        )
            .where('#', Predicates.any())
            .build())
            .workableCasingRenderer(('gtceu/textures/block/casings/gcym/reaction_safe_mixing_casing'), "gtceu:block/multiblock/assembly_line", false)
})
