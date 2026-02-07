
let country = 'https://restcountries.com/v3.1/all?fields=name,flags'
const img = document.querySelector('.img')
const weather = document.querySelector('.weather')
const weather2 = document.querySelector('.weather2')
const f = document.querySelector('.d')
const page = document.querySelector('.page')
const page1 = document.querySelector('#page1')
const page2 = document.querySelector('#page2')
const h = document.querySelector('#h')
const p = document.querySelector('#p')
const select = document.querySelector('.select')
const div = document.querySelector('.countries')
const btn = document.querySelector('.states')
const States = document.querySelector('.state')
const btncity = document.querySelector('.btncity')
const city = document.querySelector('.city')

const Datee = new Date()
let day = [
  '',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]
let month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

btncity.addEventListener('click', () =>{
    if(city.className === 'city none'){
      city.className = 'city block'
    } else{
        city.className = 'city none'
    }
    if(div.textContent === 'Cilck to choose country'){
      
    }
    if(city.innerHTML === '' && btn.textContent === 'Cilck to choose state'){
      city.innerHTML = '<p>Please Choose State First</p>'
    }
     if(city.innerHTML === '' && div.textContent !== 'Cilck to choose state'){
      city.innerHTML = '<p>Please Wait For Content To Appear</p>'
    }
    if(select.className === 'select block'){
      select.className = 'select none'
    }
     if(States.className === 'state block'){
      States.className = 'state none'
    }
})
btn.addEventListener('click', () =>{
    if(States.className === 'state none'){
      States.className = 'state block'
    } else{
        States.className = 'state none'
    }
    if(States.innerHTML === '' && div.textContent === 'Cilck to choose country'){
      States.innerHTML = '<p>Please Choose Country First</p>'
    }
     if(States.innerHTML === '' && div.textContent !== 'Cilck to choose country'){
      States.innerHTML = '<p>Please Wait For Content To Appear</p>'
    }
    if(select.className === 'select block'){
      select.className = 'select none'
    }
     if(city.className === 'city block'){
      city.className = 'city none'
    }
})
div.addEventListener('click', () =>{
    if(select.className === 'select none'){
      select.className = 'select block'
    } else{
        select.className = 'select none'
    }
   if(city.className === 'city block'){
      city.className = 'city none'
    }
     if(States.className === 'state block'){
      States.className = 'state none'
    }
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
   if(div.textContent !== localStorage.getItem('div')){
      localStorage.setItem('btncity', '')
    localStorage.setItem('weather', '')
    localStorage.setItem('btn','' )
    localStorage.setItem('States', '')
    localStorage.setItem('city', '')
    States.innerHTML = ''
    city.innerHTML = '' 
    btn.textContent = 'Cilck to choose state'
    btncity.textContent = 'Cilck to choose city'
    weather.innerHTML = '' 
    weather2.innerHTML = ''
    }
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
    if(btn.textContent !== localStorage.getItem('btn')){
      btncity.textContent = 'Cilck to choose city'
    weather.innerHTML = '' 
     weather2.innerHTML = '' 
    city.innerHTML = ''
    localStorage.setItem('btncity', btncity.textContent)
    localStorage.setItem('weather', weather.innerHTML)
    localStorage.setItem('city', city.innerHTML)
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
    if(btncity.textContent !== localStorage.getItem('btncity')){
      weather.innerHTML = ''
      weather2.innerHTML = ''
      localStorage.setItem('weather', '')
    }
    localStorage.setItem('btncity', btncity.textContent)
}
})
if(localStorage.getItem('btncity')){
btncity.textContent = localStorage.getItem('btncity')
}
 const getData = async (data) =>{
    const respones = await fetch(data)
    const info =  await respones.json()
    console.log(info)
    switch(info.weather[0].main){
  case "Clear":
    if(info.weather[0].icon.includes = 'n'){
     weather.innerHTML = `<img src="./moon.png" alt="" id="img" >`
    }else{
      weather.innerHTML = `<img src="./sun.png" alt="" id="img" >`
    }
    break
  case "Clouds":
    weather.innerHTML = `<img src="./cloud.png" alt="" id="img" >`
    break  
  case "Rain":
    weather.innerHTML = `<img src="./rain.png" alt="" id="img" >`
    break
  case "Thunderstorm":
    weather.innerHTML = `<img src="./thunder.png" alt="" id="img" >`
    break 
  case "Snow":
    weather.innerHTML = `<img src="./snow.png" alt="" id="img" >`
    break
    }
    weather2.innerHTML = '<p class="wind">Wind</p>'
    weather2.innerHTML += `<p class="speed">${Math.round(info.wind.speed)}m/s</p>`
    weather2.innerHTML += '<p class="humidity">Humidity</p>'
    weather2.innerHTML += ` <p class="Hum">${info.main.humidity}%</p>`
    weather2.innerHTML += ' <p class="pressure">Pressure</p>'
    weather2.innerHTML += `<p class="pres">${info.main.pressure}mb</p>`
    localStorage.setItem('weather2', weather2.innerHTML)
    weather.innerHTML += `<h1 class = 'h'>${info.weather[0].description}</h1>`
    weather.innerHTML += `<p>${Math.round(info.main.temp)}<sup>o</sup></p>`
    localStorage.setItem('weather', weather.innerHTML) 
 }
