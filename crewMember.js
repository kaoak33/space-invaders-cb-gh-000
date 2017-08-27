class CrewMember{
  constructor(position){
    this.position = position
    this.currentShip = "Looking for a Rig"
  }
  engageWarpDrive(){
    if(this.position == "Pilot" && this.currentShip !== "Looking for a Rig" ){
      return this.currentShip.warpDrive = 'engaged!'
    }
    return 'had no effect'
  }
  setsInvisibility(){
    if(this.position == "Defender"  && this.currentShip !== "Looking for a Rig"){
      return this.currentShip.cloaked = true
    }
    return 'had no effect'
  }
  chargePhasers(){
    if(this.position == 'Gunner'  && this.currentShip !== "Looking for a Rig"){
      return this.currentShip.phasersCharge = 'charged!'
    }
    return 'had no effect'
  }
}
