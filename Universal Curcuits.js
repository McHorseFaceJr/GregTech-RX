StartupEvents.registry('item', event => {
const circuitTiers = ["lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv"];

let tier_capitalized;
circuitTiers.forEach(tier => {
    if(tier == 'opv') {
        tier_capitalized = 'OpV';
    }
    else if (tier == 'luv') {
        tier_capitalized = "LuV";
    }
    else {
        tier_capitalized = tier.toUpperCase();
    };
    event.create(`${tier}_universal_circuit`)
        .texture(`kubejs:item/universal_circuits/${tier}_universal`)
        .displayName(`${tier_capitalized} Universal Circuit`);
});
})