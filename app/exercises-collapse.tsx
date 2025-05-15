"use client"

import { RefObject, useLayoutEffect, useRef, useState } from "react"
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
  const parentRef = useRef<HTMLDivElement | null>(null)

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

    if (parentRef.current) {
      parentRef.current.style.transform = "translateY(0px)"
    }
  }

  return (
    <div ref={parentRef} >
      <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis]}>
        <SortableContext items={fields.map(field => field.id)} strategy={verticalListSortingStrategy}>
          {fields.map(field => <SortableItem key={field.id} exercise={field} parentRef={parentRef} />)}
          <div className="h-10" />
        </SortableContext>
      </DndContext>
    </div>
  )
}

function SortableItem({ exercise, parentRef }: { exercise: Exercise, parentRef: RefObject<HTMLDivElement | null> }) {
  const [collapsed, setCollapsed] = useState(false)
  const prevActiveItemHeight = useRef(0)
  const localRef = useRef<HTMLDivElement | null>(null);

  const {
    active,
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

  useLayoutEffect(() => {
    if (active?.id === exercise.id) {
      const currentHeight = localRef.current?.getBoundingClientRect().top ?? 0
      console.log("Top of the active list item just before render after Drag Start:", currentHeight)

      console.log("Prev height of the active item:", prevActiveItemHeight.current)

      const diff = prevActiveItemHeight.current - currentHeight
      console.log("The difference in height:", diff)

      if (parentRef.current !== null) {
        parentRef.current.style.transform = `translateY(${diff}px)`
      }
    
    }
  }, [collapsed])

  useDndMonitor({
    onDragStart(event: DragStartEvent) {
      setCollapsed(true)
      if (event.active.id == exercise.id) {
        const yPos = localRef.current?.getBoundingClientRect().top
        console.log("Position of the top of active list item:", yPos)
        prevActiveItemHeight.current = yPos ?? 0
      }
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
        <CardContent>
          <p>{exercise.description}</p>
        </CardContent>
      )}
      <Button variant="ghost" type="button" {...listeners} className="absolute top-2 right-2 cursor-grab active:cursor-grabbing">
        <Grip />
      </Button>
    </Card>
  );
}
