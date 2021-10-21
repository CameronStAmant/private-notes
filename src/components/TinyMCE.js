import { Editor } from '@tinymce/tinymce-react';

function TinyMCE(props) {
  return (
    <Editor
      onInit={(env, editor) => (props.editorRef.current = editor)}
      apiKey="bvw3vvjdka7tpr9z6r2zs15ms3h6c4hthn9803f5k8ddqw2r"
      plugins="wordcount"
      initialValue={props.value}
    />
  );
}

export default TinyMCE;
