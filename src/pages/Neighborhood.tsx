import { MapPin, Coffee, ShoppingCart, Trees, Train } from "lucide-react";
import { Card } from "@/components/ui/card";

const NeighborhoodPage = () => {
  const locations = [
    {
      name: "Church St Muni Station",
      description: "Fastest way to get downtown",
      address: "Church St and Market St",
      distance: "0.1 miles",
      icon: Train,
      type: "Transit"
    },
    {
      name: "16th Street BART",
      description: "Fastest way to SFO and the East Bay",
      address: "16th St and Mission St",
      distance: "0.2 miles",
      icon: Train,
      type: "Transit"
    },
    {
      name: "Whole Foods Market",
      description: "Full-service grocery store",
      address: "2001 Market St",
      distance: "0.2 miles",
      icon: ShoppingCart,
      type: "Grocery"
    },
    {
      name: "Four Barrel Coffee",
      description: "Our go-to neighborhood coffee shop",
      address: "375 Valencia St",
      distance: "0.2 miles",
      icon: Coffee,
      type: "Coffee"
    },
    {
      name: "Verve Coffee Roasters",
      description: "Because you need more than one coffee option",
      address: "2101 Market St",
      distance: "0.2 miles",
      icon: Coffee,
      type: "Coffee"
    },
    {
      name: "Dolores Park",
      description: "Great place to take a walk and see a view of the city",
      address: "Dolores St & 18th St",
      distance: "0.6 miles",
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
