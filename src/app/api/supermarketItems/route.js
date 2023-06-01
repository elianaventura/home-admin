import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET(request) {
  // const req = await(request.json()); //da error de parseo de json
  // console.log(JSON.stringify(request)); //loguea objeto vacio
  const headers_ = headers();
  // console.log(request.headers); //loguea headers pero con formato raro
  // console.log(headers_); //mismo que anterior
  console.log(headers_.get('host'));
  console.log(headers_.get('user-agent'));
  console.log(request.url);
  
  const res = await fetch('http://localhost:4000/supermarketitems', {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();
 
  return NextResponse.json({ data });
}

export async function POST(request) {
  const req = await(request.json());
  const res = await fetch('http://localhost:4000/supermarketItems', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    },
    body: JSON.stringify(req),
  });
  const data = await res.json();
 
  return NextResponse.json({ data });
}

export async function PUT(request) {
  const req = await(request.json());
  const url = `http://localhost:4000/supermarketItems/${req.id}`
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    },
    body: JSON.stringify(req),
  });
  const data = await res.json();
 
  return NextResponse.json({ data });
}