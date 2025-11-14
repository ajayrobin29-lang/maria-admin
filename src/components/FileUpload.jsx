"use client";
import { useRef, useState } from "react";

export default function FileUpload({}) {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData();
    formData.append("file", file);

    // console.log(formData.get("file"));

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/uploadFile`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    console.log(data);
    alert("Imported!");
  };

  return (
    <>
      <form
        className="w-full text-center"
        method="post"
        onSubmit={handleSubmit}
      >
        <div
          className={`mx-auto flex items-center justify-center border-gray-800 ${
            isDragging ? " bg-neutral-200" : "bg-none"
          } border border-dashed border-default-strong rounded-base w-full h-64 transition  hover:bg-neutral-tertiary-medium`}
        >
          {file ? (
            <div
              className={`relative flex flex-row items-center gap-3 p-4 text-neutral-800 border border-neutral-800`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 32 32"
              >
                <defs>
                  <linearGradient
                    id="vscodeIconsFileTypeExcel0"
                    x1="4.494"
                    x2="13.832"
                    y1="-2092.086"
                    y2="-2075.914"
                    gradientTransform="translate(0 2100)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#18884f" />
                    <stop offset=".5" stop-color="#117e43" />
                    <stop offset="1" stop-color="#0b6631" />
                  </linearGradient>
                </defs>
                <path
                  fill="#185c37"
                  d="M19.581 15.35L8.512 13.4v14.409A1.192 1.192 0 0 0 9.705 29h19.1A1.192 1.192 0 0 0 30 27.809V22.5Z"
                />
                <path
                  fill="#21a366"
                  d="M19.581 3H9.705a1.192 1.192 0 0 0-1.193 1.191V9.5L19.581 16l5.861 1.95L30 16V9.5Z"
                />
                <path fill="#107c41" d="M8.512 9.5h11.069V16H8.512Z" />
                <path
                  d="M16.434 8.2H8.512v16.25h7.922a1.2 1.2 0 0 0 1.194-1.191V9.391A1.2 1.2 0 0 0 16.434 8.2Z"
                  opacity=".1"
                />
                <path
                  d="M15.783 8.85H8.512V25.1h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z"
                  opacity=".2"
                />
                <path
                  d="M15.783 8.85H8.512V23.8h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z"
                  opacity=".2"
                />
                <path
                  d="M15.132 8.85h-6.62V23.8h6.62a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z"
                  opacity=".2"
                />
                <path
                  fill="url(#vscodeIconsFileTypeExcel0)"
                  d="M3.194 8.85h11.938a1.193 1.193 0 0 1 1.194 1.191v11.918a1.193 1.193 0 0 1-1.194 1.191H3.194A1.192 1.192 0 0 1 2 21.959V10.041A1.192 1.192 0 0 1 3.194 8.85Z"
                />
                <path
                  fill="#fff"
                  d="m5.7 19.873l2.511-3.884l-2.3-3.862h1.847L9.013 14.6c.116.234.2.408.238.524h.017c.082-.188.169-.369.26-.546l1.342-2.447h1.7l-2.359 3.84l2.419 3.905h-1.809l-1.45-2.711A2.355 2.355 0 0 1 9.2 16.8h-.024a1.688 1.688 0 0 1-.168.351l-1.493 2.722Z"
                />
                <path
                  fill="#33c481"
                  d="M28.806 3h-9.225v6.5H30V4.191A1.192 1.192 0 0 0 28.806 3Z"
                />
                <path fill="#107c41" d="M19.581 16H30v6.5H19.581Z" />
              </svg>
              {file.name}

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setFile(null);
                }}
                className="absolute cursor-pointer top-[-14%] left-[92%] rounded-full bg-neutral-500 text-white p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2 h-2"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="22"
                    strokeDashoffset="22"
                    strokeLinecap="round"
                    strokeWidth="2"
                  >
                    <path d="M19 5L5 19">
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.3s"
                        dur="0.3s"
                        values="22;0"
                      />
                    </path>
                    <path d="M5 5L19 19">
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.3s"
                        values="22;0"
                      />
                    </path>
                  </g>
                </svg>
              </button>
            </div>
          ) : (
            <label
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center cursor-pointer w-full h-64"
            >
              <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs">XLSX</p>
              </div>
              <input
                id="dropzone-file"
                onChange={handleFileSelect}
                type="file"
                className="hidden"
                ref={inputRef}
              />
            </label>
          )}
        </div>

        <button
          disabled={!file}
          type="submit"
          className="uppercase px-2 py-1 mt-6 mx-auto rounded border border-neutral-800 shadow-lg cursor-pointer disabled:bg-neutral-300 disabled:text-neutral-500 disabled:cursor-not-allowed"
        >
          submit
        </button>
      </form>
    </>
  );
}
