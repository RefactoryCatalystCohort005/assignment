//classes,properties and methods
function shoe(name,color,size,brand,type,duration,make,){
    this.name
    this.color
    this.size
    this.brand
    this.type
    this.duration
    this.make
   //methods
   this.sound=()=>{
       console.log("it says tatta")
   }
  this.appearance=()=>{
      console.log("it shines")
  }
 }

  var shoe1 = new shoe("pump", "dark blue","37","nike","flat","china make")
//   shoe1.name = "pump";
//   shoe1.color ="dark blue";
//   shoe1.size = "37";
//   shoe1.brand = "nike";
//   shoe1.type = "flat"
//   shoe1.duration ="3 years";
//   shoe1.make = "china make";

  //methods

  
  
 shoe1.sound();
 shoe1.appearance();


function printer (name, color,model,location,type,size,toner){
    this.name
    this.color
    this.model
    this.location
    this.type
    this.size
    this.toner
    //methods
    this.speed=()=>{
        console.log("it prints very first");
    }
 this.battery=()=>{
     console.log("it is a non rechable")
 }
}
var printer1 = new printer ("xerox", "black", "wireless","kampala road","coloured","medium","full colour");


printer1.speed();
printer1.battery();

function chair(color,size,type,duration,make,price,warantee){
    this.color
    this.size
    this.type
    this.duration
    this.make
    this.price
    this.warantee
    //methods
    this.texture=()=>{
        console.log("it feels very smooth");
    }
    this.weight=()=>{
        console.log("its very heavy");
    }
}
var sofa_coach = new chair("grey", "5 sitter","leather","life time","made in uk","2000000","1 year")

sofa_coach.weight();
sofa_coach.texture();


function tv_set(type,size,color,brand,distributer,price,quality){
    this.type
    this.size
    this.color
    this.brand
    this.distributer
    this.price
    this.quality
    //methods
    this.prize=()=>{
        console.log("you win a tv stand if u buy two");
    }
    this.decoder=()=>{
        console.log("comes with an inbuilt decorder")
    }

}

var tv_set1 = new tv_set("sony","32inch","black","sony","tsuma consultants","2000000","HD quality")

tv_set1.prize();
tv_set1.decoder();


function tee_shirt(color,type,brand,size,price,make,material){
    this.color
    this.set
    this.brand
    this.size
    this.price
    this.make
    this.material
    //methods
    this.decolour=()=>{
        console.log("it doesn't decolour");
    }
    this.strecher=()=>{
        console.log("it doesn't strech");
    }
}
var tee_shirt1 = new tee_shirt("red","men's","gucci","45","50000","made in china","cotton")

tee_shirt1.decolour();
tee_shirt1.strecher()

function suitcase (name,type,color,make,flexibility,built_in_compatments,pulltabs){
    this.name
    this.type
    this.color
    this.make
    this.flexibility
    this.built_in_compatments
    this.pulltabs
    //methods
    this.lock=()=>{
        console.log("it locks with a code");
    } 
    this.hardshell=()=>{
        console.log("it has a very hard shell to protect whats inside")

        
    }  
}
var oval_suitcase = new suitcase("honey moon","plastic","pink","expandable","separate sections for every thing","4")  

oval_suitcase.lock()
oval_suitcase.hardshell();

function hair_dryer (name,color,type,make,price,availability,size){
    this.name
    this.color
    this.type
    this.make
    this.price
    this.availability
    this.size
    //methods
    this.battery_life=()=>{
        console.log("battery goes for two days");
    }
    this.noise=()=>{
        console.log("it makes loud noise");
    }
}

var hair_dryer1= new hair_dryer("sacci","pitch","electronic","made in UK","all electronics shops","medium")

hair_dryer1.battery_life();
hair_dryer1.noise();