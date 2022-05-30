export default {
  name: 'sidebar',
  title: 'Sidebar',
  type: 'document',
  fields: [
    {
      name: 'sidebarImage',
      title: 'Sidebar image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
  ],
}
