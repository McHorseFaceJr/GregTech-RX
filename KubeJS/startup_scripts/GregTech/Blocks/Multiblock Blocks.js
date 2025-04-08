StartupEvents.registry('block', event => {

  event.create('dimensional_bridge_generator')
    .displayName('Dimensional Bridge Generator')
    .textureAll("kubejs:block/dimensional_bridge_generator")

  event.create('tachyon_filter')
    .displayName('Tachyon Filter')
    .textureAll("kubejs:block/tachyon_filter")

  event.create('dimensional_tachyon_entangler')
    .displayName('Dimensional Tachyon Entangler')
    .textureAll("kubejs:block/dimensional_tachyon_scanner")

  event.create('dimensional_casing')
    .displayName('Dimensional Casing')
    .textureAll("kubejs:block/dimensional_casing")

})