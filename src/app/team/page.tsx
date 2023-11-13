import Footer from "@/components/Footer"
import NavBar from "../../components/NavBar"
import PlayerSection from "@/components/PlayerSection"
import CoachSection from "@/components/CoachSection"

const TeamPage = () => {
  
  return (
    <main>
      <NavBar></NavBar>
    <div className="title font-familjen font-bold text-[3rem] ml-10 sm:ml-20 sm:text-[5rem] opacity-80">Players</div>
    <PlayerSection></PlayerSection>
    <div className="title font-familjen font-bold  ml-12 sm:text-[5rem] sm:ml-20 text-[3rem]">Coaches</div>
    <CoachSection></CoachSection>
    <Footer></Footer>
    </main>
  )
}
export default TeamPage