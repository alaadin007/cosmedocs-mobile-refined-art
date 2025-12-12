import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React bundle - smallest possible
          if (id.includes('react-dom') || id.includes('react/')) {
            return 'react-core';
          }
          // Router separate
          if (id.includes('react-router')) {
            return 'router';
          }
          // Heavy animation library - defer
          if (id.includes('framer-motion')) {
            return 'motion';
          }
          // UI components bundle
          if (id.includes('@radix-ui')) {
            return 'ui';
          }
          // Data fetching
          if (id.includes('@tanstack')) {
            return 'query';
          }
          // Supabase
          if (id.includes('@supabase')) {
            return 'supabase';
          }
          // Helmet for SEO
          if (id.includes('react-helmet')) {
            return 'helmet';
          }
          // Charts
          if (id.includes('recharts') || id.includes('d3')) {
            return 'charts';
          }
        },
      },
    },
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
      mangle: true,
    },
    target: 'es2020',
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
}));
