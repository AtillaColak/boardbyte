import { installer } from "@/data-scripts/chess";
import { LichessVariant } from "@/data-scripts/chess";
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        message: "Go data installer is running",
        data: await installer(LichessVariant.Standard) // Hardcoded for now. dynamically get from user.
    });
}