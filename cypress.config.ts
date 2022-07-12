import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
    framework: 'create-react-app',
    bundler: 'webpack',
  },
    setupNodeEvents(on, config) {},
    specPattern: 'src/**/*.test.{js,ts,jsx,tsx}',
  },
})
