import useEditDeleteBtn from "../hooks/useEditDeleteBtn";
import type { Job } from "../types/job";
import { useDraggable } from "@dnd-kit/core";
import { useNavigate } from "react-router-dom";



export default function JobCard({ job }: { job: Job }) {

const navigate = useNavigate();

const { 
      isOpen, setIsOpen, formData, setFormData,
      updateMutation, deleteMutation,
} = useEditDeleteBtn({ job })

const { attributes, listeners, setNodeRef, transform } = useDraggable({
  id: job.id,
});

const style = {
  transform: transform
    ? `translate(${transform.x}px, ${transform.y}px)`
    : undefined,
};



  return (
<div ref={setNodeRef} style={style}
        className="bg-gray-900 border border-gray-800 rounded-lg p-4 space-y-2 shadow-sm hover:shadow-md transition sm:p-4 md:p-5"
      >
  <span {...listeners} {...attributes} className="cursor-grab">
          ⠿ </span>
           <h2 className="font-semibold text-white">{job.title}</h2>
           <p className="text-sm text-gray-400">{job.company}</p>
           <p className="text-sm text-gray-500">{job.location}</p>
    

    <div className="flex flex-col sm:flex-row gap-2 pt-2">
    <button 
          className="text-xs px-2 py-1 bg-gray-800 rounded hover:bg-gray-700"
          onClick={(e) => {
                e.stopPropagation();
                setFormData(job)
                setIsOpen(true)
    }} >
              Edit
    </button>
    <button
        className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30"
        onClick={(e) => {
              e.stopPropagation()
              if (confirm("Are you sure?")) {
                deleteMutation.mutate(job.id);
              }
        }}
      >
        Delete
    </button>
    </div>

    <button
  onClick={(e) => {
    e.stopPropagation();
    navigate(`/jobs/${job.id}`);
  }}
  className="text-xs text-blue-400 hover:underline"
>
  View Full Details →
</button>
      {isOpen && (
          <div className="mt-3 p-4 bg-gray-950 border border-gray-800 rounded-lg space-y-3">
          <h2>Title : 
          <input
            className="w-full bg-gray-900 border border-gray-800 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          </h2>
          <h2>Company :
            <input
            className="w-full bg-gray-900 border border-gray-800 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <button
                    onClick={() =>
                      updateMutation.mutate({
                        id: job.id,
                        updates: formData,
                      })
                    }
                    className="px-2 py-1 bg-gray-800 rounded hover:bg-gray-700"
                  >
                    Save
                  </button>
                  
                  <button 
                          onClick={() => setIsOpen(false)}
                          className="px-2 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30"
                  >
                          Cancel</button>
          </div>
        </div>
      )}
      
</div>
  );
}


{/* 
  
  <div
  ref={setNodeRef}
  style={style}
  className="bg-gray-900 border border-gray-800 rounded-lg p-4 space-y-2 shadow-sm hover:shadow-md transition"
>
  <div {...listeners} {...attributes} className="cursor-grab">
    <h2 className="font-semibold text-white">{job.title}</h2>
    <p className="text-sm text-gray-400">{job.company}</p>
    <p className="text-sm text-gray-500">{job.location}</p>
  </div>

  <div className="flex gap-2 pt-2">
    <button className="text-xs px-2 py-1 bg-gray-800 rounded hover:bg-gray-700">
      Edit
    </button>
    <button className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30">
      Delete
    </button>
  </div>

  <button
    onClick={() => navigate(`/jobs/${job.id}`)}
    className="text-xs text-blue-400 hover:underline"
  >
    View Details →
  </button>
</div> 


<div ref={setNodeRef} style={style}
        className="bg-gray-900 border border-gray-800 rounded-lg p-4 space-y-2 shadow-sm hover:shadow-md transition"
      >
  <div {...listeners} {...attributes} className="cursor-grab">
          ⠿ 
           <h2 className="font-semibold text-white">{job.title}</h2>
           <p className="text-sm text-gray-400">{job.company}</p>
           <p className="text-sm text-gray-500">{job.location}</p>
    </div>

    <div className="flex gap-2 pt-2">
    <button 
          className="text-xs px-2 py-1 bg-gray-800 rounded hover:bg-gray-700"
          onClick={(e) => {
                e.stopPropagation();
                setFormData(job)
                setIsOpen(true)
    }} >
              Edit
    </button>
    <button
        className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30"
        onClick={(e) => {
              e.stopPropagation()
              if (confirm("Are you sure?")) {
                deleteMutation.mutate(job.id);
              }
        }}
      >
        Delete
    </button>
    </div>

    <button
            onClick={() => navigate(`/jobs/${job.id}`)}
            className="text-xs text-blue-400 hover:underline"
    >
             View Full Details →
    </button>
      {isOpen && (
        <div>
          <input
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <input
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />

          <button
            onClick={() =>
              updateMutation.mutate({
                id: job.id,
                updates: formData,
              })
            }
          >
            Save
          </button>

          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </div>
      )}
      
</div>
*/}