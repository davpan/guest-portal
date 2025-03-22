import { MapPin, Coffee, ShoppingCart, Trees, Train } from "lucide-react";
import { Card } from "@/components/ui/card";

const NeighborhoodPage = () => {
  const locations = [
    {
      name: "16th Street BART",
      description: "BART station with connections to SF, East Bay, and SFO",
      address: "2000 Mission St",
      distance: "0.8 miles",
      icon: Train,
      type: "Transit"
    },
    {
      name: "Church St Muni Station",
      description: "J-Church Muni Metro station with downtown connections",
      address: "Church St & 27th St",
      distance: "0.1 miles",
      icon: Train,
      type: "Transit"
    },
    {
      name: "Whole Foods Market",
      description: "Full-service grocery store with organic options",
      address: "450 Rhode Island St",
      distance: "0.6 miles",
      icon: ShoppingCart,
      type: "Grocery"
    },
    {
      name: "Verve Coffee Roasters",
      description: "Modern cafe with specialty coffee and pastries",
      address: "2101 Market St",
      distance: "0.7 miles",
      icon: Coffee,
      type: "Coffee"
    },
    {
      name: "Four Barrel Coffee",
      description: "Artisanal coffee roaster with pour-over options",
      address: "375 Valencia St",
      distance: "0.5 miles",
      icon: Coffee,
      type: "Coffee"
    },
    {
      name: "Dolores Park",
      description: "Popular park with city views and picnic areas",
      address: "Dolores St & 19th St",
      distance: "0.4 miles",
      icon: Trees,
      type: "Park"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Neighborhood Guide</h1>
          <p className="text-muted-foreground">
            Here are some of our favorite spots within walking distance
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {locations.map((location, index) => {
            const Icon = location.icon;
            return (
              <Card key={index} className="p-4 hover:bg-accent transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">{location.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {location.description}
                    </p>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{location.address}</span>
                      <span className="text-muted-foreground">
                        ({location.distance})
                      </span>
                    </div>
                    <div className="inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                      {location.type}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodPage;
