import React from "react";

const ArticleList = ({ articles = 0, title }) => {
  const displayArticle = (content) => {
    // get the first paragraph
    const firstParagraph = content.match(/<p>(.*?)<\/p>/)[1] + " ";

    // get 232 character and if the last word is not complete, remove it
    const shortContent = firstParagraph.substring(0, 233);
    const lastSpaceIndex = shortContent.lastIndexOf(" ");
    const shortContentWithEllipsis = shortContent.substring(0, lastSpaceIndex);

    // check if shortContentWithEllipsis is the same as firstParagraph
    if (shortContentWithEllipsis + " " === firstParagraph) {
      return shortContentWithEllipsis;
    }

    return shortContentWithEllipsis + "...";
  };
  return (
    <div className="flex max-w-[1300px] flex-col items-center gap-8 px-4 md:px-8 lg:w-[850px] lg:px-0">
      <h3
        className="w-full text-left font-normal text-primary"
        id="article-category-title"
      >
        {title}
      </h3>
      {articles.map((article) => (
        <a className="cursor-pointer">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <div className="rounded md:size-48 md:overflow-hidden lg:size-56">
              <img
                src={article.image}
                alt={`${article.title} - image`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-base text-neutral-500">
                {article.tags.map((tag) => (
                  <span>#{tag + " "} </span>
                ))}
              </p>
              <h2 className="text-2xl font-bold lg:text-3xl">
                {article.title}
              </h2>
              <div>
                <h5 className="text-lg font-normal">
                  {displayArticle(article.content)}
                </h5>
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
