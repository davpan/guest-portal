
import React from 'react';
import { Link } from 'react-router-dom';
import { Tv, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import PageTransition from '@/components/layout/PageTransition';

const TVPage = () => {
  return (
    <PageTransition>
      <div className="container max-w-2xl mx-auto">
        <div className="mb-8 flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-4">
            <Link to="/" aria-label="Back to home">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">TV Instructions</h1>
        </div>

        <Card className="mb-6">
          <CardHeader className="bg-primary/5 pb-4">
            <div className="flex items-center mb-2">
              <Tv className="h-5 w-5 mr-2 text-primary" />
              <CardTitle>Television Guide</CardTitle>
            </div>
            <CardDescription>How to use the TV and streaming services</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Basic Controls</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Press the power button on the black Samsung remote to turn on the TV
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Press the home button on the silver Apple remote to start using the Apple TV
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Streaming Services</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  The following streaming services are signed in and ready to use:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground pl-2 space-y-1">
                  <li>Netflix</li>
                  <li>Max</li>
                  <li>Apple TV+</li>
                  <li>YouTube</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Sound System</h3>
                <p className="text-sm text-muted-foreground">
                  The soundbar turns on automatically with the TV. Use the small silver remote to adjust sound settings.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
};

export default TVPage;
