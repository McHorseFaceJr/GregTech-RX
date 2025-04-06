ServerEvents.recipes(event => {
event.shaped(
    Item.of('ae2:cell_component_1k', 1), // arg 1: output
    [
      'ABA',
      'BCB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: '#gtceu:circuits/lv',
      B: 'gtceu:certus_quartz_plate',  //arg 3: the mapping object
      C: '#gtceu:batteries/lv'
    }),
event.shaped(
    Item.of('ae2:cell_component_4k', 1), // arg 1: output
    [
      'ABA',
      'BCB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: '#gtceu:circuits/mv',
      B: 'ae2:cell_component_1k',  //arg 3: the mapping object
      C: '#gtceu:batteries/mv'
    }) ,
event.shaped(
    Item.of('ae2:cell_component_16k', 1), // arg 1: output
    [
      'ABA',
      'BCB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: '#gtceu:circuits/hv',
      B: 'ae2:cell_component_4k',  //arg 3: the mapping object
      C: '#gtceu:batteries/hv'
    }),
event.shaped(
    Item.of('ae2:cell_component_64k', 1), // arg 1: output
    [
      'ABA',
      'BCB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: '#gtceu:circuits/ev',
      B: 'ae2:cell_component_16k',  //arg 3: the mapping object
      C: '#gtceu:batteries/ev'
    }),
event.shaped(
    Item.of('ae2:cell_component_256k', 1), // arg 1: output
    [
      'ABA',
      'BCB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: '#gtceu:circuits/iv',
      B: 'ae2:cell_component_64k',  //arg 3: the mapping object
      C: '#gtceu:batteries/iv'
    }
  )
  event.shaped(
    Item.of('megacells:cell_component_1m', 1), // arg 1: output
    [
      'ABA',
      'BCB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: '#gtceu:circuits/luv',
      B: 'ae2:cell_component_256k',  //arg 3: the mapping object
      C: '#gtceu:batteries/luv'
    }
  )
  event.shaped(
    Item.of('megacells:cell_component_4m', 1), // arg 1: output
    [
      'ABA',
      'BCB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: '#gtceu:circuits/zpm',
      B: 'megacells:cell_component_1m',  //arg 3: the mapping object
      C: '#gtceu:batteries/zpm'
    }
  )
  event.shaped(
    Item.of('megacells:cell_component_16m', 1), // arg 1: output
    [
      'ABA',
      'BCB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: '#gtceu:circuits/uv',
      B: 'megacells:cell_component_4m',  //arg 3: the mapping object
      C: '#gtceu:batteries/uv'
    }
  )
  event.shaped(
    Item.of('megacells:cell_component_64m', 1), // arg 1: output
    [
      'ABA',
      'BCB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: '#gtceu:circuits/uv',
      B: 'megacells:cell_component_16m',  //arg 3: the mapping object
      C: '#gtceu:batteries/uv'
    }
  )
  event.shaped(
    Item.of('megacells:cell_component_256m', 1), // arg 1: output
    [
      'ABA',
      'BCB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: '#gtceu:circuits/uhv',
      B: 'megacells:cell_component_64m',  //arg 3: the mapping object
      C: '#gtceu:batteries/uhv'
    }
  )
  event.shaped(
    Item.of('megacells:cell_component_256m', 1), // arg 1: output
    [
      'ABA',
      'BCB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: '#gtceu:circuits/uhv',
      B: 'megacells:cell_component_64m',  //arg 3: the mapping object
      C: '#gtceu:batteries/uhv'
    }
  )
  event.shaped(
    Item.of('megacells:cell_component_256m', 1), // arg 1: output
    [
      'ABA',
      'BCB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: '#gtceu:circuits/uhv',
      B: 'megacells:cell_component_64m',  //arg 3: the mapping object
      C: '#gtceu:batteries/uhv'
    }
  )
  event.shaped(
    Item.of('megacells:cell_component_256m', 1), // arg 1: output
    [
      'ABA',
      'BCB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: '#gtceu:circuits/uhv',
      B: 'megacells:cell_component_64m',  //arg 3: the mapping object
      C: '#gtceu:batteries/uhv'
    }
  )
})