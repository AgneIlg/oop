class Pet {
    constructor(vardas, kailioSpalva) {
       this.name = vardas;
       this.furColor = kailioSpalva
    }



voice() {
   return `${this.name}: Miau miau!!`
}
intro(){
return `Hi, my name is ${this.name} and my fur color is ${this.furColor}`
}
}
export { Pet };