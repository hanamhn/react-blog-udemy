import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddCommentForm from "../component/AddCommentForm";
import Articles from "../component/Articles";
import CommentList from "../component/CommentList";
import articleContent from "./article-content";
import NotFound from "./NotFound";

const Article = ({ match }) => {
  const { name } = useParams();
  const [articleInfo, setArticleInfo] = useState({ comment: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  const article = articleContent.find((article) => article.name === name);
  if (!article) return <NotFound />;
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}

      <CommentList comments={articleInfo.comment} />
      <AddCommentForm articleName={name} setAritcleInfo={setArticleInfo} />
      <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900">
        Other Articles
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
    </>
  );
};

export default Article;
