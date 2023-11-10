import Footer from "@/components/Footer"
import NavBar from "../../components/NavBar"
import PlayerCard from "@/components/PlayerCard"

const TeamPage = () => {
  const playerStats ={
    goals:9,
    assists: 2,
    yellowCards: 1,
    redCards: 2,
  }
  return (
    <main>
      <NavBar></NavBar>
    <div>This is the Team Page</div>
    <PlayerCard picture="/icon.svg" name="Ferwin Lopez" stats={playerStats}  ></PlayerCard>
    <Footer></Footer>
    </main>
  )
}
export default TeamPage