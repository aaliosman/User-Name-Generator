const fs = require('fs'); // file system, zm lesen des dateisystem
const path = require('path'); // path, zum arbeiten mit dateipfaden

// benutzername genrator
// beispiele benutzer : shinysunflower555555 oder FlyingAutomobile34567
//was benötigen wir ?
// - eine funktion um die werte aus der json datei zu lesen 
/**
 * @function getWords
 * @description reads words from json file
 * @returns { object }
 */

function getWords ()
{
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

    return json;
}
getWords();


// -Eine Funktion um die zufällige Nummer hinter dem Namen zu generieren

/**
 * @function createRandomNumber 
 * @description creats a random number according to a minimal und maximal value
 * @param { number } minNumber 
 * @param { number } maxNumber 
 * @returns { number }
 */

function createRandomNumber (minNumber, maxNumber)
{
    const num = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

    return num;
}


// -Eine Funktion mit der wir den ersten Buchstaben des jeweligen Wirtes groß schreiben (PascalCase)

/**
 * @function  capitalizeString
 * @description Takes the first letter of string and changes it to uppercase, then returns string
 * @param { string } word 
 * @returns { string }
 */

function capitalizeString (word)
{
   if (word === undefined || word.length === 0 || word == !isNaN(word))
   {
       return 'default';
   }

   const wordStart = word.charAt(0).toUpperCase();

   const wordRest = word.substring(1).toLowerCase();

   return wordStart + wordRest; 
}
 

// -Eine Funktion mit der wir den benutzernamen generieren und auf die ergebnisse der anderen funktion zugreifen

/**
 * @function createRandomUserName
 * @description creat random username
 * @param {number} maxNamber 
 * @returns {string}
 */

function createRandomUserName (maxNamber)
{
    const words = getWords();

   const adj = words.adjs[ Math.floor(Math.random() * (words.adjs.length -1))];

   const noun = words.nouns[ Math.floor(Math.random() * (words.nouns.length -1))];
  
   const randomNumber = createRandomNumber(10000, maxNamber);

   const finalUserName = `${ capitalizeString(adj) }${ capitalizeString(noun) }${ maxNamber !== 0 ? randomNumber : ''}`;

   return finalUserName;


}


// -Eine export, um die Applikation in einer anderen datei zu nutzennod

exports.createUserName = (maxNamber) => createRandomUserName(maxNamber);
