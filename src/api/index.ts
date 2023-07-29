import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import todos from './todo/todos.route';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/todos', todos);

export default router;
