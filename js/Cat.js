import { Pet } from "./Pet.js"

class Cat extends Pet {
    voice() {
        return `${this.name}: Miau miau!!`
     }
}
export { Cat };