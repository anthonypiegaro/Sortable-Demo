import { ThemeToggle } from "@/components/theme-toggle";
import { Exercises } from "./exercises";

export type Exercise = {
  name: string,
  description: string
}

const exercises: Exercise[] = [
  {
    name: "Push-Up",
    description: "A bodyweight exercise that targets the chest, shoulders, and triceps."
  },
  {
    name: "Squat",
    description: "A lower body exercise that strengthens the thighs, hips, and glutes."
  },
  {
    name: "Pull-Up",
    description: "An upper body exercise focusing on the back and biceps."
  },
  {
    name: "Plank",
    description: "A core exercise that improves stability and endurance."
  },
  {
    name: "Lunge",
    description: "A lower body movement that targets the legs and glutes."
  },
  {
    name: "Bench Press",
    description: "A compound exercise for the chest, shoulders, and triceps using a barbell."
  },
  {
    name: "Deadlift",
    description: "A full-body exercise that primarily works the back, glutes, and hamstrings."
  },
  {
    name: "Overhead Press",
    description: "A shoulder exercise performed with a barbell or dumbbells."
  },
  {
    name: "Bicep Curl",
    description: "An isolation exercise for the biceps using dumbbells or a barbell."
  },
  {
    name: "Tricep Dip",
    description: "A bodyweight exercise that targets the triceps and chest."
  },
  {
    name: "Mountain Climber",
    description: "A cardio and core exercise performed in a plank position."
  },
  {
    name: "Burpee",
    description: "A full-body exercise combining a squat, push-up, and jump."
  },
  {
    name: "Russian Twist",
    description: "A core exercise that targets the obliques."
  },
  {
    name: "Leg Raise",
    description: "An abdominal exercise focusing on the lower abs."
  },
  {
    name: "Calf Raise",
    description: "A lower leg exercise that strengthens the calves."
  },
  {
    name: "Lat Pulldown",
    description: "A machine exercise that targets the back and biceps."
  },
  {
    name: "Seated Row",
    description: "A back exercise performed on a cable machine."
  },
  {
    name: "Hip Thrust",
    description: "A glute-focused exercise performed with a barbell or bodyweight."
  },
  {
    name: "Side Plank",
    description: "A core exercise that targets the obliques and improves stability."
  },
  {
    name: "Jumping Jack",
    description: "A cardio exercise that increases heart rate and warms up the body."
  }
];

export default function Page() {
  return (
    <main className="w-screen h-screen">
      <ThemeToggle className="fixed right-4.75 top-4.75" />
      <h1 className="mx-auto text-center py-10 text-4xl font-semibold">Sortable</h1>
      <Exercises exercises={exercises} />
    </main>
  )
}