// Ao chamar a função doingThings:
const wakeUp = () => "acordando";
const goBreack = () => "Bora tomar café";
const goSleap = () => "partiu dormir";


const doingThings = (callback) => {
    const action = callback();
    console.log(action);
}

doingThings(wakeUp);
doingThings(goBreack);
doingThings(goSleap);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!