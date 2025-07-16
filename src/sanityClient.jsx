
import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'qoljwjfa', // Remplacez par votre Project ID
  dataset: 'production', // ou le nom de votre dataset
  useCdn: true, // `false` si vous voulez toujours les données les plus fraîches
  apiVersion: '2023-05-03', // utilisez la date du jour
});