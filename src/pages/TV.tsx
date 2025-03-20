
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
                  Use the black Samsung remote for basic TV functions:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground pl-2 space-y-1">
                  <li>Power button (top right)</li>
                  <li>Volume controls (left side)</li>
                  <li>Channel controls (right side)</li>
                  <li>Input selection (press Input button)</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Streaming Services</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  You have access to the following streaming services:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground pl-2 space-y-1">
                  <li>Netflix (Guest profile already set up)</li>
                  <li>YouTube (No login required)</li>
                  <li>Prime Video (Already signed in)</li>
                  <li>Disney+ (Already signed in)</li>
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

        <div className="glass p-4 rounded-lg mt-8">
          <h3 className="font-medium mb-2">Troubleshooting</h3>
          <p className="text-sm text-muted-foreground">
            If the TV doesn't respond, try unplugging it for 10 seconds, then plugging it back in. For additional help, text the host at the number provided.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default TVPage;
