
let imagem = document.getElementById("imagem1")
let sectionp = document.getElementById("pokemons")
let searchbutton = document.getElementById("search")
let searchinput = document.getElementById("searchpokemon")
let sobre = document.getElementById("sobre")
let pokedex = document.getElementById("pokedex")
let frontface = document.getElementById("frontface")
let corpo = document.getElementById("section")
let load = document.getElementById("load")
let close = document.getElementById("close")
let stats = document.getElementById("stats")
let body = document.getElementById("corpo")
let favoritepokemons = []
let favoritestorage = []
let id 
let notfound = document.getElementById("notfound")

let generation1 = document.getElementById("generation1")
let generation2 = document.getElementById("generation2")
let generation3 = document.getElementById("generation3")
let generation4 = document.getElementById("generation4")
let generation5 = document.getElementById("generation5")
let generation6 = document.getElementById("generation6")
let generation7 = document.getElementById("generation7")

let categoriesbutton = document.getElementById("categoriesbutton")

let arrow = document.getElementById("arrow")

document.addEventListener("click", (event) =>{

  if(event.target != categoriesbutton && event.target != arrow  ){
    arrow.classList.remove("arrows")
  }
})

categoriesbutton.addEventListener("click", () =>arrow.classList.toggle("arrows"))


async function fetchpokemon(y,x){



deleteall.style.display = "none"
load.style.display = "block"
corpo.style.filter = "blur(5px)";
corpo.style.pointerEvents = "none";



let cards = Array.from(document.querySelectorAll(".pokecard"))


cards.forEach( async (card) =>{

 
 
  if(card.classList[1] != "likedcard"){
    card.remove()
  }

  if(card.id < y || card.id > x ){
    
      card.style.display = "none"
    
   
  }else{
    card.style.display = "block"
  }

 
    
})


let pokemonlink = id => `https://pokeapi.co/api/v2/pokemon/${id}`


for(i=y;i<=x;i++){

let response = await fetch(pokemonlink(i))

var data = await response.json()


createpokemoncard(i,data)

}


getbuttons()



finishfetchstyles()


}


function getbuttons(){

  let buttons = document.querySelectorAll(".sobrebutton")
  let arrdebuttons = Array.from(buttons)



arrdebuttons.forEach((button) =>{

button.addEventListener("click", () =>{
    stats.classList.remove("statsanimationclass2")
    stats.classList.add("statsanimationclass4")
    
    id = parseInt(button.id)

   fetchbutton() 

   stats.style.display = "none"
  setTimeout(() =>{
    stats.style.display = "grid"
  },0)

}) 

var emptyfavorite = document.getElementById("empty_favorite")
emptyfavorite.style.display = "none"
})
}

let next = document.getElementById("next")





async function  fetchbutton(){

  let nextspan = document.getElementById("nextspan")
  let prevspan = document.getElementById("prevspan")

  prevspan.classList.remove("statsevent")
  prevstats.style.pointerEvents = "all"
  nextspan.classList.remove("statsevent")
  nextstats.style.pointerEvents = "all"

  let sobreopokemon = () => `https://pokeapi.co/api/v2/pokemon/${id}`
  let response = await fetch(sobreopokemon(id))
  var data = await response.json()


  createpokedexinf(data, heightstats)




  nextstats.addEventListener("click", () =>{



  nextstats.style.pointerEvents = "none"
  prevstats.style.pointerEvents = "all"
  nextspan.classList.add("statsevent")
  prevspan.classList.remove("statsevent")



  heightstats.innerHTML = ""    
  metersspan.innerHTML = `<i class="fa-solid fa-up-down"></i`


  function addStr(str, index, stringToAdd){
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
  }

  var stringToAdd = ",";

  if(data.height >= 10){
  var j = "" + data.height + "m"



  }else{
  var j = "" + "0" + data.height + "m"

  }

  var str = j
  span.innerHTML = `${addStr(str, 1, stringToAdd)}`

  heightimage.src = data["sprites"]["other"]["official-artwork"]["front_default"]
  heightstats.classList.remove("statsanimationclass3")
  heightstats.classList.add("statsanimationclass")
  stats.classList.remove("statsanimationclass4")
  stats.classList.add("statsanimationclass2")
  heightstats.appendChild(spandiv)
  heightstats.appendChild(metersdiv)
  heightstats.appendChild(imagediv)



})



  prevstats.addEventListener("click", () =>{

  
  prevstats.style.pointerEvents = "none"
  nextstats.style.pointerEvents = "all"
  prevspan.classList.add("statsevent")
  nextspan.classList.remove("statsevent")


stats.classList.remove("statsanimationclass2")
stats.classList.add("statsanimationclass4")
heightstats.classList.remove("statsanimationclass")
heightstats.classList.add("statsanimationclass3")

  })


}


