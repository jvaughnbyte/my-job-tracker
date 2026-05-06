import { useState } from "react"
import { supabase } from "../lib/supabase";
import toast from "react-hot-toast";


export default function useAddJobForm() {
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [status, setStatus] = useState('saved');
  const [notes, setNotes] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();

  setLoading(true);

  const toastId = toast.loading("Adding job...");

  try {
    const { data: userData } = await supabase.auth.getUser();
    const user = userData.user;

    const { error } = await supabase
      .from("jobs")
      .insert([
        {
          user_id: user?.id,
          company,
          title,
          location,
          salary: Number(salary),
          status: status || "saved",
          notes,
          link,
        },
      ]);

    if (error) throw error;

    // ✅ SUCCESS
    toast.success("Job added!", { id: toastId });

    setCompany("");
    setTitle("");
    setLocation("");
    setSalary("");
    setStatus("");
    setNotes("");
    setLink("");

  } catch (error: any) {
    // ❌ ERROR
    toast.error(error.message, { id: toastId });
  } finally {
    setLoading(false);
  }
  
};

return {
    company, setCompany,
    title, setTitle,
    location, setLocation,
    salary, setSalary,
    status, setStatus,
    notes, setNotes,
    link, setLink,
    loading, 
    handleSubmit,
}}

