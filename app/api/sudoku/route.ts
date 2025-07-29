import { sudokuDataInstaller } from "@/data-scripts/sudoku";
import { NextResponse } from "next/server";
import { SudokuDifficulty } from "@/data-scripts/sudoku";

export async function GET() {
    const count = 100; 
    const difficulty = SudokuDifficulty.Mix; // hard-coded for now. 
    
    const data = sudokuDataInstaller(count, difficulty);
    return NextResponse.json({
        message: "Sudoku data installer is running",
        data: data
    });
}