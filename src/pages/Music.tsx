
import React from 'react';
import { Link } from 'react-router-dom';
import { Music, ArrowLeft, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import PageTransition from '@/components/layout/PageTransition';

const MusicPage = () => {
  return (
    <PageTransition>
      <div className="container max-w-2xl mx-auto">
        <div className="mb-8 flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-4">
            <Link to="/" aria-label="Back to home">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Music System</h1>
        </div>

        <Card className="mb-6">
          <CardHeader className="bg-primary/5 pb-4">
            <div className="flex items-center mb-2">
              <Music className="h-5 w-5 mr-2 text-primary" />
              <CardTitle>Music & Audio Guide</CardTitle>
            </div>
            <CardDescription>How to play music through the house speakers</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-4">
                  <Smartphone className="h-4 w-4 mr-2 text-primary" />
                  <h3 className="font-medium">Using AirPlay (Apple Devices)</h3>
                </div>
                <ol className="list-decimal list-inside text-sm text-muted-foreground pl-2 space-y-2">
                  <li>Connect to the house WiFi network</li>
                  <li>Open Control Center on your iOS device</li>
                  <li>Tap the AirPlay icon in the music controls</li>
                  <li>Choose from the available AirPlay devices below</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground">Available AirPlay Devices:</h4>
                
                <div className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <h5 className="font-medium mb-1">Upstairs</h5>
                    <p className="text-sm text-muted-foreground">Play music through the ceiling speakers in the upstairs rooms</p>
                  </div>

                  <div className="p-3 bg-primary/5 rounded-lg">
                    <h5 className="font-medium mb-1">TV</h5>
                    <p className="text-sm text-muted-foreground">Play music through the living room soundbar</p>
                  </div>

                  <div className="p-3 bg-primary/5 rounded-lg">
                    <h5 className="font-medium mb-1">Sonos Move</h5>
                    <p className="text-sm text-muted-foreground">Portable speaker that can be used outside</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="glass p-4 rounded-lg mt-8">
          <h3 className="font-medium mb-2">Volume Control</h3>
          <p className="text-sm text-muted-foreground">
            Please be mindful of neighbors and keep the volume at a comfortable level.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default MusicPage;
