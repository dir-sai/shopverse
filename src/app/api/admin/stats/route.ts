import { NextRequest, NextResponse } from 'next/server';

// Mock stats data (in a real app, this would come from database)
const mockStats = {
  totalProducts: 8,
  totalOrders: 24,
  totalUsers: 156,
  totalRevenue: 280800,
};

export async function GET(request: NextRequest) {
  try {
    // In production, you would fetch from database
    // For demo, return mock stats
    return NextResponse.json(mockStats);
  } catch (error) {
    console.error('Admin stats error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}