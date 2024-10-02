import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Update the fetch URL to point to the FastAPI backend
    const response = await fetch('http://localhost:8000/api/dyslexia-test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch from backend' }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in POST /api/dyslexia-test:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
