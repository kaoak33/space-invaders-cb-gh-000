class Spaceship{
  constructor(name,crew,phasers,shields){
    this.name = name
    this.crew = crew
    this.shields = shields
    this.cloaked = false
    this.phasers = phasers
    this.warpDrive = 'disengaged'
    if(crew.length == 0){ this.docked = true }else{ this.docked = false }
    this.phasersCharge = 'uncharged'
    this.crew.map((mem)=>{
      mem.currentShip = this
    })
  }
  docked(){
    return crew != undefined ? false : true
  }
}
