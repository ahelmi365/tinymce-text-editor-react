import DOMPurify from "dompurify";

const PreviewHTMLEditorText = ({ value }: { value: string }) => {
  const cleanValue = DOMPurify.sanitize(value);

  return <div dangerouslySetInnerHTML={{ __html: cleanValue }}></div>;
};

export default PreviewHTMLEditorText;
