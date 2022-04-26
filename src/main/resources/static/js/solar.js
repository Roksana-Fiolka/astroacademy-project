const planets = document.querySelectorAll('.planet')

const orbit_radius = [11,16.5,25,35,56,69,82.5,95] // tablica, która zawiera promień orbity, te wartości są wymyślone

//to tablica zawierająca wartości kątów "θ" (promieni) utworzonych przez środki planet i Słońca z osią X.
// Wartość początkowa wszystkich 8 kątów jest ustawiona na 0
let a_radius = new Array(8).fill(0)

const planet_velocities = [0.032,0.023,0.020,0.016,0.008,0.006,0.004,0.003] //prędkość planet względem ziemi, wartości nie odzwierciedlają rzeczywistości

const moon = document.querySelector('#moon')
const m_radius = 4
let m_radians = 0
const m_velocity = 0.2

//przypisanie zmiennej do elementu
const v_orbits = document.querySelectorAll('.v-orbit')
const m_orbit = document.querySelector('#m-orbit')

//promień orbity
v_orbits.forEach((v_orbit,index)=>{
    v_orbit.style.height = `${orbit_radius[index]*2}vmin`
    v_orbit.style.width = `${orbit_radius[index]*2}vmin`
})
setInterval(()=>{
    planets.forEach((planet,index)=>{
        planet.style.marginLeft = `${Math.cos(a_radius[index]) * orbit_radius[index]}vmin`
        planet.style.marginTop = `${Math.sin(a_radius[index]) * orbit_radius[index]}vmin`
        a_radius[index] += planet_velocities[index]
    })
//dodanie księżyca w odpowiednim miejscu przy użyciu równania parametrycznego
    moon.style.marginLeft = `${earthX() + (Math.cos(m_radians) * m_radius) * 2}vmin`
    moon.style.marginTop = `${earthY() + (Math.sin(m_radians) * m_radius) * 2}vmin`
    m_radians += m_velocity

    //dodanie orbity wokół księżyca mając na uwadze, że pozycja ziemi się zmienia
    m_orbit.style.marginLeft = `${earthX()}vmin`
    m_orbit.style.marginTop = `${earthY()}vmin`
},1000/60)


function earthX(){
    return Number(planets[2].style.marginLeft.split('vmin')[0]) * 2
}

function earthY(){
    return Number(planets[2].style.marginTop.split('vmin')[0]) * 2
}
