import connectFourDataInstaller from "@/data-scripts/connect-four";
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        message: "Go data installer is running",
        data: await connectFourDataInstaller() // Hardcoded for now. 
    });
}