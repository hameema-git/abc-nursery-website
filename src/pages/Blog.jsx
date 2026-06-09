import BlogNavbar from "../components/BlogNavbar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { blogs } from "../data/blogs";

import "./Blog.css";

function Blog() {
  return (
    <>
      <Helmet>

        <title>
          ABC Nursery Blog | Parenting Tips & Preschool Advice
        </title>

        <meta
          name="description"
          content="Read parenting tips, preschool guidance, and early childhood education articles from ABC Nursery Abu Dhabi."
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/"
        />

        {/* Open Graph SEO */}

        <meta
          property="og:title"
          content="ABC Nursery Blog | Parenting Tips & Preschool Advice"
        />

        <meta
          property="og:description"
          content="Read parenting tips, preschool guidance, and early childhood education articles from ABC Nursery Abu Dhabi."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/"
        />

        <meta
          property="og:image"
          content="https://abc-nursery.ae/favicon.png"
        />

        {/* Twitter SEO */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

      </Helmet>

      <BlogNavbar />

      <section className="blog-page">

        <h1 className="blog-title">
          OUR LATEST BLOGS
        </h1>

        <p className="blog-subtitle">
          Parenting Tips • Preschool Advice • Early Learning
        </p>

        <div className="blog-grid">

          {blogs.map((blog) => (

            <Link
              key={blog.id}
              to={`/blog/${blog.slug}`}
              className="blog-card-link"
            >

              <div className="blog-card">

                {/* <img
                  src={blog.image}
                  alt={`${blog.title} - ABC Nursery Abu Dhabi`}
                /> */}


<img
  src={blog.image}
  alt={blog.alt}
/>
                <div className="blog-content">

                  <p className="blog-date">
                    {blog.date}
                  </p>

                  <h3 title={blog.title}>
                    {blog.title}
                  </h3>

                  {blog.excerpt && (
                    <p className="blog-excerpt">
                      {blog.excerpt}
                    </p>
                  )}

                  <span className="read-btn">
                    Read More →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>
    </>
  );
}

export default Blog;