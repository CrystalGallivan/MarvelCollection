import HeroController from "./components/HeroController.js";



class App {
  constructor() {
    this.controllers = {
      heroController: new HeroController()
    }
    console.log('main')
  }

}


window['app'] = new App()