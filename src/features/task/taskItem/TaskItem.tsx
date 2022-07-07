import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Modal from "@material-ui/core/Modal";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./TaskItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTask,
  handleModalOpen,
  selectIsModalOpen,
  completeTask,
  deleteTask,
} from "../taskSlice";
import EventNoteIcon from "@material-ui/icons/EventNote";
import TaskForm from "../taskForm/TaskForm";

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(selectTask(task));
    dispatch(handleModalOpen(true));
  };
  const handleClose = () => {
    dispatch(handleModalOpen(false));
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNoteIcon />
        <div className={styles.titleText}>{task.title}</div>
      </div>
      <div className={styles.rightItem}>
        <Checkbox
          checked={task.completed}
          onClick={() => dispatch(completeTask(task))}
          className={styles.checkbox}
        />
        <button onClick={handleOpen} className={styles.editButton}>
          <EditIcon className={styles.icon} />
        </button>

        <button
          onClick={() => console.log(`delete ${task.id}`)}
          className={styles.deleteButton}
        >
          <DeleteIcon
            onClick={() => dispatch(deleteTask(task))}
            className={styles.icon}
          />
        </button>
      </div>
      <Modal open={isModalOpen} onClose={handleClose} className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.modalTitle}>Edit</div>
          <TaskForm edit />
        </div>
      </Modal>
    </div>
  );
};

export default TaskItem;
