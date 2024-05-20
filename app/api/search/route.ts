// app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const extractQuery = url.searchParams.get('query');

    // Handle case when query is null
    if (!extractQuery) {
      return NextResponse.json({
        success: false,
        message: 'Query parameter is missing',
      });
    }
    const res = await fetch("http://localhost:8000/popularvacancies", {
    next: { revalidate: 10 },
  });
  const popularVacanciesData = await res.json();


    const searchResult = popularVacanciesData.filter((item: { name: string; }) =>
      item.name.toLowerCase().includes(extractQuery.toLowerCase())
    );

    return NextResponse.json({
      success: true,
      data: searchResult
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      success: false,
      message: 'Something went wrong! Please try again'
    });
  }
}
