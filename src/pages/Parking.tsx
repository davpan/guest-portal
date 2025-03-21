
import React from 'react';
import { Link } from 'react-router-dom';
import { CircleParking, ArrowLeft, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PageTransition from '@/components/layout/PageTransition';

const ParkingPage = () => {
  const garageCode = import.meta.env.VITE_GARAGE_CODE;

  if (!garageCode) {
    throw new Error('VITE_GARAGE_CODE environment variable must be set');
  }
  return (
    <PageTransition>
      <div className="container max-w-2xl mx-auto">
        <div className="mb-8 flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-4">
            <Link to="/" aria-label="Back to home">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Parking Information</h1>
        </div>



        <Card className="mb-6">
          <CardHeader className="bg-primary/5 pb-4">
            <div className="flex items-center mb-2">
              <CircleParking className="h-5 w-5 mr-2 text-primary" />
              <CardTitle>Where to Park</CardTitle>
            </div>
            <CardDescription>Parking options for your vehicle</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="font-medium mb-2">Driveway</h3>
              <div className="flex items-start">
                <Car className="h-5 w-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  If there is no car directly in front of our driveway, you can block the driveway. Please don't block the sidewalk though. Let us know if you do this so we can inform our neighbors.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Garage</h3>
              <div className="flex items-start">
                <Car className="h-5 w-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    You may park in the garage. The garage code is:
                  </p>
                  <p className="text-lg font-mono font-medium">{garageCode}</p>
                  <p className="text-sm text-muted-foreground">
                    Please park in the left spot of the garage. Make sure to close the garage door after entering and exiting.
                  </p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>


      </div>
    </PageTransition>
  );
};

export default ParkingPage;
