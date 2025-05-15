"use client"

import { useEffect, useRef, useState } from "react"
import { Grip } from "lucide-react";
import { DndContext, DragEndEvent, DragStartEvent, useDndMonitor } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';
import { useForm, useFieldArray } from "react-hook-form"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils";

import { Exercise } from "./page";

export function ExercisesCollapse({ exercises }:{ exercises: Exercise[] }) {
  const form = useForm({
    defaultValues: {
      exercises: exercises
    }
  })

  const { fields, move } = useFieldArray({
    control: form.control,
    name: "exercises"
  })

  function handleDragEnd(event: DragEndEvent) {
    const {active, over} = event;
    
    if (active.id !== over?.id) {
      const from = fields.findIndex(field => field.id === active.id);
      const to = fields.findIndex(field => field.id === over?.id)

      move(from, to)
    }
  }

  return (
      <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis]}>
        <SortableContext items={fields.map(field => field.id)} strategy={verticalListSortingStrategy}>
          {fields.map(field => <SortableItem key={field.id} exercise={field} />)}
          <div className="h-10" />
        </SortableContext>
    </DndContext>
  )
}

function SortableItem({ exercise }: { exercise: Exercise }) {
  const [collapsed, setCollapsed] = useState(false)
  const localRef = useRef<HTMLDivElement | null>(null);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: exercise.id})

  function setCombinedRef(node: HTMLDivElement | null) {
    setNodeRef(node)
    localRef.current = node
  }

  useDndMonitor({
    onDragStart() {
      setCollapsed(true)
    },
    onDragEnd() {
      setCollapsed(false)
    }
  })
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: "100%"
  };
  
  return (
    <Card key={exercise.id} ref={setCombinedRef} style={style} {...attributes} className="max-w-3xl mb-4 relative mx-auto">
      <CardHeader>
        <CardTitle>
          {exercise.name}
        </CardTitle>
      </CardHeader>
      {!collapsed && (
        <CardContent className={cn("h-96 overflow-hidden")}>
          <p>{exercise.description}</p>
        </CardContent>
      )}
      <Button variant="ghost" type="button" {...listeners} className="absolute top-2 right-2 cursor-grab active:cursor-grabbing">
        <Grip />
      </Button>
    </Card>
  );
}
