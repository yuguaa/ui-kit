import { XColorPicker } from "@/components/kit/x-color-picker";
import { XFileUpload } from "@/components/kit/x-file-upload";
import { XPinInput } from "@/components/kit/x-pin-input";

export default function UploadBasic() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-6">
        <XColorPicker defaultValue="#00DC82" />
        <XPinInput defaultValue="1234" length={6} />
      </div>
      <XFileUpload className="w-full" />
    </div>
  );
}
