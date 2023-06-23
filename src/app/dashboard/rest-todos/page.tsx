export const dynamic = 'force-dynamic';

import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
  title: 'Listado de Todos',
  description: 'Listado de Todos',
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })
  return (
    <>
      <span className="text-3xl mx-1 mb-16">Rest TODOS</span>
      <div className="w-full px-6 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}