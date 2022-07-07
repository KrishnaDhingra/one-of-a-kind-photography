export default {
  name: 'services',
  title: 'Services',
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
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'reference',
      to: { type: 'imageGallery' },
    },
  ],
}
