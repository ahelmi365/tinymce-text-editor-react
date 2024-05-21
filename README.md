# Bundling the TinyMCE package with the React framework + TypeScript

- To run live preview on codesandbox: https://codesandbox.io/p/github/ahelmi365/tinymce-text-editor-react/main

## What are the implemented features in this repo?

- In this repo, you can get the major features from TinyMCE Text Editor with React + TypeScript
- You can add text styles like "Bold", "Italic", and "Underline"
- You can set text alignment (left, center, right)
- You can insert image by using absolute image url.
- You can insert image from your local drive.
- There are some validations added on inserting images like only 1 image allowed and max size is 1MB.
- Feel free to remove/custmomize these validation in the `filePickerHandler` function if you want.
- You can insert tables, bullet lists, numeric lists

### To run this locally

- Fork/clone the repo: `git clone https://github.com/ahelmi365/tinymce-text-editor-react.git`
- Navigate to the repo folder: `cd tinymce-text-editor-react`
- Run `npm install` to install all packages needed.
- Run `npm run dev` to open the live preview in your browser.

### Side notes of used packages in this repo:

- You don't need to run the commands below, this is just side notes for me
- `npm install --save tinymce @tinymce/tinymce-react`
- `npm i dompurify`
- `npm i @types/dompurify`

### Reference to bndling the TinyMCE package with the React framework

- https://www.tiny.cloud/docs/tinymce/latest/react-pm-bundle/
