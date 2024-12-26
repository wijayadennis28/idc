import React, { useState, useEffect } from "react";

import PartnersList from "../components/PartnersList";
import Loading from "../components/Loading";
import ArticleList from "../components/ArticleList";
import removeHTMLTags from "../../utils/removeHTMLTags";

import Facebook from "../../../assets/image/footer/facebook.svg";
import Twitter from "../../../assets/image/footer/twitter.svg";

import logoArticle from "../../../assets/image/logo/logo-article.jpg";

import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { useTranslation } from "react-i18next";

const ArticleDetail = () => {
  const currentUrl = window.location.href;
  const { t } = useTranslation();

  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [ourPartnerList, setOurPartnerList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getArticle().catch(console.error);
  }, []);

  const getArticle = async () => {
    const slug = window.location.pathname.split("/").filter(Boolean).pop();
    const response = await fetch(`${wpApiSettings.restUrl}wp/v2/article?slug=${slug}`);
    if (!response.ok) {
      throw new Error("Service not found");
    }

    const articlesRaw = await response.json();
    if (articlesRaw.length === 0) throw new Error("Article Not Found");
    const articleData = articlesRaw[0];
    const article = {
      title: articleData.title.rendered,
      content: articleData.content.rendered,
      image: articleData.thumbnail,
      tags: articleData["article-tags"],
    };

    setArticle(article);

    setLoading(true);

    let url = `${wpApiSettings.restUrl}wp/v2/article?`;
    url += `article-categories=${articleData["article-categories"]}&per_page=2`;

    const responseRelatedArticles = await fetch(url);

    const articleRaws = await responseRelatedArticles.json();
    const articleList = articleRaws.map((article) => ({
      permalink: article.link,
      image: article.thumbnail,
      title: article.title.rendered,
      tags: article["article-tags"],
      content: removeHTMLTags(article.content.rendered).split(".")[0] + "...",
    }));
    setRelatedArticles(articleList);

    const adPartnersArray = Object.values(articleData.meta?.ad_partners || {});
    const partnersList = adPartnersArray.map((partner) => ({
      name: partner?.title || "",
      logo: partner?.image || "",
    }));
    setOurPartnerList(partnersList);

    setLoading(false);
  };

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
                <a href="/articles">{t("pages.articles")}</a>
              </li>

              <li className="md:!hidden">{truncateText(article.title, 41)}</li>
              <li className="!hidden md:!flex">{article.title}</li>
            </ul>
          </div>

          <div className="flex h-60 w-full justify-center md:h-80 2xl:h-96">
            <img
              src={article.image || logoArticle}
              alt="article image"
              className="w-full rounded-lg object-cover object-center md:w-[501px]"
            />
          </div>
          <div>
            <p className="text-base text-neutral-500">{article.tags}</p>
            <h2 className="text-2xl font-bold lg:text-3xl">{article.title}</h2>
          </div>
          <div id="article-content"
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
          ></div>
        </div>
        {ourPartnerList.length > 0 && (
          <div className="flex w-full flex-col items-center gap-8 py-8">
            <div className="w-full max-w-[1300px] px-8 md:px-8 lg:w-[850px] lg:px-0">
              <h2 className="font-normal text-primary">
                In Collaboration with
              </h2>
            </div>
            <PartnersList list={ourPartnerList} />
          </div>
        )}
        <div className="flex flex-col items-center gap-2">
          <h6 className="font-normal">{t("share")}</h6>
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
          <a href="/articles">
            <button className="btn btn-primary w-28">
              <ChevronLeftIcon className="size-5" />
              {t("back")}
            </button>
          </a>
        </div>
        {relatedArticles.length > 0 && (
          <ArticleList
            articles={relatedArticles}
            title={"Related Articles"}
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  );
};

export default ArticleDetail;
