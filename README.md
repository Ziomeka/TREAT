# TREAT - Tidy & Reorder Every Adorable Tint

**TREAT** is a simple, web-based tool designed for rearranging `.gpl` color palette files. It allows you to upload a `.gpl` file, reorder the colors by dragging and dropping, and then save the sorted palette.

## Project Status

🚧 **Work in Progress** 🚧

This project is a work in progress. I am building it primarily for my personal use, as I couldn’t find an existing tool that met my needs without installing additional software. My goal is to create a fast, simple, and efficient tool for managing `.gpl` files directly in the browser. 

Plus, I wanted to have some fun with it—after all, these are adorable tints we’re talking about, and "TREAT" is a punny name that adds a bit of charm to the process!

## Features

- **Upload `.gpl` files**: Load your GIMP palette files into the tool.
- **Drag & Drop Sorting**: Easily reorder your colors using drag and drop.
- **Save Sorted Palette**: Save the rearranged palette back to a `.gpl` file.


## Usage

You can use TREAT directly from your web browser without any installation. 

### Accessing the Tool

1. Visit the TREAT tool at [Ziomeka.github.io/TREAT](https://Ziomeka.github.io/TREAT).
   
2. Click the "Upload .gpl file" button to upload your palette file.

3. Once the file is uploaded, you can drag and drop colors to reorder them.

4. Click the "Save" button to download the reordered palette.


### Running Locally

If you prefer to run the tool locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Ziomeka/TREAT.git
   ```
2. Navigate to the project directory:
   ```bash
   cd treat
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   This will start a local development server, and you can access the app at `http://localhost:5173` by default.

5. To build the project for production, run:
   ```bash
   npm run build
   ```
   The build files will be generated in the `dist` directory.

6. To preview the production build locally, run:
   ```bash
   npm run preview
   ```

## License

This project is licensed under the **Creative Commons Zero v1.0 Universal (CC0-1.0) License**. See the [LICENSE](./LICENSE) file for more details.

## Contribution

Since this is a personal project and a work in progress, I’m not currently accepting direct contributions. However, I am open to **feature requests**! If you have an idea for a new feature or an improvement, please feel free to open an issue or reach out.

## Acknowledgements

Thanks to the creators of the tools and libraries used in this project, including:

- [UnoCSS](https://github.com/unocss/unocss)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
