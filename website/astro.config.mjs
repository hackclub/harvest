import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    redirects: {
        '/signup': {
            destination: 'https://forms.hackclub.com/t/x1vbYvqUqtus',
        }
    }
});
