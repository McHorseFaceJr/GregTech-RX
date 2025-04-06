ServerEvents.recipes(event =>{

    event.recipes.gtceu.singularity_compression("diamond_singularity")
    .itemInputs('64x mysticalagriculture:diamond_essence', '64x ae2:singularity', '128x quark:diamond_heart')
    .itemOutputs(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}'))
    .duration(250)
    .EUt(25000);
    
    });
