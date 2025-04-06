ServerEvents.recipes(event =>{
    event.recipes.gtceu.assembler('dank_7')
        .itemInputs('16x gtceu:quantum_star', 'megacells:portable_item_cell_4m', '64x gtceu:tungsten_steel_crate', '32x gtceu:nether_star_plate', '64x gtceu:naquadah_alloy_frame')
        .inputFluids('gtceu:soldering_alloy 250')
        .itemOutputs(Item.of('dankstorage:dank_7'))
        .duration(60)
        .EUt(45000);

    event.recipes.gtceu.assembler('quantum_eye')
        .itemInputs('16x ae2:quantum_entangled_singularity', '32x gtceu:echo_shard_plate')
        .inputFluids('gtceu:radon 475')
        .itemOutputs(Item.of('gtceu:quantum_eye'))
        .duration(60)
        .EUt(640);

    event.recipes.gtceu.assembler('tempad_frame')
        .itemInputs('32x kubejs:hawking_radiation_proof_plate', '16x gtceu:space_time_gear', '64x gtceu:gravi_star', '128x gtceu:neutronium_frame')
        .inputFluids('gtceu:molten_naquadah_alloy 45000000')
        .itemOutputs(Item.of('kubejs:tempad_frame'))
        .duration(12000)
        .EUt(4500000);

    event.recipes.gtceu.assembler('atomic_casing')
        .itemInputs('4x gtceu:neutronium_frame', '16x gtceu:fusion_casing_mk3', '32x gtceu:hastelloy_c_276_block')
        .inputFluids('gtceu:soldering_alloy 64000')
        .itemOutputs(Item.of('gtceu:atomic_casing'))
        .duration(4800)
        .EUt(24000);

    event.recipes.gtceu.assembler('radiation_proof_plate')
        .itemInputs('16x gtceu:double_lead_plate', '8x gtceu:thorium_plate', '32x gtceu:fusion_casing')
        .inputFluids('gtceu:molten_tungsten_carbide 2400')
        .itemOutputs('kubejs:radiation_proof_plate')
        .duration(265)
        .EUt(240);

    event.recipes.gtceu.assembler('hawking_radiation_proof_plate')
        .itemInputs('256x kubejs:radiation_proof_plate', '64x #gtceu:circuits/uv', '512x gtceu:fusion_casing_mk3', '32x gtceu:double_uranium_rhodium_dinaquadide_plate')
        .inputFluids('gtceu:molten_naquadah_alloy 6400')
        .itemOutputs(Item.of('2x kubejs:hawking_radiation_proof_plate'))
        .duration(16000)
        .EUt(260000);

    event.recipes.gtceu.assembler('quantum_ring')
        .itemInputs('16x kubejs:radiation_proof_plate', '32x gtceu:carbon_fiber_plate', '7x #gtceu:batteries/iv', '5x gtceu:iv_field_generator', '5x gtceu:iv_emitter', '5x gtceu:iv_sensor', '32x ae2:quantum_entangled_singularity')
        .itemOutputs('ae2:quantum_ring')
        .duration(265)
        .EUt(240);
        
    event.recipes.gtceu.assembler('quantum_link')
        .itemInputs('4x gtceu:quantum_processor', '32x gtceu:fusion_glass', '24x ae2:quartz_vibrant_glass', '12x ae2:quantum_ring')
        .itemOutputs('ae2:quantum_link')
        .duration(265)
        .EUt(640);

    event.recipes.gtceu.assembler('draconium_core')
        .itemInputs('32x #gtceu:batteries/ev', '4x kubejs:radiation_proof_plate', '4x gtceu:dense_tungsten_steel_plate', '16x draconicevolution:draconium_block')
        .itemOutputs('draconicevolution:draconium_core')
        .duration(120)
        .EUt(64000);

    event.recipes.gtceu.assembler('wyvern_core')
        .itemInputs('32x #gtceu:batteries/iv', '64x gtceu:double_hsse_plate', '64x gtceu:double_hsse_plate', '4x draconicevolution:wyvern_relay_crystal', '16x draconicevolution:draconium_core')
        .itemOutputs('draconicevolution:draconium_core')
        .duration(240)
        .EUt(360000);
})