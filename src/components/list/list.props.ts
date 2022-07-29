import { Task } from "../../models/Task";

export interface ListProps {
    tasks: Array<Task>;
    toggleIsDone(id: string): void;
}
