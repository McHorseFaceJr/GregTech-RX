ServerEvents.recipes(event =>{

event.recipes.gtceu.parts_assembling("32x_lv_electric_motor")
.itemInputs('64x gtceu:tin_single_cable', '64x gtceu:iron_rod', '32x gtceu:magnetic_iron_rod', '128x gtceu:copper_single_wire')
.itemOutputs('32x gtceu:lv_electric_motor')
.duration(200)
.EUt(30);

});