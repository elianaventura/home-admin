import { NextResponse } from 'next/server';
export async function GET(request) {
  const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${request.q}`, {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();
 
  return NextResponse.json({ data });
}
