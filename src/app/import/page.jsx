import FileUpload from "@/components/FileUpload";

export default function Page({}) {
  return (
    <>
      <div className="w-full lg:w-1/2 lg:mx-auto flex flex-col justify-center items-center gap-y-6">
        <FileUpload />
      </div>
    </>
  );
}
