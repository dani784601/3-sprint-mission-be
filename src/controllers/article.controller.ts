import { Request, Response } from "express";
import {ArticleReturn, createArticleService, readAllArticlesService} from "../services/article.service";

export const createArticleController  = async (req: Request, res: Response): Promise<Response> => {
    const newArticle: ArticleReturn = await createArticleService(req.body);
    return res.status(201).json(newArticle);
}

export const readAllArticleController  = async (req: Request, res: Response): Promise<Response> => {
    const articles: ArticleReturn[] = await readAllArticlesService();
    return res.status(200).json(articles);
}