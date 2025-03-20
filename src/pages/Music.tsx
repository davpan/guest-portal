
import React from 'react';
import { Link } from 'react-router-dom';
import { Music, ArrowLeft, Bluetooth, Smartphone, Speaker } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
            <Tabs defaultValue="bluetooth" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="bluetooth">
                  <div className="flex items-center">
                    <Bluetooth className="h-4 w-4 mr-2" />
                    <span>Bluetooth</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="airplay">
                  <div className="flex items-center">
                    <Smartphone className="h-4 w-4 mr-2" />
                    <span>AirPlay</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="sonos">
                  <div className="flex items-center">
                    <Speaker className="h-4 w-4 mr-2" />
                    <span>Sonos</span>
                  </div>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="bluetooth" className="pt-4">
                <div className="space-y-4">
                  <h3 className="font-medium">Connecting via Bluetooth</h3>
                  <ol className="list-decimal list-inside text-sm text-muted-foreground pl-2 space-y-2">
                    <li>Turn on Bluetooth on your device</li>
                    <li>Open Bluetooth settings and scan for devices</li>
                    <li>Select "Ramona Home Audio" from the list</li>
                    <li>Once connected, play music from any app</li>
                  </ol>
                </div>
              </TabsContent>

              <TabsContent value="airplay" className="pt-4">
                <div className="space-y-4">
                  <h3 className="font-medium">Using AirPlay (Apple Devices)</h3>
                  <ol className="list-decimal list-inside text-sm text-muted-foreground pl-2 space-y-2">
                    <li>Connect to the house WiFi network</li>
                    <li>Open Control Center on your iOS device</li>
                    <li>Tap the AirPlay icon in the music controls</li>
                    <li>Select "Ramona Living Room" or "Ramona Kitchen"</li>
                  </ol>
                </div>
              </TabsContent>

              <TabsContent value="sonos" className="pt-4">
                <div className="space-y-4">
                  <h3 className="font-medium">Using the Sonos System</h3>
                  <ol className="list-decimal list-inside text-sm text-muted-foreground pl-2 space-y-2">
                    <li>Download the Sonos app on your device</li>
                    <li>Connect to the house WiFi network</li>
                    <li>Open the Sonos app and select the "Ramona House" system</li>
                    <li>Choose your music source and enjoy</li>
                  </ol>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="glass p-4 rounded-lg mt-8">
          <h3 className="font-medium mb-2">Volume Control</h3>
          <p className="text-sm text-muted-foreground">
            Each room has individual volume controls on the wall. Please be mindful of neighbors and quiet hours after 10PM.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default MusicPage;
