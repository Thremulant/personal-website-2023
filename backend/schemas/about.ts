import { defineType, defineField } from 'sanity'
export const about = defineType({
  name: 'about',
  type: 'object',
  title: 'About Me',
  fields: [
    defineField({
      name: 'about_title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'about_elevator',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      title: 'Elevator'
    }),
    defineField({
      name: 'about_social',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'social'}]}],
      title: 'Social'
    }),
  ]
})