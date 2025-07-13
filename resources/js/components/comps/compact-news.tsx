import { Bookmark, Clock, Eye, Share2 } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export type CompactNewsItem = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  time: string;
  views: string;
};

export const CompactNews = (item: CompactNewsItem) => {
  return (
    <Card className="overflow-hidden border-red-100 transition-shadow hover:shadow-lg">
      <CardContent className="p-0">
        <div className="flex gap-4 p-4">
          <img
            src={item.image || '/placeholder.svg'}
            alt={item.title}
            className="h-20 w-20 flex-shrink-0 rounded-lg object-cover md:h-24 md:w-24"
            onError={(e) => {
              e.currentTarget.onerror = null; // hindari loop error
              e.currentTarget.src = '/placeholder.svg'; // fallback image
            }}
          />
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="secondary" className="bg-orange-100 text-xs text-orange-700">
                {item.category}
              </Badge>
            </div>
            <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-gray-900 md:text-base">{item.title}</h3>
            <p className="mb-3 line-clamp-2 text-xs text-gray-600 md:text-sm">{item.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {item.time}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {item.views}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Share2 className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Bookmark className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
