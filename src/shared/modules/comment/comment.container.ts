import { Container } from 'inversify';
import { CommentService } from './comment-service.interface.js';
import { Component } from '../../types/index.js';
import { DefaultCommentService } from './comment.service.js';
import { types } from '@typegoose/typegoose';
import { CommentEntity, CommentModel } from './comment.entity.js';
import { CommentController } from './comment.controller.js';
import { Controller } from '../../../rest/index.js';

export function createCommentContainer() {
  const commentContainer = new Container();
  commentContainer.bind<CommentService>(Component.CommentService).to(DefaultCommentService).inSingletonScope();
  commentContainer.bind<types.ModelType<CommentEntity>>(Component.CommentModel).toConstantValue(CommentModel);
  commentContainer.bind<Controller>(Component.CommentController).to(CommentController).inSingletonScope();

  return commentContainer;
}
