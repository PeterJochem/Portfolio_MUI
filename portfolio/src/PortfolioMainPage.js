import * as React from "react";
import { useState, useEffect } from "react";
import * as custom_css from "./css/portfolio.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import Header from "./Header";
import Box from "@material-ui/core/Box";
import Posts from "./Posts.js";
import DetailedPost from "./DetailedPost.js";
import { render } from "react-dom";

const sections = [];

export default function PortfolioMainPage() {
  return (
    <div className="page">
      <div
        className="page__content"
        style={{ height: "100vh", width: "100vw" }}
      >
        <Header user_name="Peter Jochem" sections={sections} />
        <Box m={5} pt={1} />

        <section className="listing">
          <div className="wrap">
            {Posts.map((post) => {
              return (
                <article className="post">
                  <a href={post.link}>
                    <div className="post__image-wrap">
                      <div
                        className="post__image"
                        style={{ backgroundImage: post.dynamicImage }}
                      ></div>
                    </div>

                    <div className="post__content-wrap">
                      <div className="post__content">
                        <h2 className="post__title">{post.title}</h2>
                        <p className="post__subtitle">{post.subtitle}</p>
                        <p className="post__description">{post.description}</p>
                      </div>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