if(localStorage.getItem('weather')){
  weather.innerHTML += localStorage.getItem('weather')
}
if(localStorage.getItem('weather2')){
  weather2.innerHTML += localStorage.getItem('weather2')
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
f.innerHTML = `<h1 class = 'day'>${day[Datee.getDay()]}, ${month[Datee.getMonth()]} ${Datee.getDate()}</h1>`
const Day = document.querySelector('.day')

page.addEventListener('click', (e) =>{
if(e.target.className === 'page1'){
  weather.className = 'weather block'
  weather2.className = 'weather2 none'
  Day.className = 'day pg1'
  localStorage.setItem('Day' , Day.className)
localStorage.setItem('weather22' , weather2.className)
localStorage.setItem('weatherr' , weather.className)
}
if(e.target.className === 'page2'){
weather.className = 'weather none'
weather2.className = 'weather2 block'
 Day.className = 'day pg2'
 localStorage.setItem('Day' , Day.className)
localStorage.setItem('weather22' , weather2.className)
localStorage.setItem('weatherr' , weather.className)
}
if(weather.className === 'weather none'){
page.firstElementChild.checked = false
page.lastElementChild.checked = true
localStorage.setItem('page2',true)
localStorage.setItem('page1',false)
}
if(weather2.className === 'weather2 none'){
page.firstElementChild.checked = true
page.lastElementChild.checked = false
localStorage.setItem('page1',true)
localStorage.setItem('page2',false)
}
})

window.addEventListener('keydown',(e) =>{
  if(e.key === 'ArrowLeft'){
    weather.className = 'weather block'
  weather2.className = 'weather2 none'
  Day.className = 'day pg1'
  localStorage.setItem('Day' , Day.className)
localStorage.setItem('weather22' , weather2.className)
localStorage.setItem('weatherr' , weather.className)
  }
  if(e.key === 'ArrowRight'){
   weather.className = 'weather none'
weather2.className = 'weather2 block'
 Day.className = 'day pg2'
 localStorage.setItem('Day' , Day.className)
localStorage.setItem('weather22' , weather2.className)
localStorage.setItem('weatherr' , weather.className)
  }
  if(weather.className === 'weather none'){
page.firstElementChild.checked = false
page.lastElementChild.checked = true
localStorage.setItem('page2',true)
localStorage.setItem('page1',false)
}
if(weather2.className === 'weather2 none'){
page.firstElementChild.checked = true
page.lastElementChild.checked = false
localStorage.setItem('page1',true)
localStorage.setItem('page2',false)
}
})
Day.className = localStorage.getItem('Day')
weather.className = localStorage.getItem('weatherr')
weather2.className = localStorage.getItem('weather22')
let pg1 = localStorage.getItem('page1')
let pg2 = localStorage.getItem('page2')
page.firstElementChild.checked = JSON.parse(pg1)
page.lastElementChild.checked = JSON.parse(pg2)




