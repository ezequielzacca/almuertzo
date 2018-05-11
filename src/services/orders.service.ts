import { Injectable } from "@angular/core";
import { IOrder } from "../interfaces/order.interface";
import { randomBetween } from "../utils/random.utils";

@Injectable()
export class OrdersService {
  private hungryPeople = [
    "Ezequiel",
    "Martin",
    "Fx",
    "Pancho",
    "Santiago",
    "Caro",
    "Facu"
  ];
  private mains = [
    "Napolitana",
    "Pollo",
    "Suprema",
    "Mila Quinoa",
    "Ensalada Sola"
  ];
  private salads = [
    "Huevo",
    "Chauchas",
    "Zapallito",
    "Coreanito",
    "Tomate",
    "Cherry",
    "Lechuga",
    "Lentejas",
    "Arroz",
    "Fideos"
  ];

  //this is part of the STATE now
  private orders: Array<IOrder> = [];

  constructor() {}

  public generateOrders(): void {
    this.orders = this.hungryPeople.map(person => {
      const randomDish = this.mains[randomBetween(0, this.mains.length - 1)];
      const randomSalads = [];
      while (randomSalads.length < 3) {
        const chosenSalad = this.salads[
          randomBetween(0, this.salads.length - 1)
        ];
        if (randomSalads.indexOf(chosenSalad) === -1) {
          randomSalads.push(chosenSalad);
        }
      }
      return <IOrder>{
        id: randomBetween(0, 999999999).toString(),
        hungryPerson: person,
        main: randomDish,
        salads: randomSalads
      };
    });
  }

  public getAll(): Array<IOrder> {
    return this.orders;
  }

  public getOne(id: string): IOrder {
    return this.orders.find(order => order.id === id);
  }

  public add(order: {
    main: string;
    salads: Array<string>;
    hungryPerson: string;
  }): void {
    //state is mutated
    this.orders.push(
      Object.assign(order, { id: randomBetween(0, 9999999).toString() })
    );
    //inmutable version
    //this.orders = [...this.orders,order];
  }

  public remove(order: IOrder): void {
    //state is mutated
    let toRemoveIndex = this.orders.findIndex(
      orderBeingIterated => order.id === orderBeingIterated.id
    );
    this.orders.splice(toRemoveIndex, 1);
    //inmutable version
    //this.orders = this.orders.filter(orderBeingIterated=>orderBeingIterated.id!==order.id);
  }

  public removeAll(): void {
    this.orders = [];
  }

  public edit(order: IOrder): void {
    //state is mutated
    let toEditIndex = this.orders.findIndex(
      orderBeingIterated => order.id === orderBeingIterated.id
    );
    order[toEditIndex] = order;
    //inmutable version
    this.orders = this.orders.map(
      orderBeingIterated =>
        orderBeingIterated.id === order.id ? order : orderBeingIterated
    );
  }

  public getMains(): Array<string> {
    return this.mains;
  }

  public getSalads(): Array<string> {
    return this.salads;
  }
}