next.addEventListener("click", async () =>{
 

  if(id == 600){
  id = 0
}

stats.style.display = "none"
setTimeout(() =>{
  stats.style.display = "grid"
},0)
 
stats.classList.add("statsanimationclass4")
stats.classList.remove("statsanimationclass2")
heightstats.classList.add("statsanimationclass3")
heightstats.classList.remove("statsanimationclass")

  setTimeout(()=>{
      stats.style.display = "grid"
  },0)
  
  id++


fetchbutton()

})


let prev = document.getElementById("prev")

prev.addEventListener("click", async () =>{

  stats.classList.add("statsanimationclass4")
  stats.classList.remove("statsanimationclass2")
  heightstats.classList.add("statsanimationclass3")
  heightstats.classList.remove("statsanimationclass")


  if(id == 1){
    id = 601
  }

    stats.style.display = "none"

setTimeout(()=>{
    stats.style.display = "grid"
},0)


id--

fetchbutton(id)

})





function finishfetchstyles(){

let loadscreen = document.getElementById("loadingscreen")
let pokeload = document.getElementById("loader")
    
corpo.style.filter = "blur(0px)";
corpo.style.pointerEvents = "all";
pokeload.style.display = "none"
loadscreen.style.display = "none"
body.style.overflowY = "visible"
load.style.display = "none"
window.scrollTo(0,0)
notfound.style.display = "none"
searchinput.value = ""
}



















function createpokemoncard(i, data){

  
let pokecard = document.createElement("div")
let pokeimage = document.createElement("img")
let imagediv = document.createElement("div")

let pokenamediv = document.createElement("div")
let name = document.createElement("span")

let pokeid = document.createElement("span")



pokeid.innerText = `#${data.id}`
pokenamediv.classList.add("name")
pokeid.classList.add("id")


let tipodiv = document.createElement("div")
tipodiv.id = "tipodiv"
let tipo = document.createElement("span")

let ability = document.createElement("span")

let descriçaodiv = document.createElement("div")
let descriçao = document.createElement("span")

let profile = document.createElement("button")
let spanprofile = document.createElement("span")

profile.append(spanprofile)
spanprofile.innerText = "Pokedex"
profile.id = `${data.id}`
profile.className = `sobrebutton`

pokeimage.src = data["sprites"]["other"]["official-artwork"]["front_default"]

pokeimage.id = i
pokecard.id = data.id
pokecard.classList.add("pokecard")
name.innerText = data.name
ability.innerHTML = `${data.abilities[0].ability.name}<br><br>Ability`

if(data.types[0].type.name){
    pokecard.style.background = `url(images/${data.types[0].type.name}.jpg)`
}

if(data.types[0].type.name == "fire"  ){
    pokecard.style.background = `url(images/fire.png)`
}



for(i=0;i<=data.types.length;i++){



if(data.types[i] != undefined){
    if(data.types.length >= 2){
        tipo.innerHTML +=   `${data.types[i].type.name}/`
        

    }else
    tipo.innerText += data.types[i].type.name
    
}


}

if(data.types.length >= 2){
tipo.innerHTML = tipo.innerHTML.slice(0,-1)
}


if(name.innerText.length == 10 && data.id >= 100){

name.style.fontSize = "13px"

}

if(name.innerText.length > 10 && data.id >= 100){

name.style.fontSize = "8px"

}

if(tipo.innerText.length >= 17 || ability.innerText.length >= 17){
    tipodiv.style.fontSize = "8px"
}


tipo.innerHTML += `<br><br>Type`
pokenamediv.append(name, pokeid)

imagediv.append(pokeimage)
imagediv.classList.add("pokemonimage")


tipodiv.append(tipo, ability)
tipodiv.classList.add("tipo")
pokecard.append(pokenamediv,imagediv,tipodiv)

let favorite = document.createElement("button")
favorite.id = "favorite"
favorite.innerHTML = `<i class="fa-solid fa-heart"></i>`

descriçaodiv.append(descriçao)
descriçaodiv.classList.add("descriçao")
pokecard.append(descriçaodiv,profile, favorite)

sectionp.append(pokecard)



favorite.addEventListener("click", () =>{
  
 
  

  var index = favoritepokemons.indexOf(pokecard);
  
  function deslike() {
    favoritepokemons.splice(index, 1);
    favorite.children[0].style.textShadow = ""
    favorite.style.color = ""
    favorite.classList.remove("liked")
    pokecard.classList.remove("likedcard")
    localStorage.removeItem(`favoritelist${pokecard.id}`,`${pokecard.id}`)
 
    
  }

  function like() {
    favorite.style.color = "red"
    favorite.children[0].style.textShadow = "0px 0px 5px red"
    favorite.classList.add("liked")
    pokecard.classList.add("likedcard")
    favoritepokemons.push(pokecard)
    localStorage.setItem(`favoritelist${pokecard.id}`, pokecard.id)

  }

  if(favorite.className == "liked"){
   
      
   deslike()
   
    
    
  }else if(favorite.className != "liked"){
    like()
    
   
   
  }

 
 
 
  
  })

  if(favoritepokemons.length > 0){
    


        for(i=0;i<=favoritepokemons.length-1;i++){
      
        if(pokecard.id == favoritepokemons[i].id){
  
    
          pokecard.children[5].classList.add("liked")
          
         
         }
        
        
        }


      
 
  }

  
   
  let cards = Array.from(document.querySelectorAll(".pokecard"))

  
  cards.forEach( (card) =>{
  
   
    for(i=0;i<=favoritepokemons.length-1;i++){
   
    if(card.id == favoritepokemons[i].id && card.classList[1] != "likedcard" ){
      card.remove()
    }
  
    
  }
  })




    setTimeout(() =>{

      let statusgeral = Object.entries(localStorage)

      for(i=0;i<=statusgeral.length-1;i++){
    
  
       
        
        
        if(pokecard.id == statusgeral[i][1]){
          favorite.style.color = "red"
          favorite.children[0].style.textShadow = "0px 0px 5px red"
          favoritepokemons.push(pokecard)
          pokecard.children[5].classList.add("liked")
          pokecard.classList.add("likedcard")
        }
    
    
       
        
        
        }
     },0)
  
  
   
  }
  




