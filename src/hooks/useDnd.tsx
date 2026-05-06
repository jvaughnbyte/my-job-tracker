import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateJob } from "../lib/jobs";

export default function useDnd(){

const queryClient = useQueryClient();

const updateMutation = useMutation({
  mutationFn: ({ id, updates }: any) => updateJob(id, updates),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["jobs"] });
  },
});

const handleDragEnd = (event: any) => {
  const { active, over } = event;

  if (!over) return;

  const jobId = active.id;
  const newStatus = over.id;


  updateMutation.mutate({
    id: jobId,
    updates: { status: newStatus },
  });
};

    return { handleDragEnd, queryClient, updateMutation }
}