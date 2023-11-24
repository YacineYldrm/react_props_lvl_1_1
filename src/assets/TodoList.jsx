import { v4 as uuidv4} from 'uuid';
console.log(uuidv4());
import TodoItem from "./TodoItem";

const ToDoList = (props) => {
    console.log(props);
    console.log(props.todosArr);
    console.log(typeof props);
    return ( 
        <section>
            {props.todosArr.map((todo) => <TodoItem
            key={uuidv4()}
            todo={todo.todo}/>
            )}
        </section>

    );
}

export default ToDoList;