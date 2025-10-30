ItemEvents.modification(event => {
  event.modify('minecraft:potion', item => {
    item.maxStackSize = 16
    })
  event.modify('minecraft:splash_potion', item => {
    item.maxStackSize = 16
    })
  event.modify('minecraft:lingering_potion', item => {
    item.maxStackSize = 16
    })
})