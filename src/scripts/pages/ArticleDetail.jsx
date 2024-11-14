import React, { useState, useEffect } from "react";

import PartnersList from "../components/PartnersList";
import Loading from "../components/Loading";
import ArticleList from "../components/ArticleList";
import Appointment from "../components/MakeAppointment";
import removeHTMLTags from "../../utils/removeHTMLTags";

import Facebook from "../../../assets/image/footer/facebook.svg";
import Twitter from "../../../assets/image/footer/twitter.svg";

import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import DummyImg from "../../../assets/image/article/article1.jpg";

const ArticleDetail = () => {
  // const [article, setArticle] = useState(null);
  const currentUrl = window.location.href;

  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    getArticle().catch(console.error);
  }, []);

  const getArticle = async () => {
    const slug = window.location.pathname.split('/')[2];
      const response = await fetch(`/wp-json/wp/v2/article?slug=${slug}`);
      if (!response.ok) {
        throw new Error('Service not found');
      }

      const articlesRaw = await response.json();
      if (articlesRaw.length === 0) throw new Error("Article Not Found")
      const articleData = articlesRaw[0];
      const article = {
        title: articleData.title.rendered,
        content: articleData.content.rendered,
        image: articleData.thumbnail,
        tags: articleData['article-tags'],
      } 

      setArticle(article);

      setLoading(true);

      let url = `/wp-json/wp/v2/article?`;
      url += `article-categories=${articleData['article-categories']}&per_page=2`; 
      
      const responseRelatedArticles = await fetch(url);
  
      const articleRaws = await responseRelatedArticles.json();
      const articleList = articleRaws.map((article) => ({
        permalink: article.link,
        image: article.thumbnail,
        title: article.title.rendered,
        tags: article['article-tags'],
        content: removeHTMLTags(article.content.rendered).split(".")[0]+"...",
      }));
      setRelatedArticles(articleList);
      setLoading(false);
  };

  const ourPartnerList = [
    {
      name: "Wide",
      logo: "dummy-wide.jpg",
    },
    {
      name: "tall",
      logo: "dummy-tall.jpg",
    },
    {
      name: "1x1",
      logo: "dummy-1x1.jpg",
    },
    {
      name: "Wide",
      logo: "dummy-wide.jpg",
    },
    {
      name: "tall",
      logo: "dummy-tall.jpg",
    },
    {
      name: "1x1",
      logo: "dummy-1x1.jpg",
    },
    {
      name: "Wide",
      logo: "dummy-wide.jpg",
    },
    {
      name: "tall",
      logo: "dummy-tall.jpg",
    },
    {
      name: "1x1",
      logo: "dummy-1x1.jpg",
    },
  ];

  // const articleList = [
  //   {
  //     title: "The Ultimate Guide to Choosing the Right Dentist for Your Family",
  //     content:
  //       "<p>Choosing the right dentist for your family is a crucial decision that can impact your oral health for years to come. With so many options available, it can be overwhelming to find a dental practice that meets your needs and provides euy</p><p>dummy euy</p>",
  //     image: DummyImg,
  //     tags: [
  //       "FamilyDentistry",
  //       "ChoosingADentist",
  //       "DentalCareTips",
  //       "OralHealth",
  //     ],
  //     slug: "the-ultimate-guide-to-choosing-the-right-dentist-for-your-family",
  //   },
  //   {
  //     title: "The Ultimate Guide to Choosing the Right Dentist for Your Family",
  //     content:
  //       "<p>Choosing the right dentist for your family is a crucial decision that can impact your oral health for years to come. With so many options available, it can be overwhelming to find a dental practice that meets your needs and provides euy</p><p>dummy euy</p>",
  //     image: DummyImg,
  //     tags: [
  //       "FamilyDentistry",
  //       "ChoosingADentist",
  //       "DentalCareTips",
  //       "OralHealth",
  //     ],
  //     slug: "the-ultimate-guide-to-choosing-the-right-dentist-for-your-family",
  //   },
  // ];

  const socialMedia = [
    {
      name: "facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
      icon: Facebook,
    },
    {
      name: "twitter",
      url: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${article?.title}`,
      icon: Twitter,
    },
  ];



  // useEffect(() => {
  //   setTimeout(() => {
  //     setArticle({
  //       title:
  //         "The Ultimate Guide to Choosing the Right Dentist for Your Family",
  //       content:
  //         "<p>Choosing the right dentist for your family is a crucial decision that can impact your oral health for years to come. With so many options available, it can be overwhelming to find a dental practice that meets your needs and provides euy</p><br/><b><p>dummy euy</p></b>",
  //       image: DummyImg,
  //       tags: [
  //         "FamilyDentistry",
  //         "ChoosingADentist",
  //         "DentalCareTips",
  //         "OralHealth",
  //       ],
  //       slug: "the-ultimate-guide-to-choosing-the-right-dentist-for-your-family",
  //     });
  //   }, 0);
  // }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  if (!article) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-col items-center gap-8 pb-4">
        <div className="flex w-full max-w-[1300px] flex-col gap-8 px-8 md:px-8 lg:w-[850px] lg:px-0">
          <div className="breadcrumbs overflow-hidden text-sm">
            <ul className="w-full">
              <li className="text-secondary">
                <a>Article</a>
              </li>

              <li className="md:!hidden">{truncateText(article.title, 41)}</li>
              <li className="!hidden md:!flex">{article.title}</li>
            </ul>
          </div>

          <div className="flex w-full justify-center">
            <img
              src={article.image}
              alt="article image"
              className="rounded-lg md:w-[548px]"
            />
          </div>
          <div>
            <p className="text-base text-neutral-500">
              {article.tags}
            </p>
            <h2 className="text-2xl font-bold lg:text-3xl">{article.title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
          ></div>
        </div>
        <div className="flex w-full flex-col items-center gap-8 py-8">
          <div className="w-full max-w-[1300px] px-8 md:px-8 lg:w-[850px] lg:px-0">
            <h2 className="font-normal text-primary">In Collaboration with</h2>
          </div>
          <PartnersList list={ourPartnerList} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h6 className="font-normal">Share</h6>
          <div className="flex gap-4">
            {socialMedia.map((social, index) => (
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <button
                  index={index}
                  className="btn btn-primary size-9 !rounded-lg !p-0"
                  style={{ minHeight: "36px", padding: "0" }}
                >
                  <img
                    src={social.icon}
                    alt="facebook"
                    className="size-6 max-w-max"
                  />
                </button>
              </a>
            ))}
          </div>
        </div>
        <div className="w-full px-8 pb-8 md:px-8 lg:w-[850px] lg:px-0">
          <button className="btn btn-primary w-28">
            <ChevronLeftIcon className="size-5" />
            Back
          </button>
        </div>
        <ArticleList articles={relatedArticles} title={"Related Articles"} isLoading={isLoading}/>
      </div>
      <Appointment />
    </>
  );
};

export default ArticleDetail;
