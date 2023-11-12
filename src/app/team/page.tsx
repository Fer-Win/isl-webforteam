import Footer from "@/components/Footer"
import NavBar from "../../components/NavBar"
import PlayerSection from "@/components/PlayerSection"
import CoachSection from "@/components/CoachSection"

const TeamPage = () => {
  
  return (
    <main>
      <NavBar></NavBar>
    <div className="title">Players</div>
    <PlayerSection></PlayerSection>
    <div className="title">Coaches</div>
    <CoachSection></CoachSection>
    <Footer></Footer>
    </main>
  )
}
export default TeamPage