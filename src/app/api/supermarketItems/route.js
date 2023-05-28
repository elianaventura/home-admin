import { NextResponse } from 'next/server';

export async function GET(request) {
  const res = await fetch('https://cat-fact.herokuapp.com/facts', {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();
 
  return NextResponse.json({ data });
}

export async function POST(request) {
  const res = await fetch('localhost:4000/supermarketItems', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    },
    body: JSON.stringify(request.body),
  });
  const data = await res.json();
 
  return NextResponse.json({ data });
}