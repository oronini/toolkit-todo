import React from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../taskSlice";
import { useForm } from "react-hook-form";
import styles from "./TaskForm.module.scss";
import TextField from "@material-ui/core/TextField";

type Inputs = {
  taskTitle?: string;
};

type PropTypes = {
  edit?: boolean;
};

const TaskForm: React.FC<PropTypes> = ({ edit }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };
  const handleEdit = (data: Inputs) => {
    console.log(data);
  };
  return (
    <div className={styles.root}>
      <form
        onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
        className={styles.form}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label={edit ? "Edit Task" : "New Task"}
          defaultValue={edit ? "defaultValue" : ""}
          variant="outlined"
          {...register("taskTitle")}
          className={styles.textField}
        />
        {edit ? (
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
            <button type="button" className={styles.cancelButton}>
              Cancel
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default TaskForm;
