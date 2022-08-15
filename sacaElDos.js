let array = [34,123,234,4323,374,0,923];

const sacaElDos = (lista) => {
    let max = maxDos = Math.pow(-2,53);
    lista.map((n) => {
        if (n > maxDos && n > max) {
            [maxDos, max] = [max, n];
        } else if (n > maxDos && n < max) {
            maxDos = n;
        }
    })
    return maxDos;
}
console.log(sacaElDos(array));