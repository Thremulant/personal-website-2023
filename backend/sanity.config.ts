import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { documentInternationalization } from '@sanity/document-internationalization'

const singletonActions = new Set(["publish", "discardChanges", "restore"])
// Define the singleton document types
const singletonTypes = new Set(["about"])


export default defineConfig({
  name: 'default',
  title: 'main-website',

  projectId: 'i6ktgjdj',
  dataset: 'main',

  plugins: [deskTool({
    structure: (S) =>
      S.list()
        .title("Content")
        .items([

          // Regular document types
          S.documentTypeListItem("job").title("Job Positions"),
          S.documentTypeListItem("technology").title("Tech Stack"),
          S.documentTypeListItem("social").title("Social Links"),
          S.divider(),
          // Our singleton type has a list item with a custom child
          S.listItem()
            .title("Settings")
            .id("about")
            .child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document()
                .schemaType("about")
                .documentId("about")
            ),

        ]),
  }), visionTool(), documentInternationalization({
    // Required configuration
    supportedLanguages: [
      { id: 'es', title: 'Spanish' },
      { id: 'en', title: 'English' }
    ],
    schemaTypes: ['job'],
  })],

  schema: {
    types: schemaTypes,
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
