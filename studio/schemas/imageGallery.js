export default {
  name: 'imageGallery',
  title: 'Image Galleries',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
}
