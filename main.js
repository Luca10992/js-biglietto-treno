const priceTicket = document.getElementById("result");

const price = 0.21;

const basicRate = alert('Tariffa base €' + price);
console.log('Tariffa base: ' + price);

const travelDistance = parseInt(prompt('Km da percorrere'));
console.log('Km da percorrere: ' + travelDistance);

const age = parseInt(prompt('Età del passeggero'));
console.log('Età del passeggero: ' + age);

const priceKm = travelDistance * price;
console.log('Prezzo standard viaggio: ' + priceKm);

if (age < 18) {
    priceTicket.innerHTML = priceKm - (priceKm * 20 / 100).toFixed(2);
    console.log('Prezzo Young: ' + priceTicket.innerHTML);
} else if (age > 65) {
    priceTicket.innerHTML = priceKm - (priceKm * 40 / 100).toFixed(2);
    console.log('Prezzo Old: ' + priceTicket.innerHTML);
} else {
    priceTicket.innerHTML = priceKm;
    console.log('Prezzo Viaggio: ' + priceTicket.innerHTML);
}