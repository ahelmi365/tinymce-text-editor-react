import { useRef } from "react";

export const getNumberOfImagesInContent = (value: string) => {
  const regex = /<img[^>]*>/g;
  const matches = value.match(regex);
  return matches ? matches?.length : 0;
};

export type TFilePickerCallback = (url: string | ArrayBuffer) => void;
export interface IFileMeta {
  title?: string;
  filetype?: string; // e.g., 'image' or 'file'
}
const isImageFile = (file: File) => {
  const mimeType = file.type.toLowerCase();
  return mimeType.startsWith("image/");
};
const isValidImageSize = (file: File, imageMaxSizeInMB: number) => {
  const MAX_SIZE = imageMaxSizeInMB * 1024 * 1024;
  return file.size <= MAX_SIZE;
};

const useTinyTextEditor = (imageMaxSizeInMB: number) => {
  const editorRef = useRef(null);

  const filePickerHandler = (
    callback: TFilePickerCallback,
    value: string,
    meta: IFileMeta,
    editorContent: string
  ) => {
    if (getNumberOfImagesInContent(editorContent) === 1) {
      !value && console.log(value);
      alert("At most 1 image");
      return;
    }

    if (meta.filetype === "image") {
      const input = document.getElementById("tinyMCEImage") as HTMLInputElement;
      input.value = "";
      //   dispatch(setIsLoading(true));
      console.log("loading...");

      input.click();

      //   dispatch(setIsLoading(true));

      input.onchange = (event: Event) => {
        if (!(input && input.files && input.files?.length > 0)) {
          return;
        }

        const file = input.files[0];
        // validate file type
        if (!isImageFile(file)) {
          alert("Only image files allowed.");
          event.preventDefault();
          input.value = "";
          //   dispatch(setIsLoading(false));
          return;
        }

        // Validate file size
        if (!isValidImageSize(file, imageMaxSizeInMB)) {
          alert(
            `Cannot accept image with size larger than ${imageMaxSizeInMB}`
          );
          event.preventDefault();
          input.value = "";
          //   dispatch(setIsLoading(false));
          return;
        }
        const reader = new FileReader();

        reader.onload = function () {
          callback(reader.result || "");
          //   dispatch(setIsLoading(false));
        };

        reader.readAsDataURL(file);
      };
    }
  };

  return { editorRef, filePickerHandler };
};

export default useTinyTextEditor;
