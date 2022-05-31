export default {
  name: 'videos',
  title: 'Videos',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'hoverText',
      title: 'Hover Text',
      type: 'string',
    },
    {
      name: 'videoLink',
      title: 'Vide Link',
      type: 'string',
    },
  ],
}
