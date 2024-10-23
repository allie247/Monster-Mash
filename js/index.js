
function Witch(name, frogToes, newtEyes, batWools) {
    this.name = name;
    this.frogToes = frogToes;
    this.newtEyes = newtEyes;
    this.batWools = batWools;
}

function addMonsters() {
    var monster1 = new Witch('Agatha', 4, 12, 36);
    var monster2 = new Witch('Bellatrix', 6, 18, 54);
    var monster3 = new Witch('Maleficent', 2, 6, 18);

    const paragraph1 = document.getElementById('monster-1');
    paragraph1.textContent = `${monster1.name} has ${monster1.frogToes} frog toes, 
    ${monster1.newtEyes} newt eyes, and ${monster1.batWools} bat wools.`;
    const paragraph2 = document.getElementById('monster-2');
    paragraph2.textContent = `${monster2.name} has ${monster2.frogToes} frog toes, 
    ${monster2.newtEyes} newt eyes, and ${monster2.batWools} bat wools.`;
    const paragraph3 = document.getElementById('monster-3');
    paragraph3.textContent = `${monster3.name} has ${monster3.frogToes} frog toes, 
    ${monster3.newtEyes} newt eyes, and ${monster3.batWools} bat wools.`;
}