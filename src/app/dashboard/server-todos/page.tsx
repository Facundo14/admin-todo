import { getUserSessionServer } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'Server actions',
  description: 'Server actions',
};

export default async function ServerTodosPage() {
  
  const user = await getUserSessionServer()

  if (!user) {
    redirect('/api/auth/signin');
  }

  const todos = await prisma.todo.findMany({ 
    where: {
      userId: user.id
    },
    orderBy: { description: 'asc' } 
  })
  return (
    <>
      <span className="text-3xl mx-1 mb-16">Server Actions (Alpha)</span>
      <div className="w-full px-6 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}