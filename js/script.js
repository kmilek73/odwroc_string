
let tekst = 'Akademia108';

function tekstToArray(tekst) {
    const myArray = tekst.split('');
    let obroconaTablica = myArray.reverse();
    return (obroconaTablica.join(""));

}

console.log(tekstToArray(tekst));



