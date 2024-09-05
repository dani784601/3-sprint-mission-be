import {Router} from "express";
import {createArticleController, readAllArticleController} from "../controllers/article.controller";

export const routes: Router = Router();

routes.post('/articles', createArticleController)

routes.get('/articles', readAllArticleController)