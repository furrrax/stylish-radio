function range() {
    var input = document.getElementById('terrain__input'); //rng - это Input
    var result = document.getElementById('terrain__result'); // p - абзац
    result.innerHTML = input.value;
    console.log(input);
}