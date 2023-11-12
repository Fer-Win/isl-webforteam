import Footer from "@/components/Footer"
import NavBar from "../../components/NavBar"
import PlayerSection from "@/components/PlayerSection"
import CoachSection from "@/components/CoachSection"

const TeamPage = () => {
  
  return (
    <main>
      <NavBar></NavBar>
    <div className="title font-familjen font-bold text-[5rem] opacity-80">Players</div>
    <PlayerSection></PlayerSection>
    <div className="title font-familjen font-bold text-[5rem]">Coaches</div>
    <CoachSection></CoachSection>
    <Footer></Footer>
    </main>
  )
}
export default TeamPage