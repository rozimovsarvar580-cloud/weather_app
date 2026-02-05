
let country = 'https://restcountries.com/v3.1/all?fields=name,flags'
const weather = document.querySelector('.weather')
const h = document.querySelector('#h')
const p = document.querySelector('#p')
const select = document.querySelector('.select')
const div = document.querySelector('.countries')
const btn = document.querySelector('.states')
const States = document.querySelector('.state')
const btncity = document.querySelector('.btncity')
const city = document.querySelector('.city')
btncity.addEventListener('click', () =>{
    if(city.className === 'city none'){
      city.className = 'city block'
    } else{
        city.className = 'city none'
    }
    if(div.textContent === 'Cilck to choose country'){
      
    }
    weather.innerHTML = ''
    if(city.innerHTML === '' && btn.textContent === 'Cilck to choose state'){
      city.innerHTML = '<p>Please Choose State First</p>'
    }
     if(city.innerHTML === '' && div.textContent !== 'Cilck to choose state'){
      city.innerHTML = '<p>Please Wait For Content To Appear</p>'
    }
})
btn.addEventListener('click', () =>{
    if(States.className === 'state none'){
      States.className = 'state block'
    } else{
        States.className = 'state none'
    }
    
    
    btncity.textContent = 'Cilck to choose city'
    weather.innerHTML = '' 
    city.innerHTML = ''
    localStorage.setItem('btncity', btncity.textContent)
    localStorage.setItem('weather', weather.innerHTML)
    localStorage.setItem('city', city.innerHTML)
 
    if(States.innerHTML === '' && div.textContent === 'Cilck to choose country'){
      States.innerHTML = '<p>Please Choose Country First</p>'
    }
     if(States.innerHTML === '' && div.textContent !== 'Cilck to choose country'){
      States.innerHTML = '<p>Please Wait For Content To Appear</p>'
    }
})
div.addEventListener('click', () =>{
    if(select.className === 'select none'){
      select.className = 'select block'
    } else{
        select.className = 'select none'
    }
   
      btn.textContent = 'Cilck to choose state'
    btncity.textContent = 'Cilck to choose city'
    weather.innerHTML = '' 
    States.innerHTML = ''
    city.innerHTML = ''
    localStorage.setItem('btncity', btncity.textContent)
    localStorage.setItem('weather', weather.innerHTML)
    localStorage.setItem('btn', btn.textContent)
    localStorage.setItem('States', States.innerHTML)
    localStorage.setItem('city', city.innerHTML)

   
    
   
    
    States.className = 'state none'
    city.className = 'city none'
})
let a 
let d
let b 
let s
const GetAlt = async(namee) =>{
  const response = await fetch (namee)
  const alt = await response.json()
  const API = `https://api.countrystatecity.in/v1/countries/${alt[alt.length -1].altSpellings[0]}/states`
  a = `https://api.countrystatecity.in/v1/countries/${alt[alt.length -1].altSpellings[0]}/states/`
  localStorage.setItem('a', a)
  getStates(API);
}
if(localStorage.getItem('a')){
  a = localStorage.getItem('a')
}

const getStates = async (API) => {
  let son1 = 0
  try {
    const response = await fetch(API, {
      headers: {
        "X-CSCAPI-KEY": "a211c5f554b33002aea1741c77786bfb1459cb82c09b94f7486395ae0622b44b"
      }
    });
    const states = await response.json();
    d = states 
    States.innerHTML = ''
    while(son1<states.length){
      States.innerHTML += `<li class='${son1}'>${states[son1].name}</li>`
      son1++
    }
    localStorage.setItem('d', JSON.stringify(d))
   localStorage.setItem('States', States.innerHTML)
  
  } catch (error) {
    console.error(error);
  }
}
let t 
if(localStorage.getItem('d')){
  let t = localStorage.getItem('d')
  d = JSON.parse(t)
}
if(localStorage.getItem('States')){
  States.innerHTML = localStorage.getItem('States')
}
select.addEventListener('click', (e) =>{
if(e.target === select){
}else{
  div.textContent = e.target.textContent
  select.className = 'select none'
  let namee = `https://restcountries.com/v3.1/name/${div.textContent}`
  GetAlt(namee)
  localStorage.setItem('div', div.textContent)
}
})
if(localStorage.getItem('div')){
div.textContent = localStorage.getItem('div')
}
const getCities = async (API) => {
  let son3 = 0
  try {
    const response = await fetch(API, {
      headers: {
        "X-CSCAPI-KEY": "a211c5f554b33002aea1741c77786bfb1459cb82c09b94f7486395ae0622b44b"
      }
    });
    const states = await response.json(); 
    city.innerHTML = ''
    while(son3<states.length){
      city.innerHTML += `<li>${states[son3].name}</li>`
      son3++
    }
   localStorage.setItem('city', city.innerHTML)
  
  } catch (error) {
    console.error(error);
  }
}
if(localStorage.getItem('city')){
  city.innerHTML =localStorage.getItem('city')
}
States.addEventListener('click',(e) =>{ 
if(e.target === States){
}else{
    btn.textContent = e.target.textContent
    States.className = 'state none'
    b = Number(e.target.className)
    let api = `${a}${d[b].iso2}/cities`
    getCities(api)
    if(localStorage.getItem('btn') !== btn.textContent){
      city.innerHTML = ''
    }
    localStorage.setItem('btn', btn.textContent)
}
})
if(localStorage.getItem('btn')){
  btn.textContent = localStorage.getItem('btn')
}
city.addEventListener('click',(e) =>{
  let k = 0
if(e.target === city){
}else{
    btncity.textContent = e.target.textContent
    city.className ='city none'
    let text =''
    while(k<btncity.textContent.length){
       if(btncity.textContent.at(k) !== "’"){
       text += btncity.textContent.at(k)
       }
       k++
    }
    let WHY = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=96b947a45d33d7dc1c49af3203966408`
    getData(WHY)
    localStorage.setItem('btncity', btncity.textContent)
}
})
if(localStorage.getItem('btncity')){
btncity.textContent = localStorage.getItem('btncity')
}
 const getData = async (data) =>{
    const respones = await fetch(data)
    const info =  await respones.json()
    weather.innerHTML = `<img src="https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png" alt="" id="img" >` 
    weather.innerHTML += `<h1>${info.weather[0].main}</h1>`
    weather.innerHTML += `<p>${Math.round(info.main.temp)}C<sup>o</sup></p>`
    localStorage.setItem('weather', weather.innerHTML)
 }
if(localStorage.getItem('weather')){
  weather.innerHTML = localStorage.getItem('weather')
}

let son = 0
let son2 = 0
 const names = async (data) =>{
    const respones = await fetch(data)
    const info =  await respones.json()
    let a = []
    while(son<info.length){
      a.push(info[son].name.common)
        son++
    } 
    let s = a.sort()
    a.splice(249)
    s.unshift("Aland Islands")
   while(son2<s.length){
    select.innerHTML += `<li>${s[son2]}</li>`
    son2++
   }
 }
names(country)
