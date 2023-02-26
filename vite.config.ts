import { ResolveOptions, defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

const alias = [
  {
    find: "~",
    replacement: resolve(__dirname, "./src"),
  },
];
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias,
  },
});
