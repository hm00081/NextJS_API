import { NextRequest, NextResponse } from '@/node_modules/next/server';
import data from '../../../data/police.json';

// GET method
export async function GET(req: NextRequest, context: any) {
    const { crimeCat } = context.params;
    const filteredData = data.filter((item) => item.crimeMain === crimeCat || item.crimeSub === crimeCat);
    return NextResponse.json(filteredData);
}
// POST method
export async function POST(req: NextRequest, context: any) {
    const { crimeCat } = context.params;
    const filteredData = data.filter((item) => item.crimeMain === crimeCat || item.crimeSub === crimeCat);
    return NextResponse.json(filteredData);
}
// PUT method
// PUT, DELETE는 실제 데이터베이스나 상태 관리 시스템과의 연동이 필요해보임
export async function PUT(req: NextRequest, context: any) {
    // PUT 메서드 로직 구현
    return NextResponse.json({ message: 'PUT request processed' });
}
// DELETE method
export async function DELETE(req: NextRequest, context: any) {
    // DELETE 메서드 로직 구현
    return NextResponse.json({ message: 'DELETE request processed' });
}
