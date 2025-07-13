import { Clock, Eye } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

export const FeaturedNews = () => {
  return (
    <Card className="mb-6 overflow-hidden border-red-100 shadow-lg py-0">
      <div className="relative">
        <img src="./feature-news.png" className="h-48 w-full object-cover md:h-64" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-700">
          Racing
        </Badge>
        <div className="absolute right-4 bottom-4 left-4 text-white">
          <h2 className="mb-2 line-clamp-2 text-lg font-bold md:text-xl">
            Ferrari wins third consecutive 24 Hours of Le Mans 
          </h2>
          <p className="mb-3 line-clamp-2 text-sm text-gray-200">
            For the third year running, Ferrari has triumphed at the 24 Hours of Le Mans, securing the 93rd edition of the French endurance race with the number 83 499P driven by Prancing Horse’s official driver Yifei Ye, alongside Phil Hanson and Robert Kubica, who crossed the line in the AF Corse team’s Giallo Modena-liveried car. In the fourth round of the 2025 FIA WEC, the number 51 499P of Alessandro Pier Guidi, James Calado and Antonio Giovinazzi took third, ahead of the other official Ferrari – AF Corse car, number 50, driven by Antonio Fuoco, Miguel Molina and Nicklas Nielsen*. Ferrari Chairman John Elkann and CEO Benedetto Vigna attended the event, which drew 332,000 spectators, celebrating the win with the team.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              2 Hours ago
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              150k
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
