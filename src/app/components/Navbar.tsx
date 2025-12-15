import React from 'react';
import { ShoppingCart, User, LogOut, LayoutDashboard, Store } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { Badge } from './ui/badge';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const { user, logout, isAdmin } = useAuth();
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Store className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl">ShopVerse</span>
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            {user && (
              <>
                <Button
                  variant={currentPage === 'home' ? 'default' : 'ghost'}
                  onClick={() => onNavigate('home')}
                >
                  Home
                </Button>
                <Button
                  variant={currentPage === 'products' ? 'default' : 'ghost'}
                  onClick={() => onNavigate('products')}
                >
                  Products
                </Button>
                <Button
                  variant={currentPage === 'orders' ? 'default' : 'ghost'}
                  onClick={() => onNavigate('orders')}
                >
                  Orders
                </Button>
              </>
            )}

            {/* Cart Icon */}
            {user && (
              <Button
                variant={currentPage === 'cart' ? 'default' : 'ghost'}
                onClick={() => onNavigate('cart')}
                className="relative"
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            )}

            {/* User Menu */}
            {user ? (
              <div className="flex items-center gap-2">
                {isAdmin && (
                  <Button
                    variant={currentPage.startsWith('admin') ? 'default' : 'outline'}
                    onClick={() => onNavigate('admin-dashboard')}
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Admin
                  </Button>
                )}
                <Button
                  variant="ghost"
                  onClick={() => onNavigate('profile')}
                >
                  <User className="w-4 h-4 mr-2" />
                  {user.name}
                </Button>
                <Button variant="outline" onClick={logout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" onClick={() => onNavigate('login')}>
                  Login
                </Button>
                <Button onClick={() => onNavigate('register')}>
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
