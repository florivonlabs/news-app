import { Menu, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b-2 shadow-sm bg-background">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <h1 className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-xl font-bold text-transparent">Nusantara News</h1>
            </div>
          </div>

          <div className="mx-8 hidden max-w-md flex-1 items-center gap-4 md:flex">
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <Input placeholder="Cari berita..." className="border-red-200 pl-10 focus:border-red-400" />
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <Input placeholder="Cari berita..." className="border-red-200 pl-10 focus:border-red-400" />
          </div>
        </div>
      </div>
    </header>
  );
};
