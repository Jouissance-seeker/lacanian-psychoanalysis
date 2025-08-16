"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { conceptsData } from "@/data/concepts";

export default function Page() {
  return (
    <section className="py-7 container flex items-center max-w-screen-lg flex-col gap-6 mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {conceptsData.map((concept) => (
          <Card
            key={concept.id}
            className="grid grid-rows-[auto_auto_1fr_auto]  gap-1 pt-0 rounded-2xl overflow-hidden"
          >
            <div className="aspect-16/9 w-full">
              <Link
                href={concept.href}
                className="transition-opacity duration-200 fade-in hover:opacity-70"
              >
                <img
                  src={concept.image}
                  alt={concept.title}
                  className="h-full w-full object-cover object-center"
                />
              </Link>
            </div>
            <CardHeader>
              <h3 className="text-lg font-semibold hover:underline">
                <Link href={concept.href}>{concept.title}</Link>
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {concept.summary.replaceAll("**", "")}
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href={concept.href}
                className="flex items-center mt-3 text-foreground hover:underline"
              >
                <ArrowRight className="ml-2 size-4" />
                مشاهده بیشتر
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
