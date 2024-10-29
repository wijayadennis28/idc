import React, { useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import Appointment from "../components/MakeAppointment";
import ArticleList from "../components/ArticleList";

// image
import ArticleBg from "../../../assets/image/article/background.jpg";
import DummyImg from "../../../assets/image/article/article1.jpg";

const Article = () => {
  const [categoryKey, setCategoryKey] = useState("all");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationButton, setPaginationButton] = useState([
    1,
    2,
    3,
    4,
    "...",
    10,
  ]);
  const pageSize = 8;

  // maybe can be dynamic in the future, but for now it's static
  const categoryList = [
    {
      title: "All Articles",
      key: "all",
    },
    {
      title: "After Care",
      key: "after-care",
    },
    {
      title: "What's New",
      key: "whats-new",
    },
  ];

  const articleList = [
    {
      title: "The Ultimate Guide to Choosing the Right Dentist for Your Family",
      content:
        "<p>Choosing the right dentist for your family is a crucial decision that can impact your oral health for years to come. With so many options available, it can be overwhelming to find a dental practice that meets your needs and provides euy</p><p>dummy euy</p>",
      image: DummyImg,
      tags: [
        "FamilyDentistry",
        "ChoosingADentist",
        "DentalCareTips",
        "OralHealth",
      ],
      slug: "the-ultimate-guide-to-choosing-the-right-dentist-for-your-family",
    },
    {
      title: "The Ultimate Guide to Choosing the Right Dentist for Your Family",
      content:
        "<p>Choosing the right dentist for your family is a crucial decision that can impact your oral health for years to come. With so many options available, it can be overwhelming to find a dental practice that meets your needs and provides euy</p><p>dummy euy</p>",
      image: DummyImg,
      tags: [
        "FamilyDentistry",
        "ChoosingADentist",
        "DentalCareTips",
        "OralHealth",
      ],
      slug: "the-ultimate-guide-to-choosing-the-right-dentist-for-your-family",
    },
    {
      title: "The Ultimate Guide to Choosing the Right Dentist for Your Family",
      content:
        "<p>Choosing the right dentist for your family is a crucial decision that can impact your oral health for years to come. With so many options available, it can be overwhelming to find a dental practice that meets your needs and provides euy</p><p>dummy euy</p>",
      image: DummyImg,
      tags: [
        "FamilyDentistry",
        "ChoosingADentist",
        "DentalCareTips",
        "OralHealth",
      ],
      slug: "the-ultimate-guide-to-choosing-the-right-dentist-for-your-family",
    },
    {
      title: "The Ultimate Guide to Choosing the Right Dentist for Your Family",
      content:
        "<p>Choosing the right dentist for your family is a crucial decision that can impact your oral health for years to come. With so many options available, it can be overwhelming to find a dental practice that meets your needs and provides euy</p><p>dummy euy</p>",
      image: DummyImg,
      tags: [
        "FamilyDentistry",
        "ChoosingADentist",
        "DentalCareTips",
        "OralHealth",
      ],
      slug: "the-ultimate-guide-to-choosing-the-right-dentist-for-your-family",
    },
    {
      title: "The Ultimate Guide to Choosing the Right Dentist for Your Family",
      content:
        "<p>Choosing the right dentist for your family is a crucial decision that can impact your oral health for years to come. With so many options available, it can be overwhelming to find a dental practice that meets your needs and provides euy</p><p>dummy euy</p>",
      image: DummyImg,
      tags: [
        "FamilyDentistry",
        "ChoosingADentist",
        "DentalCareTips",
        "OralHealth",
      ],
      slug: "the-ultimate-guide-to-choosing-the-right-dentist-for-your-family",
    },
  ];

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
    const pagination = [];
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
    setPaginationButton(pagination);
  }, [currentPage]);

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
          {categoryList.map((category) => (
            <button
              className={`btn w-fit font-bold text-primary ${
                category.key === categoryKey ? "btn-primary no-animation" : ""
              } `}
              onClick={() => {
                if (category.key === categoryKey) return;
                setCategoryKey(category.key);
                setCurrentPage(1);
              }}
            >
              <h4>{category.title}</h4>
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
            {categoryList.map((category, index) => (
              <SplideSlide key={index}>
                <button
                  className={`btn me-4 w-fit font-bold text-primary ${
                    category.key === categoryKey
                      ? "btn-primary no-animation"
                      : ""
                  } `}
                  onClick={() => {
                    if (category.key === categoryKey) return;
                    setCategoryKey(category.key);
                    setCurrentPage(1);
                  }}
                >
                  <h4>{category.title}</h4>
                </button>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <ArticleList
          articles={articleList}
          title={
            categoryList.find((category) => category.key === categoryKey).title
          }
        />
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
      </div>
      <Appointment />
    </div>
  );
};

export default Article;