searchinput.addEventListener("keydown", (e) =>{

 

var cards =  Array.from(document.querySelectorAll(".pokecard"))

cards.forEach(card =>{
        card.style.display = "none"
    })


setTimeout(() => {
  
    var totalpokemonssearched  = 0  
    

for(i=0;i<=cards.length-1;i++){
 
   
   
if(cards[i].firstChild.innerText.includes(searchinput.value.toLowerCase())){
  
    totalpokemonssearched += 1
    cards[i].style.display = "block"
    
    notfound.style.display = "none"
   
    
}

}



if(totalpokemonssearched == 0){
  let information = document.getElementById("information")
  var emptyfavorite = document.getElementById("empty_favorite")
  information.innerText = "Pokemón not found"
    emptyfavorite.style.display = "none"
    notfound.style.display = "flex"

}



},500)




})


close.addEventListener("click", () =>{
    heightimage.src = ""
    sobre.classList.add("pokedexanimationclassleave")
    corpo.style.filter = "blur(0px)";
    corpo.style.pointerEvents = "all"
    id = NaN
    heightstats.removeChild(span)
    heightstats.removeChild(heightimage)

})

let nextstats= document.getElementById("nextstats")
let prevstats= document.getElementById("prevstats")

let metersdiv = document.createElement("div")
let imagediv = document.createElement("div")
let spandiv = document.createElement("div")

let metersspan = document.createElement("span")
let span = document.createElement("span")
let heightimage = document.createElement("img")


let heightstats = document.getElementById("heightstats")

imagediv.appendChild(heightimage)
spandiv.appendChild(span)
metersdiv.appendChild(metersspan)



generation1.innerHTML += ` <img src="images/checkball.png" alt="">`

function checkmenu(generation){
    
    let menubuttons = document.querySelectorAll(".dropdown-item")
    let categorie = document.getElementById("categorie")
    categorie.innerText = generation.innerText
    
  
    menubuttons.forEach((button) =>{
    button.innerHTML = button.innerText
})
    generation.innerHTML += ` <img src="images/checkball.png" alt="">`
    
}


generation1.addEventListener("click", async () => {
    
    fetchpokemon(1,151)
    checkmenu(generation1)

  

   
})

generation2.addEventListener("click", async () => {
    
    fetchpokemon(152,251)
    checkmenu(generation2)
    
    
})

generation3.addEventListener("click", async () => {
    
    fetchpokemon(252,386)
    checkmenu(generation3)
})

generation4.addEventListener("click", async () =>{
    
    fetchpokemon(387,493)
    checkmenu(generation4)
})

generation5.addEventListener("click", async () => {
    
    fetchpokemon(494,649)
    checkmenu(generation5)
})

generation6.addEventListener("click", async () =>{

fetchpokemon(650,721)
checkmenu(generation6)
})

generation7.addEventListener("click", async () => {
    
    fetchpokemon(722,809)
    checkmenu(generation7)
})

let favorites = document.getElementById("favorites")

let favorite = document.getElementById("favorite")

