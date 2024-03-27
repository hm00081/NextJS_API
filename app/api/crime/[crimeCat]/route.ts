import { NextResponse } from '@/node_modules/next/server';
import data from '../../../data/police.json';

export async function POST(req: Request, context: any) {
    const { params } = context;
    const user = data.filter((x) => params.userId === x.범죄중분류);
    return NextResponse.json({ user });
}
