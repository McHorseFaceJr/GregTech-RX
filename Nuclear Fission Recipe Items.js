StartupEvents.registry('item', event => {

  event.create('empty_fuel_rod')
  .texture('kubejs:item/empty_fuel_rod')
  .displayName('Fuel Rod (Empty)')


  event.create('naquadah_fuel_rod')
  .texture('kubejs:item/naquadah_fuel_rod')
  .displayName('Fuel Rod (Naquadah)')
  .glow(true)
    event.create('depleted_naquadah_rod')
        .texture('kubejs:item/depleted_naquadah_rod')
        .displayName('Depleted Fuel Rod (Naquadah)')

  event.create('plutonium_fuel_rod')
  .texture('kubejs:item/plutonium_fuel_rod')
  .displayName('Fuel Rod (Plutonium)')
  .glow(true)
      event.create('depleted_plutonium_rod')
          .texture('kubejs:item/depleted_plutonium_rod')
          .displayName('Depleted Fuel Rod (Plutonium)')

  event.create('uranium_fuel_rod')
  .texture('kubejs:item/uranium_fuel_rod')
  .displayName('Fuel Rod (Uranium)')
  .glow(true)
      event.create('depleted_uranium_rod')
          .texture('kubejs:item/depleted_uranium_rod')
          .displayName('Depleted Fuel Rod (Uranium)')

})
