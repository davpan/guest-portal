import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plug, Coffee, ShowerHead } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PageTransition from '@/components/layout/PageTransition';

const AmenitiesPage = () => {
  return (
    <PageTransition>
      <div className="container max-w-2xl mx-auto">
        <div className="mb-8 flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-4">
            <Link to="/" aria-label="Back to home">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">House Amenities</h1>
        </div>

        <Card className="mb-6">
          <CardHeader className="bg-primary/5 pb-4">
            <CardTitle>Items You Might Need</CardTitle>
            <CardDescription>Find what you need around the house</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="bathroom">
                <AccordionTrigger className="py-4">
                  <div className="flex items-center">
                    <ShowerHead className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Towels and Toiletries</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 px-4">
                  <ul className="list-disc list-inside text-sm text-muted-foreground pl-2 space-y-1">
                    <li>Additional bath towels in the bedroom closet</li>
                    <li>Extra toothbrushes in the bathroom sink drawer</li>
                    <li>Extra toilet paper under the sink</li>
                    <li>Hair dryer in the bathroom cabinet</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="chargers">
                <AccordionTrigger className="py-4">
                  <div className="flex items-center">
                    <Plug className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Phone Chargers</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 px-4">
                  <ul className="list-disc list-inside text-sm text-muted-foreground pl-2 space-y-1">
                    <li>Wireless charger on the nightstand</li>
                    <li>Additional wireless charger behind the living room couch</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="coffee">
                <AccordionTrigger className="py-4">
                  <div className="flex items-center">
                    <Coffee className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Nespresso</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 px-4">
                  <ul className="list-disc list-inside text-sm text-muted-foreground pl-2 space-y-1">
                    <li>Nespresso machine by the dining table</li>
                    <li>You may need to fill the water reservoir</li>
                    <li>Coffee pods in the top cabinet</li>
                    <li>Mugs in the cabinet above the toaster oven</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
};

export default AmenitiesPage;
