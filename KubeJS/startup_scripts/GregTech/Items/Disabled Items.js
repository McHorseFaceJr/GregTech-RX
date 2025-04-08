ItemEvents.modification(event =>{
    event.modify('minecraft:wooden_pickaxe', item => {
      item.maxDamage = 0
      item.digSpeed = -1
      item.tier = tier => {
        tier.uses = 0
        tier.speed = 0
        tier.attackDamageBonus = 0
        tier.level = 0
    }
      })
    event.modify('minecraft:wooden_axe', item => {
      item.maxDamage = 0
      item.digSpeed = -1
      item.tier = tier => {
        tier.uses = 0
        tier.speed = 0
        tier.attackDamageBonus = 0
        tier.level = 0
    }
      })
    event.modify('minecraft:wooden_shovel', item => {
      item.maxDamage = 0
      item.digSpeed = -1
      item.tier = tier => {
        tier.uses = 0
        tier.speed = 0
        tier.attackDamageBonus = 0
        tier.level = 0
    }
      })
    event.modify('minecraft:wooden_hoe', item => {
      item.maxDamage = 0
      item.digSpeed = -1
      item.tier = tier => {
        tier.uses = 0
        tier.speed = 0
        tier.attackDamageBonus = 0
        tier.level = 0
    }
      })
})