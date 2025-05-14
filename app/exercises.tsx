"use client"

import { Grip } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Exercise } from "./page";
import { Button } from "@/components/ui/button";

export function Exercises({ exercises }: { exercises: Exercise[] }) {
    return (
        <>
            {exercises.map(exercise => (
            <Card key={exercise.name} className="mx-auto max-w-3xl mb-4 relative">
            <CardHeader>
                <CardTitle>
                {exercise.name}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>{exercise.description}</p>
            </CardContent>
            <Button variant="ghost" type="button" className="absolute top-2 right-2 cursor-grab">
                <Grip />
            </Button>
            </Card>
        ))}
      </>
    )
}