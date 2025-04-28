"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAdminDetailsStore } from "@/store/adminDetailsStore";
import { toast } from "sonner";

export default function EditAboutForm({ onClose }: { onClose: () => void }) {
  const {
    aboutText,
    setDetails,
    heroHeading,
    heroName,
    taglineLine1,
    taglineLine2,
    highlights,
    email,
  } = useAdminDetailsStore();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      aboutText: "",
    },
  });

  useEffect(() => {
    if (aboutText) {
      reset({ aboutText });
    }
  }, [aboutText, reset]);

  const onSubmit = async (data: { aboutText: string }) => {
    const ref = doc(db, "details", "heroSection"); // ✅ Correct collection/document

    await updateDoc(ref, {
      aboutText: data.aboutText, // ✅ Direct field
    });

    setDetails({
      heroHeading,
      heroName,
      taglineLine1,
      taglineLine2,
      highlights,
      aboutText: data.aboutText,
      email,
    });

    toast.success("About updated!", {
      description: "Your portfolio has been refreshed.",
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        About Me
      </label>
      <textarea
        {...register("aboutText")}
        rows={6}
        className="border rounded-md p-2 text-sm"
        placeholder="Write something about yourself..."
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm"
      >
        Update About
      </button>
    </form>
  );
}
