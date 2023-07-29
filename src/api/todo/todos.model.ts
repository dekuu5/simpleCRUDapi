import * as z from 'zod';
import { db } from '../../db';
import { WithId } from 'mongodb';



const todo = z.object({
  content: z.string().min(1),
  done: z.boolean().default(false),  
});


export type Todo = z.infer<typeof todo>;
export type TodoWithId = WithId<Todo>;
export const Todos = db.collection<Todo>('todos');

 