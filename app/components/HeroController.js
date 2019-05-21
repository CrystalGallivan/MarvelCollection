import HeroService from "./HeroService.js";



//PRIVATE

let _hero = new HeroService()

//PUBLIC
export default class HeroController {
  constructor() {
    console.log('controller')
  }
}