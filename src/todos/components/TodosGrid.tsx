'use client';

import { Todo } from "@prisma/client"
import { TodoItem } from "./TodoItem"
// import * as todosApi from '@/todos/helpers/todos'
// import { useRouter } from "next/navigation"
import { toggleTodo } from '@/todos/actions/todo-actions'
import { TodoItemExperimental } from "./TodoItemExperimental";

interface Props {
    todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: Props) => {

    // const router = useRouter();

    // const toggleTodo = async (id: string, complete: boolean) => {
    //     const updatedTodo = await todosApi.updateTodo(id, complete)
    //     router.refresh()
    // }



    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {
                // todos.map(todo => <TodoItem toggleTodo={toggleTodo} todo={todo} key={todo.id} />)
                todos.map(todo => <TodoItemExperimental toggleTodo={toggleTodo} todo={todo} key={todo.id} />)
            }
        </div>
    )
}



