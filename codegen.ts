import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
   schema: 'https://rickandmortyapi.com/graphql',
//    documents: ['src/**/*.tsx'],
   ignoreNoDocuments: true, // for better experience with the watcher
//    generates: {
//       './src/gql/': {
//         preset: 'client',
//       }
//    },
   documents: 'src/**/!(*.generated).{ts,tsx}',
  generates: {
    'src/types.ts': {
      plugins: ['typescript'],
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: { fileName:'types',extension: '.generated.tsx', baseTypesPath: 'types.ts' },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: { 
        withHooks: true,
        withResultType:true,
        documentMode: 'documentNode',
     },
    },
  },
}
export default config