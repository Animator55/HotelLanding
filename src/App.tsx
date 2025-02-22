import Beneficts from "./components/Beneficts";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Popular from "./components/Popular";
import Process from "./components/Process";
import "./assets/App.css"

export default function App (){
  return <main>
    <NavBar/>
    <Header/>
    <Beneficts/>
    <Process/>
    <Popular/>
    <Clients/>
    <Footer/>
  </main>
}