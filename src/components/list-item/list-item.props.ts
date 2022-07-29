import { Task } from "../../models/Task";

export interface ListItemProps {
    task: Task;
    toggleIsDone(id: string): void;
}