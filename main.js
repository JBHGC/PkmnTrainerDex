/*
pkdex = data.id
name = data.species.name
spd = data.stats[0].base_stat
sp_def = data.stats[1].base_stat
sp_atk = data.stats[2].base_stat
def = data.stats[3].base_stat
atk = data.stats[4].base_stat
hp = data.stats[5].base_stat
*/

class Trainer {
  constructor(name, party) {
    this.name = name
    this.party = party
  }

}
const jason = new Trainer('Jason', ['778','306','385'])

class Pkmn {
  constructor(pkdex, name, hp, atk, def, sp_atk, sp_def, spd) {
    this.pkdex = pkdex
    this.name = name
    this.hp = hp
    this.atk = atk
    this.def = def
    this.sp_atk = sp_atk
    this.sp_def = sp_def
    this.spd = spd
  }
}

function loadPkmn(pknum) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText)
      console.log(typeof data)
      pokemon = new Pkmn(data.id, data.species.name, data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.stats[2].base_stat, data.stats[1].base_stat, data.stats[0].base_stat)
    }
  }
  xhttp.open('GET', `https://pokeapi.co/api/v2/pokemon/${pknum}`, true)
  xhttp.send()
}

loadPkmn(778)
