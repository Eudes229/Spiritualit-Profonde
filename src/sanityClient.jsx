
import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'qoljwjfa', 
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-05-03',
});