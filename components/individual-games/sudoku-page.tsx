"use client";
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Grid3X3, HardDrive } from "lucide-react"

export default function SudokuComponent() {
    const [puzzles, setPuzzles] = useState(0);
    useEffect(() => {
        fetch("api/sudoku").then(res => res.json()).then(data => {
            if (data && data.data) {
                console.log("Sudoku data fetched successfully:", data);
                setPuzzles(data.data.length)
            }
            else {
                console.error("Unexpected data format:", data)
            };
        })       
    });
    
  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-200 cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Grid3X3 className="w-5 h-5 text-purple-600" />
            Sudoku Dataset
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            Puzzle Game
          </Badge>
        </div>
        <CardDescription className="text-sm text-muted-foreground">
          Sudoku puzzles with varying difficulty levels and solutions
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Puzzles</span>
            </div>
            <span className="text-sm font-semibold text-foreground">~1.2M</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">Size</span>
            </div>
            <span className="text-sm font-semibold text-foreground">~85 MB</span>
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground">Click to view dataset details and download options</p>
        </div>
      </CardContent>
    </Card>
  )
}
