price = Math.floor(Math.random()* 12);
console.log(price);

if (price < 5) {
    console.log("I'll take it!")
} else if (price > 10) {
    console.log(price + " for this? You must be joking!")
} else {
    console.log("Take off 10% and you've got a deal.")
}

for (let i = 0; i < 3; i++) {
    console.log("Hello?");
}

const cookies = ["chocolate chip", "gingersnap", "oatmeal raisin", "shortbread"];
for (i = 0; i < cookies.length; i++) {
    console.log(cookies[i]);
}

const characters = ["Garnet", "Amethyst", "Pearl", "Steven"];

for (i=0; i < characters.length; i+=1) {
    console.log(characters[i]);
}

let investment = 1000;


for (i = 1; i < 7; i++) {
    new_value = investment + ((investment*10)/100);
    console.log("Years: "+i+" Value: "+ new_value);
    investment = new_value;
} while (i === 7) {
    new_value = investment - ((investment*75)/100);
    console.log("Years: " + i + " Value: " + new_value);
    break;
}


let investment_1 = 1000;
for(let year = 1; year < 11; year++){
    if(year === 7){
        investment_1 = investment_1 * 0.25;
    }else{
        investment_1 = investment_1 * 1.10;
    }
    console.log("Years: " + year + " Value: " + investment_1);
}

let daysUntilTheFinale = 30;

while (daysUntilTheFinale > 0) {
    console.log("Only " + daysUntilTheFinale + " more days!");
    daysUntilTheFinale -= 1;
    if (daysUntilTheFinale === 0) {
        console.log("It's finally here!");
    }
}