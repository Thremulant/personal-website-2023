import { defineType, defineField, SanityDocument } from 'sanity'
export const job = defineType({
  name: 'job',
  type: 'document',
  title: 'Job Position',
  preview: {
    select: {
      title: 'job_position',
      subtitle: 'job_employer'
    }
  },
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'job_position',
      type: 'string',
      title: 'Position',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'job_employer',
      type: 'string',
      title: 'Employer'
    }),
    defineField({
      name: 'job_slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (document: SanityDocument) => `${document.job_position}${document.job_employer ? `-at-${ document.job_employer }` :  '' }`,
      }
    }),
    defineField({
      name: 'job_is_current',
      type: 'boolean',
      title: 'Current Position'
    }),
    defineField({
      name: 'job_start_date',
      type: 'date',
      title: 'Starting Date'
    }),
    defineField({
      name: 'job_end_date',
      type: 'date',
      title: 'End Date',
      hidden: ({ parent }: any) => parent.job_is_current
    }),
    defineField({
      name: 'job_summary',
      type: 'text',
      title: 'Position Summary'
    }),
    defineField({
      name: 'job_carousel',
      type: 'array',
      of: [{ type: 'image' }],
      title: 'Carousel',
      options: {
        layout: 'grid'
      }
    }),
    defineField({
      name: 'job_technologies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'technology' }] }],
      title: 'Tech Stack',
    }),
    defineField({
      name: 'job_text',
      type: 'text',
      title: 'Main Text'
    }),
  ]
})