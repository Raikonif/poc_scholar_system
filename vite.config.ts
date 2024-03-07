import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { config } from "dotenv";
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
config();
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
})
