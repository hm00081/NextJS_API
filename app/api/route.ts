import { NextResponse } from '@/node_modules/next/server';

export async function GET() {
    return NextResponse.json({
        hello: 'world',
    });
}

export async function POST(req: Request) {
    const data = await req.json();
    return NextResponse.json({
        data,
    });
}

export async function PUT() {
    return NextResponse.json({
        hello: 'world',
    });
}

export async function DELETE() {
    return NextResponse.json({
        hello: 'world',
    });
}
