import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Circle, HardDrive } from "lucide-react"

export default function Connect4Component() {
  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-200 cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Circle className="w-5 h-5 text-red-600 fill-current" />
            Connect 4 Dataset
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            Board Game
          </Badge>
        </div>
        <CardDescription className="text-sm text-muted-foreground">
          Multivariate spatial game positions for classification tasks
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Instances</span>
            </div>
            <span className="text-sm font-semibold text-foreground">67,557</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">Size</span>
            </div>
            <span className="text-sm font-semibold text-foreground">390.5 KB</span>
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground">Click to view dataset details and download options</p>
        </div>
      </CardContent>
    </Card>
  )
}
