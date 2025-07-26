import Footer from "@/components/footer"
import Header from "@/components/header"
import GameHolder from "@/components/game-holder"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 bg-boardbyte-bg">
      <Header/>
      <GameHolder/>
      <Footer/>
    </main>
  )
}
