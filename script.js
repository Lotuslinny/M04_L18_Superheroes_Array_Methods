//console.log('hallo');
var superheroes =
  [
    {
      "name": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "weight": "210"
    },
    {
      "name": "Superman",
      "publisher": "DC Comics",
      "alter_ego": "Kal-El",
      "first_appearance": "Action Comics #1",
      "weight": "220"
    },
    {
      "name": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "weight": "195"
    },
    {
      "name": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
      "first_appearance": "All-American Comics #16",
      "weight": "186"
    },
    {
      "name": "Green Arrow",
      "publisher": "DC Comics",
      "alter_ego": "Oliver Queen",
      "first_appearance": "All-American Comics #16",
      "weight": "195"
    },
    {
      "name": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "165"
    },
    {
      "name": "Blue Beetle",
      "publisher": "DC Comics",
      "alter_ego": "Dan Garret",
      "first_appearance": "Mystery Men Comics #1",
      "weight": "145"
    },
    {
      "name": "Spider Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "weight": "167"
    },
    {
      "name": "Captain America",
      "publisher": "Marvel Comics",
      "alter_ego": "Steve Rogers",
      "first_appearance": "Captain America Comics #1",
      "weight": "220"
    },
    {
      "name": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "weight": "250"
    },
    {
      "name": "Thor",
      "publisher": "Marvel Comics",
      "alter_ego": "Thor Odinson",
      "first_appearance": "Journey into Myster #83",
      "weight": "200"
    },
    {
      "name": "Hulk",
      "publisher": "Marvel Comics",
      "alter_ego": "Bruce Banner",
      "first_appearance": "The Incredible Hulk #1",
      "weight": "1400"
    },
    {
      "name": "Wolverine",
      "publisher": "Marvel Comics",
      "alter_ego": "James Howlett",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "200"
    },
    {
      "name": "Daredevil",
      "publisher": "Marvel Comics",
      "alter_ego": "Matthew Michael Murdock",
      "first_appearance": "Daredevil #1",
      "weight": "200"
    },
    {
      "name": "Silver Surfer",
      "publisher": "Marvel Comics",
      "alter_ego": "Norrin Radd",
      "first_appearance": "The Fantastic Four #48",
      "weight": "unknown"
    }
  ];
//console.log('doei');

// 1 Maak een array van alle superhelden namen
const getName = superheroes.map(superhero => superhero = superhero.name);
console.log('Hallooooo');
console.log("getName: " + getName);

// pak de property name van elk element van de array.
/* Advies Mark: in een object heb je dus key value paren.
Bijv. object = { naam: "Batman"}. Om "Batman" in dit geval te krijgen, kun je via het object naar een key vragen. Dus bijv. object.naam.
De key is naam en de value is "Batman".
 */


//2 Maak een array van alle "lichte" superhelden (< 190 pounds)
// Dit is een functie om alle values aan gewicht te krijgen.
// ik wil een functie die ervoor zorgt dat ik alleen het gewicht krijg onder de 190 pond. Dat is alleen die <190);
const getSuperHeroLightWeight = superheroes.filter(superhero => superhero = superhero.weight < 190)
  /* Hier De map() methode maakt een nieuwe array aan met als inhoud het resultaat van het aanroepen 
  van de meegegeven functie op elk van de elementen uit de originele array. // ik wil een functie die 
  zorgt dat ik de namen krijg van diegene waarvan het gewicht onder de 190 pond is.
   */
  .map(superhero => superhero = superhero.name)
// Geef het resultaat terug.
console.log("getlightweight:" + getSuperHeroLightWeight);

//3.Maak een array met de namen van de superhelden die 200 pounds wegen
const getSuperHeroWeight200 = superheroes.filter(superhero => superhero = superhero.weight == 200)
  /* Hier De map() methode maakt een nieuwe array aan met als inhoud het resultaat van het aanroepen 
  van de meegegeven functie op elk van de elementen uit de originele array. // ik wil een functie die 
  zorgt dat ik de namen krijg van diegene waarvan het gewicht onder de 190 pond is.
   */
  .map(superhero => superhero = superhero.name)
