/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCatInput {
  name?: string
  age?: number
}

export abstract class IQuery {
  abstract getCats(): Cat[] | Promise<Cat[]>

  abstract cat(id: string): Cat | Promise<Cat>

  abstract dog(): DogQuery | Promise<DogQuery>
}

export abstract class IMutation {
  abstract createCat(createCatInput?: CreateCatInput): Cat | Promise<Cat>
}

export abstract class ISubscription {
  abstract catCreated(): Cat | Promise<Cat>
}

export class Cat {
  id?: number
  name?: string
  age?: number
}

export class DogQuery {
  GetDogs?: Dog[]
  GetDog?: Dog
}

export class Dog {
  id?: number
  name?: string
  age?: number
}
