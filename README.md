# TREAT - Tidy & Reorder Every Adorable Tint

TREAT is a web-based tool for rearranging `.gpl` color palettes. It allows you to upload a GIMP Palette file, reorder the colors using drag-and-drop, and then save the sorted palette.

## Features

- **Upload GIMP Palette (`.gpl`) files:** Validates that the uploaded file starts with "GIMP Palette" and contains correctly formatted color data.
- **Drag-and-drop reordering:** Easily rearrange colors in the palette by dragging and dropping.
- **Save the sorted palette:** Download your sorted color palette as a `.gpl` file.

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [Creative Commons Zero v1.0 Universal (CC0-1.0)](LICENSE) License.