let deleteall = document.getElementById("deleteall")

        deleteall.addEventListener("click", () =>{
          localStorage.clear()

          var cards2 =  Array.from(document.querySelectorAll(".pokecard"))

          cards2.forEach(card =>{
                  card.classList.add("pokedexanimationclassleave")
              })
        

              setTimeout(() =>{
                favorites.click()
              },500)
             

          
})
      

favorites.addEventListener("click", async () => {
   deleteall.style.display = "block"
 
   notfound.style.display = "none"



  favoritepokemons = []

  var cards2 =  Array.from(document.querySelectorAll(".pokecard"))

cards2.forEach(card =>{
        card.remove()
    })


    
  getfavorite() 
    

  checkmenu(favorites)

  let cards = Array.from(document.querySelectorAll(".pokecard"))
  
 
    cards.forEach( (card) =>{
   
        card.style.display = "block"

        card.classList[1] = "likedcard"
        card.children[5].className = "liked"
     
      if(card.classList[1] !== "likedcard"){
   
      card.remove()

      }
         
     })

     var emptyfavorite = document.getElementById("empty_favorite")
     
     let statusgeral = Object.entries(localStorage)
     
     if(statusgeral.length == 0){
     
      
      emptyfavorite.style.display = "flex"
      notfound.style.display = "none"
      deleteall.classList.add("disabledbutton")
      
    }else{
      emptyfavorite.style.display = "none"
      deleteall.classList.remove("disabledbutton")
    }
   
    if(favoritepokemons.length > 0){
      notfound.style.display = "none"
    }

    

  })





function createpokedexinf(data){

 
stats.style.display = "grid"

let hpbard = document.getElementById("hpbar")
let attackbar = document.getElementById("attackbar")
let defensebar = document.getElementById("defensebar")
let speedbar = document.getElementById("speedbar")
let specialatkbar = document.getElementById("specialatkbar")
let specialdfbar = document.getElementById("specialdfbar")
let attackstats= document.getElementById("attackstats")
let hpstats = document.getElementById("hpstats")
let defensestats = document.getElementById("defensestats")
let speed = document.getElementById("speed")
let specialattack = document.getElementById("specialattack")
let specialdefense= document.getElementById("specialdefense")


sobre.style.display = "block"
sobre.classList.remove("pokedexanimationclassleave")
sobre.classList.add("pokedexanimationclass")


if(data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]){
frontface.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
}else{
frontface.src = data["sprites"]["front_default"]
}



pokedexname.innerText = `#${data.id} ${data.name}`
corpo.style.pointerEvents = "none"
corpo.style.filter = "blur(5px)";
hpbard.style.width = `${data.stats[0].base_stat /2}px` 
hpstats.innerText = `Hp:${data.stats[0].base_stat}`
attackbar.style.width = `${data.stats[1].base_stat /2}px`
attackstats.innerText = `Attack:${data.stats[1].base_stat}`
defensebar.style.width = `${data.stats[2].base_stat /2}px`
defensestats.innerText = `Defense:${data.stats[2].base_stat}`
speed.innerText = `Speed:${data.stats[3].base_stat}`
speedbar.style.width = `${data.stats[3].base_stat /2}px`
specialattack.innerText = `Spatk:${data.stats[4].base_stat}`
specialatkbar.style.width = `${data.stats[4].base_stat /2}px` 
specialdefense.innerText = `Spdef:${data.stats[5].base_stat}`
specialdfbar.style.width = `${data.stats[5].base_stat /2}px`

if(pokedexname.innerText.length > 15){
  pokedexname.style.fontSize = "10px"
}


}

document.addEventListener("scroll", event =>{

  if(window.pageYOffset > 600){
    let up = document.getElementById("up")
    
    up.style.right = "30px"
  }else{
    up.style.right = "-50px"
  }
})

up.addEventListener("click", () => window.scrollTo(0,0))

fetchpokemon(1,151)
    
  
async function getfavorite() {

  resetstorage()

  let statusgeral = Object.entries(localStorage)

  
 
  
  let pokemonlink2 = id => `https://pokeapi.co/api/v2/pokemon/${id}`
   
  for(i=0;i<=statusgeral.length-1;i++){
    
  let favorite = await fetch(pokemonlink2(statusgeral[i][1]))

  var data = await favorite.json()
  
  createpokemoncard(i,data)
  
  }


  getbuttons()


  fetchbutton()


}

function resetstorage(){
  let statusgeral = Object.entries(localStorage)

  for(i=0;i<=statusgeral.length-1;i++){
    if(!statusgeral[i][0].includes("favorite")){
      localStorage.removeItem(`${statusgeral[i][0]}`)
   }
  
}

}


