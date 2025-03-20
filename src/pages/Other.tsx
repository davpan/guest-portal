
import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowLeft, Thermometer, FirstAid, Trash, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PageTransition from '@/components/layout/PageTransition';

const OtherPage = () => {
  return (
    <PageTransition>
      <div className="container max-w-2xl mx-auto">
        <div className="mb-8 flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-4">
            <Link to="/" aria-label="Back to home">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Other Information</h1>
        </div>

        <Card className="mb-6">
          <CardHeader className="bg-primary/5 pb-4">
            <div className="flex items-center mb-2">
              <HelpCircle className="h-5 w-5 mr-2 text-primary" />
              <CardTitle>Helpful Information</CardTitle>
            </div>
            <CardDescription>Additional details to make your stay comfortable</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="thermostat">
                <AccordionTrigger className="py-4">
                  <div className="flex items-center">
                    <Thermometer className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Thermostat</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 px-4">
                  <p className="text-sm text-muted-foreground">
                    The thermostat is located in the hallway. Feel free to adjust the temperature to your comfort, but please set it back to 72°F when you leave for extended periods.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="medical">
                <AccordionTrigger className="py-4">
                  <div className="flex items-center">
                    <FirstAid className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>First Aid & Emergencies</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 px-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    A first aid kit is located under the kitchen sink. For emergencies:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground pl-2 space-y-1">
                    <li>Dial 911 for immediate emergencies</li>
                    <li>The nearest hospital is Memorial Hospital (2.5 miles away)</li>
                    <li>Contact your host at the provided number for assistance</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="trash">
                <AccordionTrigger className="py-4">
                  <div className="flex items-center">
                    <Trash className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Trash & Recycling</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 px-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    Trash and recycling bins are located on the side of the house:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground pl-2 space-y-1">
                    <li>Blue bin: Recycling (paper, plastic, glass, metal)</li>
                    <li>Black bin: General waste</li>
                    <li>Green bin: Compost and yard waste</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    Collection day is Wednesday morning. Please put bins out Tuesday evening if your stay includes this day.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="checkout">
                <AccordionTrigger className="py-4">
                  <div className="flex items-center">
                    <Key className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Check-out Procedure</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 px-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    On your departure day:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground pl-2 space-y-1">
                    <li>Check-out time is 11:00 AM</li>
                    <li>Please leave keys on the kitchen counter</li>
                    <li>Lock the door behind you when you leave</li>
                    <li>You can drop any towels in the laundry basket in the bathroom</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <div className="glass p-4 rounded-lg mt-8">
          <h3 className="font-medium mb-2">House Rules Reminder</h3>
          <p className="text-sm text-muted-foreground">
            Please no smoking inside the house, keep noise levels down after 10PM, and let your host know if anything needs attention.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default OtherPage;
