'use strict';

const ana = {
  ime: 'Ana',
  prezime: 'Kovačević',
  godina_rodjenja: 2005,
  pol: 'ženski',
  ocjene: {
    matematika: 4,
    maternji_jezik: 5,
    engleski_jezik: 3,
    biologija: 4,
    likovna_kultura: 5,
  },
  izracunajProsjek: function () {
    let sum = 0;
    let brojPredmeta = 0;

    for (const [key, value] of Object.entries(this.ocjene)) {
      sum += value;
      brojPredmeta++;
    }
    return sum / brojPredmeta;
  },
};

const marko = {
  ime: 'Marko',
  prezime: 'Petrović',
  godina_rodjenja: 2006,
  pol: 'muški',
  ocjene: {
    matematika: 5,
    maternji_jezik: 4,
    engleski_jezik: 5,
    biologija: 3,
    likovna_kultura: 4,
  },
  izracunajProsjek: function () {
    let sum = 0;
    let brojPredmeta = 0;

    for (const [key, value] of Object.entries(this.ocjene)) {
      sum += value;
      brojPredmeta++;
    }
    return sum / brojPredmeta;
  },
};
const elena = {
  ime: 'Elena',
  prezime: 'Jovanović',
  godina_rodjenja: 2005,
  pol: 'ženski',
  ocjene: {
    matematika: 3,
    maternji_jezik: 5,
    engleski_jezik: 4,
    biologija: 4,
    likovna_kultura: 4,
  },
  izracunajProsjek: function () {
    let sum = 0;
    let brojPredmeta = 0;

    for (const [key, value] of Object.entries(this.ocjene)) {
      sum += value;
      brojPredmeta++;
    }
    return sum / brojPredmeta;
  },
};
const ivan = {
  ime: 'Ivan',
  prezime: 'Popović',
  godina_rodjenja: 2007,
  pol: 'muški',
  ocjene: {
    matematika: 5,
    maternji_jezik: 4,
    engleski_jezik: 5,
    biologija: 5,
    likovna_kultura: 3,
  },
  izracunajProsjek: function () {
    let sum = 0;
    let brojPredmeta = 0;

    for (const [key, value] of Object.entries(this.ocjene)) {
      sum += value;
      brojPredmeta++;
    }
    return sum / brojPredmeta;
  },
};
const jelena = {
  ime: 'Jelena',
  prezime: 'Nikolić',
  godina_rodjenja: 2006,
  pol: 'ženski',
  ocjene: {
    matematika: 4,
    maternji_jezik: 3,
    engleski_jezik: 5,
    biologija: 4,
    likovna_kultura: 4,
  },
  izracunajProsjek: function () {
    let sum = 0;
    let brojPredmeta = 0;

    for (const [key, value] of Object.entries(this.ocjene)) {
      sum += value;
      brojPredmeta++;
    }
    return sum / brojPredmeta;
  },
};
const stefan = {
  ime: 'Stefan',
  prezime: 'Stojanović',
  godina_rodjenja: 2007,
  pol: 'muški',
  ocjene: {
    matematika: 5,
    maternji_jezik: 4,
    engleski_jezik: 5,
    biologija: 3,
    likovna_kultura: 5,
  },
  izracunajProsjek: function () {
    let sum = 0;
    let brojPredmeta = 0;

    for (const [key, value] of Object.entries(this.ocjene)) {
      sum += value;
      brojPredmeta++;
    }
    return sum / brojPredmeta;
  },
};
const milica = {
  ime: 'Milica',
  prezime: 'Simić',
  godina_rodjenja: 2005,
  pol: 'ženski',
  ocjene: {
    matematika: 4,
    maternji_jezik: 5,
    engleski_jezik: 4,
    biologija: 3,
    likovna_kultura: 4,
  },
  izracunajProsjek: function () {
    let sum = 0;
    let brojPredmeta = 0;

    for (const [key, value] of Object.entries(this.ocjene)) {
      sum += value;
      brojPredmeta++;
    }
    return sum / brojPredmeta;
  },
};
const nikola = {
  ime: 'Nikola',
  prezime: 'Pavlović',
  godina_rodjenja: 2006,
  pol: 'muški',
  ocjene: {
    matematika: 3,
    maternji_jezik: 4,
    engleski_jezik: 5,
    biologija: 5,
    likovna_kultura: 4,
  },
  izracunajProsjek: function () {
    let sum = 0;
    let brojPredmeta = 0;

    for (const [key, value] of Object.entries(this.ocjene)) {
      sum += value;
      brojPredmeta++;
    }
    return sum / brojPredmeta;
  },
};
const sara = {
  ime: 'Sara',
  prezime: 'Ilić',
  godina_rodjenja: 2007,
  pol: 'ženski',
  ocjene: {
    matematika: 5,
    maternji_jezik: 3,
    engleski_jezik: 5,
    biologija: 4,
    likovna_kultura: 3,
  },
  izracunajProsjek: function () {
    let sum = 0;
    let brojPredmeta = 0;

    for (const [key, value] of Object.entries(this.ocjene)) {
      sum += value;
      brojPredmeta++;
    }
    return sum / brojPredmeta;
  },
};
const luka = {
  ime: 'Luka',
  prezime: 'Đorđević',
  godina_rodjenja: 2005,
  pol: 'muški',
  ocjene: {
    matematika: 4,
    maternji_jezik: 4,
    engleski_jezik: 4,
    biologija: 5,
    likovna_kultura: 5,
  },
  izracunajProsjek: function () {
    let sum = 0;
    let brojPredmeta = 0;

    for (const [key, value] of Object.entries(this.ocjene)) {
      sum += value;
      brojPredmeta++;
    }
    return sum / brojPredmeta;
  },
};

