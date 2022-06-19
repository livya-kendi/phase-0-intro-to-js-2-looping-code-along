// Code your solutions in this file
function writeCards(arr, event) {
    let x = [];
    for (let i = 0; i < arr.length; i++) {
        x.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);

    }
    return (x)
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function countDown() {
    var countdown = 10;
    while (countdown > 0) {
        console.log(countdown);
        countdown = countdown - 1;
    }
    console.log(countdown);

}