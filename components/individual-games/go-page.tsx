"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, GamepadIcon, HardDrive } from "lucide-react"
import Image from "next/image";
import GoBoardIcon from "@/public/go-board-09x09-stones.svg";

export default function GoComponent() {
  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-200 cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <GamepadIcon className="w-5 h-5 text-slate-600" />
            Go Dataset
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            Board Game
          </Badge>
        </div>
        <CardDescription className="text-sm text-muted-foreground">
          Professional Go game records and positions
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Games</span>
            </div>
            <span className="text-sm font-semibold text-foreground">~50,000</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">Size</span>
            </div>
            <span className="text-sm font-semibold text-foreground">~2.3 GB</span>
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground">Click to view dataset details and download options</p>
        </div>
      </CardContent>
    </Card>
  )
}