const ucenici = [
  ana,
  marko,
  elena,
  ivan,
  jelena,
  stefan,
  milica,
  nikola,
  sara,
  luka,
];
/////////////////////////////////

for (const ucenik of ucenici) {
  ucenik.prosjek = ucenik.izracunajProsjek();
  ucenik.uspjeh = odrediUspjeh(ucenik.prosjek, ucenik.pol);
  console.log(`${ucenik.ime} ${ucenik.prezime} je ${ucenik.uspjeh}.`);
}

console.log(ucenici);

/////////////////////////
function odrediUspjeh(prosjek, pol) {
  if (prosjek === 5) {
    return 'luca';
  } else if (prosjek >= 4.5) {
    return pol === 'ženski' ? 'odlicna' : 'odlican';
  } else if (prosjek >= 3.5) {
    return pol === 'ženski' ? 'vrlo dobra' : 'vrlo dobar';
  } else if (prosjek >= 2.5) {
    return pol === 'ženski' ? 'dobra' : 'dobar';
  } else if (prosjek >= 2) {
    return pol === 'ženski' ? 'dovoljna' : 'dovoljan';
  } else {
    return pol === 'ženski' ? 'nedovoljna' : 'nedovoljan';
  }
}

////////////////////////////

function statistikaUspjeha(ucenici) {
  let odlican = 0;
  let vrlo_dobar = 0;
  let dobar = 0;
  let dovoljan = 0;
  let nedovoljan = 0;

  for (const ucenik of ucenici) {
    const prosjek = ucenik.prosjek;

    if (prosjek === 5) {
      odlican++;
    } else if (prosjek >= 4.5) {
      odlican++;
    } else if (prosjek >= 3.5) {
      vrlo_dobar++;
    } else if (prosjek >= 2.5) {
      dobar++;
    } else if (prosjek >= 2) {
      dovoljan++;
    } else {
      nedovoljan++;
    }
  }

  const rezultati = {
    odličan: odlican,
    vrlodobar: vrlo_dobar,
    dobar: dobar,
    dovoljan: dovoljan,
    nedovoljan: nedovoljan,
  };

  return rezultati;
}

const statistika = statistikaUspjeha(ucenici);
console.log(statistika);

//////////////////////////////////

function sortirajUcenike(ucenici) {
  ucenici.sort(({ prezime: prezime1 }, { prezime: prezime2 }) =>
    prezime1.localeCompare(prezime2)
  );
  return ucenici;
}

const sortiraniUcenici = sortirajUcenike(ucenici);
console.log(sortiraniUcenici);
