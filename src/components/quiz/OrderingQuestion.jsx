import {
  DndContext,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function SortableOrderingItem({ option, index, isFirst, isLast, submitted, onMoveUp, onMoveDown }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: option.id,
    disabled: submitted,
  })

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`chronology-item rounded-4 p-3 ${isDragging ? 'is-dragging' : ''}`}
    >
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex align-items-center gap-3 flex-grow-1 min-w-0">
          <button
            type="button"
            className={`chronology-drag-handle ${submitted ? 'is-disabled' : ''}`}
            aria-label={`${index + 1}. elem mozgatása`}
            disabled={submitted}
            {...attributes}
            {...listeners}
          >
            <span />
            <span />
            <span />
          </button>
          <span className="chronology-index">{index + 1}</span>
          <span className="chronology-item-text">{option.text}</span>
        </div>

        {!submitted && (
          <div className="d-flex gap-2 chronology-fallback-actions">
            <button type="button" className="btn btn-outline-dark btn-sm rounded-4" disabled={isFirst} onClick={onMoveUp}>
              ↑
            </button>
            <button type="button" className="btn btn-outline-dark btn-sm rounded-4" disabled={isLast} onClick={onMoveDown}>
              ↓
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function OrderingQuestion({ question, answer, onAnswerChange, submitted }) {
  const items = question.items?.length ? question.items : question.options
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 120, tolerance: 8 } }),
  )

  function handleDragEnd(event) {
    const { active, over } = event
    if (!active?.id || !over?.id || active.id === over.id || submitted) {
      return
    }

    const oldIndex = answer.indexOf(active.id)
    const newIndex = answer.indexOf(over.id)
    if (oldIndex === -1 || newIndex === -1) {
      return
    }

    onAnswerChange(arrayMove(answer, oldIndex, newIndex))
  }

  return (
    <div className="d-grid gap-3">
      <div className="chronology-help-text">
        Húzd a sorokat a megfelelő helyre. Telefonon érintéssel is átrendezheted őket.
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={answer || []} strategy={verticalListSortingStrategy}>
          {(answer || []).map((optionId, index) => {
            const option = items.find((item) => item.id === optionId)
            if (!option) {
              return null
            }

            return (
              <SortableOrderingItem
                key={optionId}
                option={option}
                index={index}
                submitted={submitted}
                isFirst={index === 0}
                isLast={index === answer.length - 1}
                onMoveUp={() => {
                  const next = [...answer]
                  ;[next[index - 1], next[index]] = [next[index], next[index - 1]]
                  onAnswerChange(next)
                }}
                onMoveDown={() => {
                  const next = [...answer]
                  ;[next[index + 1], next[index]] = [next[index], next[index + 1]]
                  onAnswerChange(next)
                }}
              />
            )
          })}
        </SortableContext>
      </DndContext>
    </div>
  )
}
