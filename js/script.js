
let tekst = 'Akademia108';

function tekstToArray (tekst)
{
const myArray=tekst.split('');
    console.log(myArray);
    let obroconaTablica =  myArray.reverse();
    console.log(obroconaTablica.join(" "));
    console.log(typeof obroconaTablica.join());
    console.log(typeof myArray);
}

tekstToArray(tekst);



