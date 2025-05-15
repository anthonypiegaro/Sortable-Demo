"use client"

import { useState } from "react"

import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs"
import { Exercise } from "./page"
import { Exercises } from "./exercises"
import { ExercisesCollapse } from "./exercises-collapse"

export function Container({ exercises }: { exercises: Exercise[] }) {
  return (
    <Tabs defaultValue="regular" className="w-full">
      <TabsList className="mx-auto mb-4">
        <TabsTrigger value="regular">Regular</TabsTrigger>
        <TabsTrigger value="collapsable">Collapsable</TabsTrigger>
      </TabsList>
      <TabsContent value="regular">
        <Exercises exercises={exercises} />
      </TabsContent>
      <TabsContent value="collapsable">
        <ExercisesCollapse exercises={exercises} />
      </TabsContent>
    </Tabs>
  )
}