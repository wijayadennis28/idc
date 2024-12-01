import React, { useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import ArticleList from "../components/ArticleList";
import removeHTMLTags from "../../utils/removeHTMLTags";

// image
import ArticleBg from "../../../assets/image/article/background.jpg";

const Article = () => {
  const [category, setCategory] = useState({ name: "All Articles", id: null });
  const [isLoading, setLoading] = useState(true);
  const [availableArticleCategories, setAvailableCategories] = useState([
    { name: "All Articles", id: null },
  ]);
  const [articles, setArticles] = useState([]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationButton, setPaginationButton] = useState([]);
  const [pageSize, setPageSize] = useState(0);

  useEffect(() => {
    getCategoriesArticle().catch(console.error);
    getArticles().catch(console.error);
  }, []);

  useEffect(() => {
    getArticles().catch(console.error);
  }, [category, currentPage]);

  const getCategoriesArticle = async () => {
    const response = await fetch("/wp-json/wp/v2/article-categories");
    const categoriesArticle = await response.json();
    setAvailableCategories([
      { name: "All Articles", id: null },
      ...categoriesArticle.map((categoriesArticle) => ({
        name: categoriesArticle.name,
        id: categoriesArticle.id,
      })),
    ]);
  };

  const getArticles = async () => {
    setLoading(true);
    let url = `/wp-json/wp/v2/article?per_page=5&page=${currentPage}`;
    if (category.id) {
      url += `&article-categories=${category.id}`;
    }

    const response = await fetch(url);

    // headers
    const headers = response.headers;
    const totalPages = headers.get("x-wp-totalpages");

    const articleRaws = await response.json();
    const articleList = articleRaws.map((article) => ({
      permalink: article.link,
      image: article.thumbnail,
      title: article.title.rendered,
      tags: article["article-tags"],
      content: removeHTMLTags(article.content.rendered).split(".")[0] + "...",
    }));
    setArticles(articleList);
    setPageSize(Number(totalPages));
    setLoading(false);
  };

  const nextPagination = () => {
    if (currentPage === pageSize) return;
    setCurrentPage((prev) => prev + 1);
    goToTop();
  };

  const prevPagination = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
    goToTop();
  };

  const goToTop = () => {
    document.getElementById("page-title").scrollIntoView({
      behavior: "instant",
      block: "start",
      inline: "start",
    });
  };

  useEffect(() => {
    setPaginationButton(() => {
    const pagination = [];
      if (pageSize < 6) {
    for (let i = 1; i <= pageSize; i++) {
      pagination.push(i);
    }
      } else {
        if (currentPage < 4) {
          for (let i = 1; i <= 4; i++) {
            pagination.push(i);
          }
          pagination.push("...");
          pagination.push(pageSize);
        } else if (currentPage > pageSize - 3) {
          pagination.push(1);
          pagination.push("...");
          for (let i = pageSize - 3; i <= pageSize; i++) {
            pagination.push(i);
          }
        } else {
          pagination.push(1);
          pagination.push("...");
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pagination.push(i);
          }
          pagination.push("...");
          pagination.push(pageSize);
        }
      }
      return pagination;
    });
  }, [currentPage, pageSize]);

  return (
    <div>
      <div className="mb-8 flex w-full flex-col items-center gap-8">
        <div id="title" className="mb-4 flex w-full flex-col items-center">
          <div
            className="flex h-72 w-full items-center justify-center bg-cover bg-center bg-no-repeat 2xl:h-80"
            style={{ backgroundImage: `url(${ArticleBg})` }}
          >
            <h1 className="text-white" id="page-title">
              Article
            </h1>
          </div>
        </div>
        <div className="hidden gap-4 md:flex" id="category-selector">
          {availableArticleCategories.map((availableCategory) => (
            <button
              className={`btn w-fit font-bold text-primary ${
                category.name === availableCategory.name
                  ? "btn-primary no-animation"
                  : ""
              } `}
              onClick={() => {
                if (category.name === availableCategory.name) return;
                setCategory(availableCategory);
                setCurrentPage(1);
              }}
            >
              <h4>{availableCategory.name}</h4>
            </button>
          ))}
        </div>
        <div className="splide-hide-pagination splide-hide-arrow h-full w-full object-cover md:hidden">
          <Splide
            options={{
              perPage: 1,
              padding: "7rem",
              focus: "center",
              drag: "free",
              autoWidth: true,
            }}
          >
            {availableArticleCategories.map((availableCategory, index) => (
              <SplideSlide key={index}>
                <button
                  className={`btn me-4 w-fit font-bold text-primary ${
                    category.name === availableCategory.name
                      ? "btn-primary no-animation"
                      : ""
                  } `}
                  onClick={() => {
                    if (category.name === availableCategory.name) return;
                    setCategory(availableCategory.name);
                    setCurrentPage(1);
                  }}
                >
                  <h4>{availableCategory.name}</h4>
                </button>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <ArticleList
          isLoading={isLoading}
          articles={articles}
          title={category.name}
        />
        {pageSize > 1 && (
        <div className="flex items-end gap-2 md:gap-4">
          <button
            className={`btn btn-primary btn-sm size-10 !p-0 md:size-12 ${
              currentPage === 1 ? "btn-disabled" : ""
            }`}
            onClick={prevPagination}
          >
            <ArrowLeftIcon className="size-4" />
          </button>
          {paginationButton.map((pageNumber) => (
            <>
              {pageNumber === "..." ? (
                <span>{pageNumber}</span>
              ) : (
                <button
                  className={`btn btn-sm size-10 border-none bg-[#E0EFF3] text-primary md:size-12 ${
                    currentPage === pageNumber ? "btn-active" : ""
                  }`}
                  onClick={() => {
                    setCurrentPage(pageNumber);
                    goToTop();
                  }}
                >
                  {pageNumber}
                </button>
              )}
            </>
          ))}
          <button
            className={`btn btn-primary btn-active btn-sm size-10 !p-0 md:size-12 ${
              currentPage === pageSize ? "btn-disabled" : ""
            }`}
            onClick={nextPagination}
          >
            <ArrowRightIcon className="size-4" />
          </button>
        </div>
        )}
      </div>
    </div>
  );
};

export default Article;
