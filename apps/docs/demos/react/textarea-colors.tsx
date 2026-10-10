import { XTextarea } from "@/components/kit/x-textarea";

export default function TextareaColors() {
  return (
    <div className="flex w-full flex-wrap items-start gap-4">
      <XTextarea color="primary" placeholder="primary" className="w-64" />
      <XTextarea color="success" placeholder="success" className="w-64" />
      <XTextarea color="warning" placeholder="warning" className="w-64" />
      <XTextarea highlight color="error" placeholder="highlight + error" className="w-64" />
    </div>
  );
}