// Geef het resultaat terug.
console.log("getlightweight:" + getSuperHeroWeight200);

//4 Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad
const getFirstAppearrances = superheroes
  .map(superhero => superhero = superhero.first_appearance)

console.log("getFirstAppearrances:" + getFirstAppearrances);

/* 5. Maak een array met alle superhelden van DC Comics. */

const getSuperHeroDCComics = superheroes.filter(superhero => superhero = superhero.publisher == 'DC Comics')
  //console.log('getSuperHeroDCComics:' + getSuperHeroDCComics);
  .map(superhero => superhero = superhero.name);
console.log('getSuperHeroDCComics:' + getSuperHeroDCComics);

/* Is dat gelukt?
Herhaal de bovenstaande functie dan en maak ook een array met alle
superhelden van Marvel Comics.
 */
const getSuperHeroMarvelComics = superheroes.filter(superhero => superhero = superhero.publisher == "Marvel Comics")
  //console.log('getSuper:' + getSuperHeroDCComics);
  .map(superhero => superhero = superhero.name);
console.log('getSuperHeroMarvelComics:' + getSuperHeroMarvelComics);

/*6 Tel het gewicht van alle superhelden van DC Comics bij elkaar op.
Let op! Conditionals to the rescue! Het gewicht dat je ziet in de movieDatabase,
van welk datatype is dat? Een nummer? Of een string? Oh ja, en hebben alle
superhelden wel een gewicht?
 */
// stap 1 pak de DC Commics value.

const DCComicsWeigth = superheroes
  .filter(superhero =>
    superhero = superhero.publisher == 'DC Comics')
  // stap 2 pak daarvan het gewicht.  
  .map(superhero => superhero = superhero.weight)
//console.log("hallo" + DCComicsWeigth);
//stap 3 reduce alle gewicht van superheroes van dc Comics
const Red = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
console.log(DCComicsWeigth.reduce(Red));

//7 Doe hetzelfde met alle superhelden van Marvel Comics
/*
superheroesFiltered = superheroes.filter(bla);
superheroesFilteredandMapped = superheroesFiltered.map(bla);
const DCComicsWeigth = superheroesFilteredandMapped;
*/
// 4. de constante superWeigth krijgt de waarde van de array superheroesFilteredMap.
const superWeigthMarvel =
  // 1. array superheroes heeft ALLE superhelden
  superheroes
    // 2. filter creeert een nieuwe array (deze zie je niet, maar noemen we even superheroesFiltered),
    // met daarin alleen superhelden van dc en marvel die geen unkown gewicht hebben 
    .filter(superhero =>
      superhero = (superhero.publisher == "Marvel Comics") && superhero.weight != "unknown")
    // stap 2 pak daarvan het gewicht.
    // 3. map neemt de array superheroesFiltered, en creeert een nieuwe array 
    // (die zie je niet, maar noemen we even superheroesFilteredMap) met daarin het 
    // gewicht van de superheroes die staan in superheroesFiltered
    .map(superhero => superhero = superhero.weight)
//stap 3 reduce alle gewicht van superheroes van dc Comics
const RedM = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
console.log("Ik heb MARVEL:" + superWeigthMarvel.reduce(RedM));
//8 Bonus: zoek de zwaarste superheld!


const maxweight = superheroes
  .filter(superhero => superhero = superhero.weight != "unknown")
  .map(superhero => superhero = parseInt(superhero.weight))
  .reduce(function (a, b) { return Math.max(a, b) });

console.log("max weight: " + maxweight);

const fatSuperHero = superheroes
  .filter(superhero => superhero = superhero.weight == maxweight)
  .map(superhero => superhero = superhero.name);
console.log("fat superhero is:" + fatSuperHero);

