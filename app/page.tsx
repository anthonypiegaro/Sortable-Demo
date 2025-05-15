import { ThemeToggle } from "@/components/theme-toggle";
import { Exercises } from "./exercises";
import { ExercisesCollapse } from "./exercises-collapse";

export type Exercise = {
  id: string;
  name: string;
  description: string;
};

const exercises: Exercise[] = [
  {
    id: "1",
    name: "Push-Up",
    description: "A bodyweight exercise that targets the chest, shoulders, and triceps."
  },
  {
    id: "2",
    name: "Squat",
    description: "A lower body exercise that strengthens the thighs, hips, and glutes."
  },
  {
    id: "3",
    name: "Pull-Up",
    description: "An upper body exercise focusing on the back and biceps."
  },
  {
    id: "4",
    name: "Plank",
    description: "A core exercise that improves stability and endurance."
  },
  {
    id: "5",
    name: "Lunge",
    description: "A lower body movement that targets the legs and glutes."
  },
  {
    id: "6",
    name: "Bench Press",
    description: "A compound exercise for the chest, shoulders, and triceps using a barbell."
  },
  {
    id: "7",
    name: "Deadlift",
    description: "A full-body exercise that primarily works the back, glutes, and hamstrings."
  },
  {
    id: "8",
    name: "Overhead Press",
    description: "A shoulder exercise performed with a barbell or dumbbells."
  },
  {
    id: "9",
    name: "Bicep Curl",
    description: "An isolation exercise for the biceps using dumbbells or a barbell."
  },
  {
    id: "10",
    name: "Tricep Dip",
    description: "A bodyweight exercise that targets the triceps and chest."
  },
  {
    id: "11",
    name: "Mountain Climber",
    description: "A cardio and core exercise performed in a plank position."
  },
  {
    id: "12",
    name: "Burpee",
    description: "A full-body exercise combining a squat, push-up, and jump."
  },
  {
    id: "13",
    name: "Russian Twist",
    description: "A core exercise that targets the obliques."
  },
  {
    id: "14",
    name: "Leg Raise",
    description: "An abdominal exercise focusing on the lower abs."
  },
  {
    id: "15",
    name: "Calf Raise",
    description: "A lower leg exercise that strengthens the calves."
  },
  {
    id: "16",
    name: "Lat Pulldown",
    description: "A machine exercise that targets the back and biceps."
  },
  {
    id: "17",
    name: "Seated Row",
    description: "A back exercise performed on a cable machine."
  },
  {
    id: "18",
    name: "Hip Thrust",
    description: "A glute-focused exercise performed with a barbell or bodyweight."
  },
  {
    id: "19",
    name: "Side Plank",
    description: "A core exercise that targets the obliques and improves stability."
  },
  {
    id: "20",
    name: "Jumping Jack",
    description: "A cardio exercise that increases heart rate and warms up the body."
  }
];

export default function Page() {
  return (
    <main className="w-screen h-screen">
      <ThemeToggle className="fixed right-4.75 top-4.75" />
      <h1 className="mx-auto text-center py-10 text-4xl font-semibold">Sortable</h1>
      <ExercisesCollapse exercises={exercises} />
    </main>
  )
}