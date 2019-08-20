/* REFERENCE FOR MYSELF
pkdex = data.id
name = data.species.name
spd = data.stats[0].base_stat
sp_def = data.stats[1].base_stat
sp_atk = data.stats[2].base_stat
def = data.stats[3].base_stat
atk = data.stats[4].base_stat
hp = data.stats[5].base_stat
*/
var loaded = []
var checkSlots = document.getElementsByClassName('loaded')
var fillSlots = document.getElementsByClassName('pSlider')

class Trainer {
  constructor(name, party) {
    this.name = name
    this.party = party
  }
  all() {
    console.log(this.party)
  }
  add(newPkmn) {
    loadPkmn(newPkmn)
  }
  get(name) {
    for (var search of this.party) {
      if (search.name == name || search.pkdex == name){
      console.log(search)
    }
    }
  }
}

const jason = new Trainer('Jason', [778,306,385])
const joan = new Trainer('Joan', [74,150,356])
const esteban = new Trainer('Esteban', [,,])
console.log(jason)
partyIcons = document.getElementsByClassName('pkmnIcon')
partyNames = document.getElementsByClassName('pkmnText')
partySlider = document.getElementsByClassName('pSlider')

class Pkmn {
  constructor(pkdex, name, hp, atk, def, sp_atk, sp_def, spd, abilities, sprite, fullImage) {
    this.pkdex = pkdex
    this.name = name
    this.hp = hp
    this.atk = atk
    this.def = def
    this.sp_atk = sp_atk
    this.sp_def = sp_def
    this.spd = spd
    this.abilities = abilities
    this.sprite = sprite
    this.fullImage = fullImage
  }
}

function loadPkmn(pknum, trainer) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText)
      if (data.abilities.length == 1) {
        pokemon = new Pkmn(data.id, data.species.name.toUpperCase(), data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.stats[2].base_stat, data.stats[1].base_stat, data.stats[0].base_stat, [data.abilities[0].ability.name], `https://img.pokemondb.net/sprites/sun-moon/icon/${data.species.name}.png`, data.sprites.front_default)
        jason.party.push(pokemon)
      } else if (data.abilities.length == 2){
        pokemon = new Pkmn(data.id, data.species.name.toUpperCase(), data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.stats[2].base_stat, data.stats[1].base_stat, data.stats[0].base_stat, [data.abilities[0].ability.name, data.abilities[1].ability.name], `https://img.pokemondb.net/sprites/sun-moon/icon/${data.species.name}.png`, data.sprites.front_default)
        jason.party.push(pokemon)
      } else {
        pokemon = new Pkmn(data.id, data.species.name.toUpperCase(), data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.stats[2].base_stat, data.stats[1].base_stat, data.stats[0].base_stat, [data.abilities[0].ability.name, data.abilities[1].ability.name, data.abilities[2].ability.name], `https://img.pokemondb.net/sprites/sun-moon/icon/${data.species.name}.png`, data.sprites.front_default)
        jason.party.push(pokemon)
      }
      partyIcons[`${jason.party.length-1}`].setAttribute('src', `${jason.party[`${jason.party.length-1}`].sprite}`)
      partyNames[`${jason.party.length-1}`].innerText = `${jason.party[`${jason.party.length-1}`].name}`
    }
  }
  xhttp.open('GET', `https://pokeapi.co/api/v2/pokemon/${pknum}`, true)
  xhttp.send()
}

