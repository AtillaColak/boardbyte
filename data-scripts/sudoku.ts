import { getSudoku } from 'sudoku-gen';

export enum SudokuDifficulty {
    Easy = "easy",
    Medium = "medium", 
    Hard = "hard",
    Expert = "expert",
    Mix = "mix"
}

interface SudokuEntry {
    puzzle: string; 
    solution: string; 
    difficulty: "easy" | "medium" | "hard" | "expert";
}

function getRandomDifficulty(): "easy" | "medium" | "hard" | "expert" {
  const options = ["easy", "medium", "hard", "expert"];
  return options[Math.floor(Math.random() * options.length)] as
    | "easy"
    | "medium"
    | "hard"
    | "expert";
}

export function sudokuDataInstaller(count: number, difficulty: SudokuDifficulty): SudokuEntry[] {
    const entries: SudokuEntry[] = []; 
    if(difficulty === SudokuDifficulty.Mix) {
        for (let i = 0; i < count; i++){
            const randomDifficulty = getRandomDifficulty();
            const puzzle = getSudoku(randomDifficulty);
            entries.push({
                puzzle: puzzle.puzzle,
                solution: puzzle.solution,
                difficulty: puzzle.difficulty
            });
        }
    }
    else{ 
        for (let i = 0; i < count; i++) {
            const puzzle = getSudoku(difficulty);
            entries.push({
                puzzle: puzzle.puzzle,
                solution: puzzle.solution,
                difficulty: puzzle.difficulty
            });
        }
    }
    return entries; 
}