
import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, ArrowLeft, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';
import PageTransition from '@/components/layout/PageTransition';

const WifiPage = () => {
  const networkName = "RamonaWifi";
  const password = "guest1234";

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  return (
    <PageTransition>
      <div className="container max-w-2xl mx-auto">
        <div className="mb-8 flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-4">
            <Link to="/" aria-label="Back to home">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Wifi Information</h1>
        </div>

        <Card className="mb-6 overflow-hidden">
          <CardHeader className="bg-primary/5 pb-4">
            <div className="flex items-center mb-2">
              <Wifi className="h-5 w-5 mr-2 text-primary" />
              <CardTitle>Connect to Our Network</CardTitle>
            </div>
            <CardDescription>Follow these instructions to get online</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium mb-1 text-muted-foreground">NETWORK NAME</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-mono">{networkName}</p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => copyToClipboard(networkName, "Network name")}
                    aria-label="Copy network name"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-1 text-muted-foreground">PASSWORD</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-mono">{password}</p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => copyToClipboard(password, "Password")}
                    aria-label="Copy password"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-primary/5 border-t flex justify-between py-4 mt-6">
            <p className="text-sm text-muted-foreground">Having trouble? Ask your host for help.</p>
          </CardFooter>
        </Card>

        <div className="glass p-4 rounded-lg mt-8">
          <h3 className="font-medium mb-2">Additional Notes</h3>
          <p className="text-sm text-muted-foreground">
            The wifi signal is strongest in the living room and kitchen. If you experience connectivity issues, try moving closer to these areas.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default WifiPage;
