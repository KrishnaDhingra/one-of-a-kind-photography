export default {
  name: 'detailBlogHeader',
  title: 'Detail Blog Header',
  type: 'document',

  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'nameOfWriter',
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
      title: 'Writer image',
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
      name: 'date',
      title: 'Date',
      type: 'string',
    },
  ],
}
