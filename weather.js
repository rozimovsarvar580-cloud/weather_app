let WHY = 'https://api.openweathermap.org/data/2.5/weather?q=Tashkent&units=metric&appid=96b947a45d33d7dc1c49af3203966408'
let country = 'https://restcountries.com/v3.1/all?fields=name,flags,subdivisions'
const img = document.querySelector('#img')
const select = document.querySelector('.select')
const div = document.querySelector('.countries')
const btn = document.querySelector('.states')
const States = document.querySelector('.state')
const city = document.querySelector('.city')
btn.addEventListener('click', () =>{
    if(States.className === 'state none'){
      States.className = 'state block'
    } else{
        States.className = 'state none'
    }
})
div.addEventListener('click', () =>{
    if(select.className === 'select none'){
      select.className = 'select block'
    } else{
        select.className = 'select none'
    }
})
let son1 =0
select.addEventListener( 'click',(e) =>{
    if(e.target === select){
    }else{
         div.textContent = e.target.textContent
         select.className = 'select none'
    }
   let con = `https://restcountries.com/v3.1/name/${div.textContent}`
   const GetAltName = async(info) =>{
   const respones = await fetch(info)
   const info1 = await respones.json()
   let api = `https://api.countrystatecity.in/v1/countries/${info1[0].altSpellings[0]}/states`
   const GetState = async(states) =>{
    const respones = await fetch(states,{
  headers: {
    "X-CSCAPI-KEY": "a211c5f554b33002aea1741c77786bfb1459cb82c09b94f7486395ae0622b44b"
  }
})
    const state = await respones.json()
    console.log(state)
    while(son1<state.length){
        States.innerHTML += `<li>${state[son1].name}</li>`
        son1++
    }
  }
   GetState(api)
   States.addEventListener('click',(e) =>{
  if(e.target === States){
    }else{
         btn.textContent = e.target.textContent
         States.className = 'state none'
    }
    
})

   let API = `https://api.countrystatecity.in/v1/countries/${info1[0].altSpellings[0]}/states/${btn.textContent}/cities`
   const GetCity = async(cities) =>{
    const respones = await fetch(cities,{
  headers: {
    "X-CSCAPI-KEY": "a211c5f554b33002aea1741c77786bfb1459cb82c09b94f7486395ae0622b44b"
  }
})
    const citie = await respones.json()
    while(son1<cities.length){
        city.innerHTML += `<li>${citie[son1].name}</li>`
        son1++
    }
  }
   GetCity(API)
   
}
GetAltName(con)
})
//  const getData = async (data) =>{
//     const respones = await fetch(data)
//     const info =  await respones.json()
//     console.log(info)
//     img.src = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
//  }
// getData(WHY)

let son = 0
 const names = async (data) =>{
    const respones = await fetch(data)
    const info =  await respones.json()
    while(son<info.length){
         select.innerHTML += `<li>${info[son].name.common}</li>`
        son++
    }
    console.log(info[0])
 }
names(country)















const API = "https://api.countrystatecity.in/v1/countries/US/states";
const getUSStates = async () => {
  try {
    const response = await fetch(API, {
      headers: {
        "X-CSCAPI-KEY": "a211c5f554b33002aea1741c77786bfb1459cb82c09b94f7486395ae0622b44b"
      }
    });
    const states = await response.json();
    const mainStates = states.filter(state => /^[A-Z]{2}$/.test(state.iso2));
    console.log(mainStates); // 50 states + DC
  } catch (error) {
    console.error(error);
  }
};
getUSStates(API);
