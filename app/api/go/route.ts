import { goDataInstaller } from "@/data-scripts/go";
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        message: "Go data installer is running",
        data: await goDataInstaller(200)
    });
}