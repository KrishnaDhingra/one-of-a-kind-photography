import TrendingInfo from './trendingInfo'
import BlogInfo from './blogInfo'
import './blog.css'

function Blog() {
  return (
    <main className="blog-container my-[2rem] md:my-[2rem] px-8 md:px-0">
      <div className="hidden lg:block circle circle1"></div>
      <div className="hidden lg:block circle circle2"></div>
      <h1 className="trending-heading font-medium text-[48px] md:text-[60px]">
        Trending
      </h1>
      <TrendingInfo />
      <section className="blog-inner">
        <BlogInfo />
      </section>
    </main>
  )
}

export default Blog
