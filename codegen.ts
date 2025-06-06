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
    'src/generated/types.ts': {
      plugins: ['typescript'],
    },
    'src/staticMockDataGenerator.ts': {
      plugins: ['add','typescript-mock-data'],
      config:{
        typesFile:'./generated/types.ts',
        listElementCount: 3,
        prefix: 'createStaticMock',
        content:'/* eslint-disable @typescript-eslint/no-unused-vars */'
      }
    },
    'src/dynnamicMockDataGenerator.ts': {
      plugins: ['add','typescript-mock-data'],
      config:{
        typesFile:'./generated/types.ts',
        listElementCount: 3,
        dynamicValues:true,
        prefix: 'createDynamicMock',
        content:'/* eslint-disable @typescript-eslint/no-unused-vars */'
      }
    },
    './src/generatedMSWHandlers.ts': {
      plugins: ['typescript-operations','typescript-msw'],
      config:{
        // documentMode: 'documentNode',
        // importDocumentNodeExternallyFrom: 'near-operation-file',
        // documentNodeImport: './types.ts',
        // importOperationTypesFrom:'./types.ts',
      }
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: { folder:'generated',extension: '.types.ts', baseTypesPath: 'generated/types.ts' },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: { 
        withHooks: true,
        withResultType:true,
        documentMode: 'documentNode',
     },
    },
    './src/': {
      preset: 'near-operation-file',
      presetConfig: { folder:'generated',extension: '.mswHandler.ts', baseTypesPath: 'generated/types.ts' },
      plugins: ['typescript-operations', 'typescript-msw'],
      config: { 
        withHooks: true,
        withResultType:true,
        documentMode: 'documentNode',
     },
    },
  },
}
export default config