onEvent('recipes', e => {
  const craftingShapes = [
    //vertical
    ['  C', '  C', '  C'],
    [' C ', ' C ', ' C '],
    ['C  ', 'C  ', 'C  '],
    //horizontal 
    ['CCC', '   ', '   '],
    ['   ', 'CCC', '   '],
    ['   ', '   ', 'CCC'],
    //diagonal
    ['  C', ' C ', 'C  '],
    ['C  ', ' C ', '  C'],
    //misc
    ['  C', ' C ', ' C '],
    [' C ', 'C  ', 'C  '],
    ['  C', 'CC ', '   '],
    ['   ', '  C', 'CC '],
    ['  C', '  C', ' C '],
    [' C ', ' C ', 'C  '],
    ['C C', ' C ', '   '],
    ['   ', 'C C', ' C '],
    [' C ', ' C ', '  C'],
    ['C  ', 'C  ', ' C '],
    ['   ', ' C ', 'C C'],
    [' C ', 'C C', '   '],
    ['  C', ' C ', '  C'],
    [' C ', 'C  ', ' C '],
    ['   ', 'CC ', '  C'],
    ['CC ', '  C', '   ']
  ] // 25 now
  const dyes = []
  const botaniaFlowers = []
  const honey = ['resourcefulbees:honey', 'cyclic:honey', 'create:honey']
  const customHoney = ['resourcefulbees:rainbow_honey', 'resourcefulbees:catnip_honey']

  function shapedRecipe(results, craftingItem, itemCount) {
    const maxLength = Math.min(craftingShapes.length, results.length)
    for (let i = 0; i < maxLength; i++) {
      e.recipes.cucumber.shaped_no_mirror({
        pattern: craftingShapes[i],
        key: { C: { item: craftingItem } },
        result: { item: results[i], count: itemCount }
      })
    }
  }

  colors.forEach(color => {
    dyes.push(`minecraft:${color}_dye`)
    botaniaFlowers.push(`botania:${color}_mystical_flower`)
  })

  e.recipes.thermal.chiller(`resourcefulbees:starry_honey_block`, fluid.of(`resourcefulbees:starry_honey`, 1000))

  honey.forEach(type => e.recipes.thermal.chiller('minecraft:honey_block', fluid.of(`${type}`, 1000)))
  customHoney.forEach(type => {
    e.recipes.thermal.chiller(`${type}_block`, fluid.of(`${type}`, 1000))
    e.shaped('compressium:honey_1', ['AAA', 'AAA', 'AAA'], { A: `${type}_block` })
  })

  shapedRecipe(dyes, `resourcefulbees:rainbow_honey_block`, 32)
  shapedRecipe(botaniaFlowers, `resourcefulbees:mystical_honeycomb`, 2)
  shapedRecipe(botaniaFlowers, `resourcefulbees:mystical_honeycomb_block`, 18)
  shapedRecipe([`minecraft:wheat`, `minecraft:beetroot`, `minecraft:carrot`, `minecraft:potato`, `minecraft:melon_slice`, `minecraft:pumpkin`, `minecraft:bamboo`, `minecraft:sweet_berries`, `minecraft:brown_mushroom`, `minecraft:red_mushroom`], `resourcefulbees:cropy_honeycomb`, 3)
  shapedRecipe([`minecraft:wheat`, `minecraft:beetroot`, `minecraft:carrot`, `minecraft:potato`, `minecraft:melon_slice`, `minecraft:pumpkin`, `minecraft:bamboo`, `minecraft:sweet_berries`, `minecraft:brown_mushroom`, `minecraft:red_mushroom`], `resourcefulbees:cropy_honeycomb_block`, 27)
  shapedRecipe([`minecraft:porkchop`, `minecraft:beef`, `minecraft:cod`, `minecraft:salmon`, `minecraft:chicken`, `minecraft:rabbit`, `minecraft:mutton`], `resourcefulbees:kobee_beef_honeycomb`, 3)
  shapedRecipe([`minecraft:porkchop`, `minecraft:beef`, `minecraft:cod`, `minecraft:salmon`, `minecraft:chicken`, `minecraft:rabbit`, `minecraft:mutton`], `resourcefulbees:kobee_beef_honeycomb_block`, 27)
  shapedRecipe([`minecraft:andesite`, `minecraft:diorite`, `minecraft:granite`, `minecraft:basalt`, `create:gabbro`, `create:dolomite`, `create:weathered_limestone`, `create:limestone`, `create:scoria`, `create:dark_scoria`, `quark:brimstone`, `quark:slate`, `quark:jasper`, `quark:limestone`, `quark:basalt`, `astralsorcery:marble_raw`], `resourcefulbees:stan_honeycomb`, 2)
  shapedRecipe([`minecraft:andesite`, `minecraft:diorite`, `minecraft:granite`, `minecraft:basalt`, `create:gabbro`, `create:dolomite`, `create:weathered_limestone`, `create:limestone`, `create:scoria`, `create:dark_scoria`, `quark:brimstone`, `quark:slate`, `quark:jasper`, `quark:limestone`, `quark:basalt`, `astralsorcery:marble_raw`], `resourcefulbees:stan_honeycomb_block`, 18)
})
