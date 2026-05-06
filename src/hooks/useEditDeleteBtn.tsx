import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteJob } from "../lib/jobs";
import { updateJob } from "../lib/jobs";
import type { Job } from "../types/job";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function useEditDeleteBtn({ job }: { job: Job }){
      const queryClient = useQueryClient();

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(job);
  useEffect(() => {
  setFormData(job);
}, [job]);

  const updateMutation = useMutation({
  mutationFn: ({ id, updates }: { id: string; updates: Partial<Job> }) =>
    updateJob(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      setIsOpen(false);
      toast.success("Job Updated!")
    },
    onError: (error: any) => {
  toast.error(error.message);
},
  });

  const deleteMutation = useMutation({
    mutationFn: deleteJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      toast.success("Job Deleted!");
    },
    onError: (error: any) => {
  toast.error(error.message);
},
  });

return {
    isOpen, setIsOpen,
formData, setFormData,
updateMutation, deleteMutation,
}}