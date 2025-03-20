
import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PageTransition from '@/components/layout/PageTransition';

const LightingPage = () => {
  return (
    <PageTransition>
      <div className="container max-w-2xl mx-auto">
        <div className="mb-8 flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-4">
            <Link to="/" aria-label="Back to home">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Lighting Controls</h1>
        </div>

        <Card className="mb-6">
          <CardHeader className="bg-primary/5 pb-4">
            <div className="flex items-center mb-2">
              <Lightbulb className="h-5 w-5 mr-2 text-primary" />
              <CardTitle>Light Switch Locations</CardTitle>
            </div>
            <CardDescription>Where to find and how to use the lighting controls</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="font-medium mb-2">Living Room</h3>
              <p className="text-sm text-muted-foreground mb-2">
                The living room has three light switches located by the main entrance:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground pl-2 space-y-1">
                <li>Left switch controls the ceiling lights</li>
                <li>Middle switch controls the floor lamp</li>
                <li>Right switch controls the accent lighting</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Kitchen</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Kitchen lights are controlled by the panel next to the refrigerator:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground pl-2 space-y-1">
                <li>Top button for overhead lights</li>
                <li>Bottom button for under-cabinet lighting</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Bedrooms</h3>
              <p className="text-sm text-muted-foreground">
                Each bedroom has a switch by the door and additional controls on the nightstands.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="glass p-4 rounded-lg mt-8">
          <h3 className="font-medium mb-2">Automatic Lights</h3>
          <p className="text-sm text-muted-foreground">
            The outdoor lights automatically turn on at sunset and off at sunrise. Please do not adjust the timers.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default LightingPage;
