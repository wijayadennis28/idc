import React from "react";
import Loading from "./Loading";

import logoArticle from "../../../assets/image/logo/logo-article.jpg";

const ArticleList = ({ articles = 0, title, isLoading }) => {
  if (isLoading) return <Loading />;
  return (
    <div className="flex max-w-[1300px] flex-col items-center gap-8 px-4 md:px-8 lg:w-[850px] lg:px-0">
      <h3
        className="w-full text-left font-normal text-primary"
        id="article-category-title"
      >
        {title}
      </h3>
      {articles.map((article, index) => (
        <a className="cursor-pointer" href={article.permalink} key={index}>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <div className="h-52 w-full md:size-48 md:overflow-hidden lg:size-56">
              <img
                src={article.image || logoArticle}
                alt={`${article.title} - image`}
                className="h-full w-full rounded object-cover object-center"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-base text-neutral-500">{article.tags}</p>
              <h2 className="text-2xl font-bold lg:text-3xl">
                {article.title}
              </h2>
              <div>
                <h5 className="text-lg font-normal">{article.content}</h5>
                <div className="divider m-0 p-0"></div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ArticleList;
