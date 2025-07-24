// function Banner() {
//     return <h1>La maison jungle</h1>
// }

function Header(){
   return <h1>{ "la maison jungle".toUpperCase() }</h1>
}

function Description(){
  return <p> Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>
}

function Banner() {
    return <div><Header /><Description /></div>
}

export default Banner
