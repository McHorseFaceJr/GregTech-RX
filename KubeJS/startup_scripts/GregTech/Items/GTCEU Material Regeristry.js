GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('infinity')
        .ingot(6)
        .components()
        .color(0xEAF89).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)

    event.create('azbantium')
        .ingot(6)
        .components()
        .color(0x7d734d).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)

    event.create('coaxium')
        .plasma()
        .color(0x31d3f1)

    event.create('dilithium')
        .gem()
        .color(0x7d734d).iconSet(GTMaterialIconSet.RADIOACTIVE)

    event.create('space_time')
        .ingot(6)
        .components()
        .color(0x77AF3).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
})


GTCEuStartupEvents.materialModification(() => {
    GTMaterials.get('space_time').setFormula('*In4Nq2PO');
    GTMaterials.get('infinity').setFormula('*In');
    GTMaterials.get('azbantium').setFormula('Az');
    GTMaterials.get('dilithium').setFormula('Di');
    GTMaterials.get('certus_quartz').setFormula('Ct');
})
