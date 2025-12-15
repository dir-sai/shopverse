import { NextRequest, NextResponse } from 'next/server';
import { productStore } from '../../../../../lib/productStore';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const productId = params.id;
    const updateData = await request.json();
    
    const updatedProduct = productStore.update(productId, updateData);
    
    if (!updatedProduct) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error('Admin update product error:', error);
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const productId = params.id;
    
    const deletedProduct = productStore.delete(productId);
    
    if (!deletedProduct) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(deletedProduct);
  } catch (error) {
    console.error('Admin delete product error:', error);
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const productId = params.id;
    
    const product = productStore.getById(productId);
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(product);
  } catch (error) {
    console.error('Admin get product error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}