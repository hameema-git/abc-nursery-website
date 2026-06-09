import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

import { blogs } from "../data/blogs";

import BlogNavbar from "../components/BlogNavbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import "./BlogPost.css";

function BlogPost() {

  const { slug } = useParams();

  // Scroll to top whenever blog changes
  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }, [slug]);

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {

    return (
      <>
        <BlogNavbar />

        <div className="blog-post-container">

          <h1>Blog Not Found</h1>

          <Link
            to="/blog"
            className="back-btn"
          >
            ← Back To Blogs
          </Link>

        </div>

        <Footer />
      </>
    );
  }

  // Related Articles
  const relatedBlogs = blogs
    .filter(item => item.id !== blog.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>

        <title>
          {blog.title} | ABC Nursery Abu Dhabi
        </title>

        <meta
          name="description"
          content={blog.excerpt}
        />

        <meta
          name="keywords"
          content={blog.keywords}
        />

        {/* Canonical URL */}

        <link
          rel="canonical"
         

          href={`https://www.abc-nursery.ae/blog/${blog.slug}`}
        />

        {/* Open Graph SEO */}

        <meta
          property="og:title"
          content={blog.title}
        />

        <meta
          property="og:description"
          content={blog.excerpt}
        />

        <meta
          property="og:type"
          content="article"
        />

        <meta
          property="og:url"
          content={`www.abc-nursery.ae/blog/${blog.slug}`}
        />

        <meta
          property="og:image"
          content={blog.image}
        />

        <meta
          property="article:published_time"
          content={blog.date}
        />

        {/* Twitter SEO */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={blog.title}
        />

        <meta
          name="twitter:description"
          content={blog.excerpt}
        />

        <meta
          name="twitter:image"
          content={blog.image}
        />

      </Helmet>

      <BlogNavbar />

      <div className="blog-post-container">

        <Link
          to="/blog"
          className="back-btn"
        >
          ← Back To Blogs
        </Link>

        {/* <img
          src={blog.image}
          alt={`${blog.title} - ABC Nursery Abu Dhabi`}
          className="blog-post-image"
        /> */}
        <img
  src={blog.image}
  alt={blog.alt}
  className="blog-post-image"
/>

        {/* <h1>
          {blog.title}
        </h1> */}

        <div className="breadcrumb">

  <Link to="/">
    Home
  </Link>

  <span> / </span>

  <Link to="/blog">
    Blog
  </Link>

  <span> / </span>

  <span>
    {blog.title}
  </span>

</div>

<h1>
  {blog.title}
</h1>

        <div className="blog-meta">
          📅 {blog.date}
          {" • "}
          ⏱ {blog.readTime}
          {" • "}
          ABC Nursery Abu Dhabi
        </div>

        <div className="blog-content">
          {blog.content}
        </div>

        {/* Related Articles */}

        <div className="related-posts">

          <h2>
            Related Articles
          </h2>

          <div className="related-grid">

            {relatedBlogs.map(item => (

              <Link
                key={item.id}
                to={`/blog/${item.slug}`}
                className="related-card"
              >

                {/* <img
                  src={item.image}
                  alt={`${item.title} - ABC Nursery`}
                /> */}

                <img
  src={item.image}
  alt={item.alt}
/>

                <h3>
                  {item.title}
                </h3>

                {item.excerpt && (

                  <p className="related-excerpt">
                    {item.excerpt}
                  </p>

                )}

              </Link>

            ))}

          </div>

        </div>

      </div>

      <Contact />

      <Footer />

    </>
  );
}

export default BlogPost;