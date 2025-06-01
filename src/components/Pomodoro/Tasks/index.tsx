import { HStack, Separator, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { usePomodoro } from '@/hooks/usePomodoro';
import usePomodoroStore from '@/stores/Pomodoro.store';
import { ITask } from '@/interfaces/Task.interface';
import { ZoneButton } from '../components/ZoneButton';
import { LuCirclePlus } from 'react-icons/lu';
import { SortableList } from '@/components/SortableList';
import { TaskCard } from '@/components/Pomodoro/Tasks/TaskCard';
import { useTranslations } from 'use-intl';
import { Tooltip } from '@/components/ui/tooltip';
import useUserHintsStore from '@/stores/UserHints.store';

export const Tasks = () => {
  const {
    handleAddTask,
    editingTask,
    setEditingTask,
    handleEditTask,
    handleDeleteTask,
    handleCheckTask,
    handleReorderTasks,
  } = usePomodoro();
  const tasks = usePomodoroStore((state) => state.tasks);
  const currentTask = usePomodoroStore((state) => state.currentTask);
  const setCurrentTask = usePomodoroStore((state) => state.setCurrentTask);
  const hasSeenTasksTooltip = useUserHintsStore((state) => state.hasSeenTasksTooltip);
  const setHasSeenTasksTooltip = useUserHintsStore((state) => state.setHasSeenTasksTooltip);
  const t = useTranslations('pomodoro.tasks');
  const [showTooltip, setShowTooltip] = useState(false);

  const handleTaskClick = (task: ITask) => {
    if (!editingTask) {
      setCurrentTask(task);
    } else {
      if (tasks?.length && tasks.some((t) => !t.title)) {
        return;
      }

      setEditingTask(null);
      setCurrentTask(task);
    }
  };

  const handleMouseEnter = () => {
    if (!hasSeenTasksTooltip) {
      setHasSeenTasksTooltip(true);
      setShowTooltip(false);
    }
  };

  useEffect(() => {
    if (!hasSeenTasksTooltip) {
      setTimeout(() => {
        setShowTooltip(true);
      }, 3000);
    }
  }, [hasSeenTasksTooltip]);

  return (
    <React.Fragment>
      <HStack margin={'40px 0 20px'} display='flex' justifyContent='center'>
        <Separator flex='1' />
        <Text flexShrink='0' fontSize={'sm'}>
          {t('title')}
        </Text>
        <Separator flex='1' />
      </HStack>

      <SortableList
        items={tasks}
        onChange={handleReorderTasks}
        renderItem={(task) => (
          <SortableList.Item id={task.id}>
            <TaskCard
              task={task}
              onTaskCheck={handleCheckTask}
              onTaskEdit={setEditingTask}
              onTaskDelete={handleDeleteTask}
              onTaskSubmit={handleEditTask}
              onTaskClick={handleTaskClick}
              isActive={currentTask?.id === task.id}
              isEditing={editingTask === task.id}
              disabledEditing={!!editingTask}
              draggableIcon={<SortableList.DragHandle />}
            />
          </SortableList.Item>
        )}
      />

      <Tooltip
        content={t('tasksHint')}
        open={showTooltip}
        contentProps={{ css: { '--tooltip-bg': 'tomato' }, _dark: { color: 'white' } }}
        positioning={{ placement: 'left-start' }}
        showArrow
      >
        <ZoneButton
          isDisabled={!!editingTask}
          onClick={() => handleAddTask()}
          onMouseEnter={handleMouseEnter}
          fontWeight={'semibold'}
          size={'sm'}
          mt={6}
        >
          <LuCirclePlus size={25} />
          {t('addTask')}
        </ZoneButton>
      </Tooltip>
    </React.Fragment>
  );
};
