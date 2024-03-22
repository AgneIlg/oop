import { Pet } from "./Pet.js"

class Dog extends Pet { 
    constructor(name, furcolor){
        super(name, furcolor);
        this.sound = 'Au au';
        this.hasBone = false;
    }
    voice() {
        return `${this.name}: Au Au!!`
     }
}
export { Dog };