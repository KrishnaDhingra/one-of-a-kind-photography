// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import wedding from './wedding'
import gallery from './gallery'
import services from './services'
import outdoor from './outdoor'
import videos from './videos'
import sidebar from './sidebar'
import trendingBlog from './trendingBlog'
import blog from './blog'
import homePhotoSamples from './homePhotoSamples'
import jobsImage from './jobsImage'
import aboutUsImage from './aboutUsImage'
import getInTouchImage from './getInTouchImage'
import bookNowImage from './bookNowImage'
import bookNowSlider from './bookNowSlider'
import imageGallery from './imageGallery'
import detailTrendingBlog from './detailTrendingBlog'
import detailBlog from './detailBlog'
import blockContent from './blockContent'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    wedding,
    videos,
    services,
    gallery,
    outdoor,
    sidebar,
    trendingBlog,
    blog,
    homePhotoSamples,
    jobsImage,
    aboutUsImage,
    bookNowImage,
    getInTouchImage,
    bookNowSlider,
    imageGallery,
    detailTrendingBlog,
    detailBlog,
    blockContent,
  ]),
})
