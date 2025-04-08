BlockEvents.modification(event =>{
    event.modify('draconicevolution:end_draconium_ore', block =>{
        block.destroy
    })
    event.modify('draconicevolution:nether_draconium_ore', block =>{
        block.destroy
    })
    event.modify('draconicevolution:overworld_draconium_ore', block =>{
        block.destroy
    })
    event.modify('draconicevolution:deepslate_draconium_ore', block =>{
        block.destroy
    })
})

