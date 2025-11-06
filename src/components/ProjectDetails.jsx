"use client";
import { useState } from "react";

export default function ProjectDetails({data, setSelected}) {

  const [status, setStatus] = useState(data.status);
  const [notes, setNotes] = useState("");

  const statusOptions = ["New", "Pending", "Success"];

  return (
    <div className="z-200 absolute bottom-0 bg-black/50 w-full h-screen">

    <div className="max-w-4xl mx-auto rounded bg-white border border-gray-200 h-screen p-8 overflow-y-scroll">
      <h2 className="text-lg text-center text-gray-800 mb-3">Project Overview</h2>

      {/* Project Info */}
      <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
        <div className=" border px-2 py-2 rounded-xs cursor-not-allowed"><span className="font-medium text-gray-900 rounded bg-neutral-200 py-1 px-2 mr-2">Client</span> {data.name}</div>
        <div className=" border px-2 py-2 rounded-xs cursor-not-allowed"><span className="font-medium text-gray-900 rounded bg-neutral-200 py-1 px-2 mr-2">Email</span> {data.email}</div>
        <div className=" border px-2 py-2 rounded-xs cursor-not-allowed"><span className="font-medium text-gray-900 rounded bg-neutral-200 py-1 px-2 mr-2">Phone</span> {data.phone}</div>
        <div className=" border px-2 py-2 rounded-xs cursor-not-allowed"><span className="font-medium text-gray-900 rounded bg-neutral-200 py-1 px-2 mr-2">Date</span> {data.date}</div>
        <div className=" border px-2 py-2 rounded-xs cursor-not-allowed"><span className="font-medium text-gray-900 rounded bg-neutral-200 py-1 px-2 mr-2">Address</span> {data.address}</div>
        <div className=" border px-2 py-2 rounded-xs cursor-not-allowed"><span className="font-medium text-gray-900 rounded bg-neutral-200 py-1 px-2 mr-2">Lead Source</span> {data.leadSource}</div>
        <div className=" border px-2 py-2 rounded-xs cursor-not-allowed"><span className="font-medium text-gray-900 rounded bg-neutral-200 py-1 px-2 mr-2">Project</span> {data.projectTitle}</div>
        <div className=" border px-2 py-2 rounded-xs cursor-not-allowed"><span className="font-medium text-gray-900 rounded bg-neutral-200 py-1 px-2 mr-2">BHK Type</span> {data.bhk}</div> {/* col-span-2 */}
        <div className=" border px-2 py-2 rounded-xs cursor-not-allowed"><span className="font-medium text-gray-900 rounded bg-neutral-200 py-1 px-2 mr-2">Area</span> {data.area}</div>
        <div className=" border px-2 py-2 rounded-xs cursor-not-allowed"><span className="font-medium text-gray-900 rounded bg-neutral-200 py-1 px-2 mr-2">Floors</span> {data.floors}</div>
      </div>

      <h2 className="text-lg text-center text-gray-800 mt-6">Edit Project</h2>

      {/* Status Buttons */}
      <div className="flex justify-evenly">

      <div className="mt-2">
        <label className="block text-gray-800 font-medium mb-3 text-sm">Project Status</label>
        <div className="flex min-w-sm">
          {statusOptions.map((opt, index) => (
            <button
              key={opt}
              onClick={() => setStatus(opt)}
              className={`${index === 0? 'rounded-l-lg' : index === 2? 'rounded-r-lg' :  'rounded-0'} flex-1 py-1 px-2 text-sm cursor-pointer border transition-all uppercase font-medium 
              ${status === opt
                ? opt === "Success"
                  ? "bg-green-200 text-black border-green-500"
                  : opt === "Pending"
                  ? "bg-neutral-200 text-black border-neutral-500"
                  : "bg-amber-200 text-black border-amber-500"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      
      </div>
<div className="mt-2">
  <label className="block text-gray-800 font-medium mb-3 text-sm">Schedule Appointment</label>
  
<div className="relative max-w-sm">
  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">

  </div>
  <input datepicker="true" id="default-datepicker" type="date" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-1 px-2 text-sm w-full h-full" placeholder="Select Date" />
</div>

</div>

      </div>

      {/* Notes Section */}
      <div className="mt-8">
        <label className="block text-gray-800 font-medium mb-3 text-sm">Notes</label>
        <textarea
          rows="4"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add notes about this project..."
          className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
        />
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-end gap-x-6">
        <button
          onClick={() => alert(`Status: ${status}\nNotes: ${notes}`)}
          className="bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-1 rounded-lg font-medium shadow-md transition-all"
        >
          Save
        </button>

                <button
                onClick={() => setSelected(null)}
          className="border border-neutral-600 hover:bg-neutral-200 px-4 py-1 rounded-lg font-medium shadow-md transition-all"
        >
          Close
        </button>
      </div>
    </div>
    </div>
  );
}
