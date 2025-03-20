
import React from 'react';
import { Link } from 'react-router-dom';
import { CircleParking, ArrowLeft, Car, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import PageTransition from '@/components/layout/PageTransition';

const ParkingPage = () => {
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

        <Alert className="mb-6 border-amber-300 bg-amber-50 dark:bg-amber-950/30">
          <Clock className="h-4 w-4 text-amber-600 dark:text-amber-500" />
          <AlertTitle className="text-amber-800 dark:text-amber-400">Street Cleaning</AlertTitle>
          <AlertDescription className="text-amber-700 dark:text-amber-300">
            Remember: No parking on the north side of Ramona Ave on Mondays between 10AM-2PM.
          </AlertDescription>
        </Alert>

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
                  You may park in the driveway. Please keep to the right side to allow space for the resident's vehicle.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Street Parking</h3>
              <div className="flex items-start">
                <Car className="h-5 w-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Street parking is available directly in front of the house and across the street. Please check signs for restrictions.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Garage</h3>
              <div className="flex items-start">
                <Car className="h-5 w-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  The garage is not available for guest parking.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="glass p-4 rounded-lg mt-8">
          <h3 className="font-medium mb-2">Visitor Permits</h3>
          <p className="text-sm text-muted-foreground">
            If you're staying longer than 3 days, you'll need a visitor parking permit for street parking. Please let your host know in advance.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default ParkingPage;
