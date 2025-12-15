import { NextRequest, NextResponse } from 'next/server';
import { productStore } from '../../../../lib/productStore';

export async function POST(request: NextRequest) {
  try {
    const productData = await request.json();
    
    const newProduct = productStore.create(productData);
    
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Admin create product error:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '100');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    return NextResponse.json(
      productStore.filter({
        category,
        search,
        page,
        limit
      })
    );
  } catch (error) {
    console.error('Admin get products error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}