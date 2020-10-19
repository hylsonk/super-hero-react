export const mappingToTable = (chracterList) => {
    return chracterList.map(char => ([
        char.id,
        char.name,
        char.powerstats.intelligence,
        char.powerstats.strength,
        char.powerstats.speed,
        char.powerstats.durability,
        char.powerstats.power,
        char.powerstats.combat,
    ]))
}