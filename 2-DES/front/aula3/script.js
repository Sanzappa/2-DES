function randomDate() {
    var datamin = new Date(1990, 0 ,1)
    var datamax = new  Date(2006, 10, 12)
    return new Date(datamin.getTime() + Math.random() * (datamax.getTime() - datamin.getTime()));
}

var minhaData = randomDate()

console.log(randomDate())