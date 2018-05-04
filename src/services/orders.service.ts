import { Injectable } from '@angular/core';
import { IOrder } from '../interfaces/order.interface';

@Injectable()
export class OrdersService {
    private hungryPeople = ["Ezequiel", "Martin", "Fx", "Pancho", "Santiago", "Caro", "Facu"];
    private mains = ["Napolitana", "Pollo", "Suprema", "Mila Quinoa", "Ensalada Sola"];
    private salads = ["Huevo", "Chauchas", "Zapallito", "Coreanito", "Tomate", "Cherry", "Lechuga", "Lentejas", "Arroz", "Fideos"];
    constructor() { }
    public getOrders(): Array<IOrder> {
        return this.hungryPeople.map(person => {
            let randomDish = this.mains[this.randomBetween(0, this.mains.length - 1)];
            let randomSalads = [];
            while (randomSalads.length < 3) {
                let chosenSalad = this.salads[this.randomBetween(0, this.salads.length - 1)];
                if (randomSalads.indexOf(chosenSalad) === -1) {
                    randomSalads.push(chosenSalad);
                }
            }
            return <IOrder>{
                hungryPerson: person,
                main: randomDish,
                salads: randomSalads
            }
        })
    }

    private randomBetween(floor: number, top: number): number {
        return Math.floor(Math.random() * top) + floor;
    }
}