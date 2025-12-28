
  # Medical Student Worksheet

  This is a code bundle for Medical Student Worksheet. The original project is available at https://www.figma.com/design/V226iHCZ35yOyvtWkmJHVL/Medical-Student-Worksheet.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Building for production

  Run `npm run build` to create a production build. The output will be in the `dist` folder.

  ## Deploying to Netlify

  This project is configured for easy deployment to Netlify:

  1. **Connect your repository**: Link this GitHub repository to Netlify
  2. **Automatic configuration**: Netlify will automatically detect the settings from `netlify.toml`
  3. **Deploy**: Netlify will run `npm run build` and deploy the `dist` folder

  Alternatively, you can manually deploy:
  - Build the project: `npm run build`
  - Drag and drop the `dist` folder to Netlify's deploy page

  The configuration includes SPA routing support, so all routes will work correctly.
  