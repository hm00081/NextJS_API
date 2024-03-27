import { NextResponse } from '@/node_modules/next/server';
import data from '../../../data/data.json';

export async function POST(req: Request, context: any) {
    const { params } = context;
    const user = data.filter((x) => params.userId === x.id.toString());
    return NextResponse.json({ user });
}
