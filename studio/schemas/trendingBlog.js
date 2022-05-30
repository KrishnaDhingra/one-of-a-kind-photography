export default {
  name: 'trendingBlog',
  title: 'Trending Blog',
  type: 'document',
  fields: [
    {
      name: 'trendingImage',
      title: 'Trending Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categoryName',
      title: 'Category Name',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'nameofthewriter',
      title: 'Name of the writer',
      type: 'string',
    },
    {
      name: 'designation',
      title: 'Designation',
      type: 'string',
    },
    {
      name: 'writerImage',
      title: 'Writer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
