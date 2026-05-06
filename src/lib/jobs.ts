import { supabase } from "./supabase";

export const getOneJob = async (id: string) => {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const getJobs = async () => {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
};

export const updateJob = async (id, updates) => {
  const { data, error } = await supabase
    .from("jobs")
    .update(updates)
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);

  return data[0];
};

export const deleteJob = async (id) => {
  const { error } = await supabase
    .from("jobs")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);

  return id;
};