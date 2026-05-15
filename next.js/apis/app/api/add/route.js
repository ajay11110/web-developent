import { NextResponse } from "next/server";

export async function POST(req) {
    let data = await req.json()
    console.log(data)
    return NextResponse.json({
        success: true,
        data: data
    })
}