count = 0
for (let team in jason.party) {
  function jasonPkmn(team) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText)
      if (data.abilities.length == 1) {
        pokemon = new Pkmn(data.id, data.species.name.toUpperCase(), data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.stats[2].base_stat, data.stats[1].base_stat, data.stats[0].base_stat, [data.abilities[0].ability.name.charAt(0).toUpperCase() + data.abilities[0].ability.name.slice(1)], `https://img.pokemondb.net/sprites/sun-moon/icon/${data.species.name}.png`, data.sprites.front_default)
        jason.party.push(pokemon)
      } else if (data.abilities.length == 2){
        pokemon = new Pkmn(data.id, data.species.name.toUpperCase(), data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.stats[2].base_stat, data.stats[1].base_stat, data.stats[0].base_stat, [data.abilities[0].ability.name.charAt(0).toUpperCase() + data.abilities[0].ability.name.slice(1), data.abilities[1].ability.name.charAt(0).toUpperCase() + data.abilities[1].ability.name.slice(1)], `https://img.pokemondb.net/sprites/sun-moon/icon/${data.species.name}.png`, data.sprites.front_default)
        jason.party.push(pokemon)
      } else {
        pokemon = new Pkmn(data.id, data.species.name.toUpperCase(), data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.stats[2].base_stat, data.stats[1].base_stat, data.stats[0].base_stat, [data.abilities[0].ability.name.charAt(0).toUpperCase() + data.abilities[0].ability.name.slice(1), data.abilities[1].ability.name.charAt(0).toUpperCase() + data.abilities[1].ability.name.slice(1), data.abilities[2].ability.name.charAt(0).toUpperCase() + data.abilities[2].ability.name.slice(1)], `https://img.pokemondb.net/sprites/sun-moon/icon/${data.species.name}.png`, data.sprites.front_default)
        jason.party.push(pokemon)
      }
      jason.party.shift()
      partyIcons[0].setAttribute('src', `${jason.party[0].sprite}`)
      partyIcons[1].setAttribute('src', `${jason.party[1].sprite}`)
      partyIcons[2].setAttribute('src', `${jason.party[2].sprite}`)
      partyNames[0].innerText = `${jason.party[0].name}`
      partyNames[1].innerText = `${jason.party[1].name}`
      partyNames[2].innerText = `${jason.party[2].name}`
    }
  }
  xhttp.open('GET', `https://pokeapi.co/api/v2/pokemon/${jason.party[count]}`, true)
  xhttp.send()
  count++
}
}

jasonPkmn()
jasonPkmn()
jasonPkmn()
desktopScreenSize = 850;
cssPXMultiplier = 2.5;

  function check(id) {
    if (jason.party[id] == undefined) {
      newNum = prompt('Enter a Pokemon Name/Dex Number.')
      jason.add(newNum)
    }
    if (screen.width < desktopScreenSize){cssPXMultiplier = 1}
    document.getElementById('pkmnFullImage').setAttribute('src', `${jason.party[id].fullImage}`)
    document.getElementById('name').innerText = (`${jason.party[id].name}`)
    document.getElementById('hp').innerText = (`HP: ${jason.party[id].hp}`)
    document.getElementById('hp').setAttribute('style', `width: ${cssPXMultiplier*jason.party[id].hp}px`)
    document.getElementById('atk').innerText = (`ATK: ${jason.party[id].atk}`)
    document.getElementById('atk').setAttribute('style', `width: ${cssPXMultiplier*(jason.party[id].atk)}px`)
    document.getElementById('def').innerText = (`DEF: ${jason.party[id].def}`)
    document.getElementById('def').setAttribute('style', `width: ${cssPXMultiplier*(jason.party[id].def)}px`)
    document.getElementById('sp_atk').innerText = (`SPATK: ${jason.party[id].sp_atk}`)
    document.getElementById('sp_atk').setAttribute('style', `width: ${cssPXMultiplier*(jason.party[id].sp_atk)}px`)
    document.getElementById('sp_def').innerText = (`SPDEF: ${jason.party[id].sp_def}`)
    document.getElementById('sp_def').setAttribute('style', `width: ${cssPXMultiplier*(jason.party[id].sp_def)}px`)
    document.getElementById('spd').innerText = (`SPD: ${jason.party[id].spd}`)
    document.getElementById('spd').setAttribute('style', `width: ${cssPXMultiplier*(jason.party[id].spd)}px`)
    document.getElementsByClassName('ability')[0].innerText = (`${jason.party[id].abilities}`)
    partyIcons[id].setAttribute('src', `${jason.party[id].sprite}`)
    partyNames[id].innerText = `${jason.party[id].name}`
    // partyIcons[id].classList.add('disappearIcons')
    // partyNames[id].classList.add('disappearName')
    // partySlider[id].classList.add('disappearpSlider')
  }
