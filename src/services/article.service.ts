import {prisma} from "../index";

export interface ArticleCreate {
    title: string;
    content: string;
    imgUrl: string;
    likes: number;
}

export interface ArticleReturn extends ArticleCreate {
    id: string;
}

export const createArticleService = async (data: ArticleCreate): Promise<ArticleReturn> => {
    const newArticle: ArticleReturn = await prisma.article.create({
        data
    })
    return newArticle;
}

export const readAllArticlesService = async (): Promise<ArticleReturn[]> => {
    return prisma.article.findMany();
}