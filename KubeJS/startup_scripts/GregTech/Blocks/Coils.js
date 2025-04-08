StartupEvents.registry('block', event => {
        event.create('infinity_coil_block', 'gtceu:coil')
        .temperature(12400)
        .level(9)
        .energyDiscount(12)
        .tier(10)
        .coilMaterial(() => GTMaterials.get('infinity'))
        .hardness(5)
        .soundType('metal')
        .requiresTool(true)
        .material('metal');

        event.create('space_time_coil_block', 'gtceu:coil')
        .temperature(24800)
        .level(10)
        .energyDiscount(14)
        .tier(11)
        .coilMaterial(() => GTMaterials.get('space_time'))
        .hardness(5)
        .soundType('metal')
        .requiresTool(true)
        .material('metal');
})