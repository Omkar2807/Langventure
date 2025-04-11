import { lessons, units } from '@/db/schema';
import { UnitBanner } from './unit-banner';
import { LessonButton } from './lesson-button';

type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  imageSrc: string | null;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined;
  activeLessonPercentage: number;
};

export const Unit = ({
  id,
  order,
  title,
  description,
  imageSrc,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: Props) => {
  return (
    <>
      <UnitBanner title={title} description={description} imageUrl={imageSrc} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id; //TODO: Remove later
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};
