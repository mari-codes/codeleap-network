import Button from './components/Button';
import { Input } from './components/Input';
import { Textarea } from './components/TextArea';

function App() {
  return (
    <>
      <Button variant="primary" size="compact">
        Enter
      </Button>

      {/* <Button variant="primary" disabled={!title.trim() || !content.trim()}>Create</Button> */}

      <Button variant="outline">Cancel</Button>

      <Button variant="danger">Delete</Button>

      <Button variant="success">Save</Button>

      <Input label="Title" placeholder="Hello world" inputSize="lg" />

      <Textarea label="Content" placeholder="Content here" textareaSize="lg" />

      <Textarea label="Content" placeholder="Content here" textareaSize="md" />
    </>
  );
}

export default App;
