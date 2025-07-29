import GoComponent from "./individual-games/go-page"
import ChessComponent from "./individual-games/chess-page"
import Connect4Component from "./individual-games/connect-four-page"
import SudokuComponent from "./individual-games/sudoku-page"

export default function GameHolder() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Tabletop Datasets</h1>
        <p className="text-muted-foreground">My vision for this is building an agent that is tailored towards tabletop games and would be used for playtesting them (evaluating their mechanics, balance, in-game economy etc.)</p>
        <p className="text-muted-foreground">I do not have the time to do this solo, so if you wanna work together towards this vision, reach out to me.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GoComponent />
        <ChessComponent />
        <Connect4Component />
        <SudokuComponent />
      </div>
    </div>
  )
}
