import { Exercise } from '@/lib/types'

interface ExerciseSectionProps {
  exercises: Exercise[]
}

export default function ExerciseSection({ exercises }: ExerciseSectionProps) {
  return (
    <section className="w-full space-y-3">
      {exercises.map((exercise) => (
        <details
          key={exercise.title}
          className="group rounded-lg border border-border bg-card text-card-foreground shadow-sm open:shadow-md transition-shadow"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-semibold text-base select-none hover:bg-muted/50 rounded-lg transition-colors">
            <span>{exercise.title}</span>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-sm font-normal text-muted-foreground">
                {exercise.duration}
              </span>
              {/* chevron indicator */}
              <svg
                className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </summary>

          <div className="px-5 pb-5 pt-2">
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              {exercise.steps.map((step, index) => (
                <li key={index} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs font-medium text-primary">
              ⏱ Duración: {exercise.duration}
            </p>
          </div>
        </details>
      ))}
    </section>
  )
}
