LootJS.modifiers(event => {
    event.addLootTableModifier(/^minecraft:chests\/.*/)
        .replaceLoot('minecraft:wooden_pickaxe', 'gtceu:flint_pickaxe')
})