
///hardcoded


"use client";

import { useState } from "react";
import { useSendNotification } from "../api/use-send-notification";
import { sendNotificationSchema } from "../schemas/send-notification";
import { z } from "zod";

const TAGS = [
  { id: "65d7c5f1a0e37c4201a8b9f3", label: "Tag 1" },
  { id: "65d7c5f1a0e37c4201a8b9f4", label: "Tag 2" },
];

const USERS = [
  { id: "user1", label: "User 1" },
  { id: "user2", label: "User 2" },
];

const defaultValues: z.infer<typeof sendNotificationSchema> = {
  content: "",
  read: false,
  recipients: [USERS[0].id], // ["user1"]
  tags: [TAGS[0].id],       // ["65d7c5f1a0e37c4201a8b9f3"]
};

export default function AddNotificationModal() {
  const [form, setForm] = useState(defaultValues);
  const sendNotification = useSendNotification();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (name: "recipients" | "tags", value: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((v) => v !== value)
        : [...prev[name], value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const parsed = sendNotificationSchema.parse(form);
      sendNotification.mutate(parsed);
    } catch (err) {
      console.error("Validation failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="content"
        placeholder="Notification content"
        value={form.content}
        onChange={handleChange}
        required
      />

      {/* Recipients selection */}
      <div>
        {USERS.map(({ id, label }) => (
          <label key={id} style={{ marginRight: 10 }}>
            <input
              type="checkbox"
              checked={form.recipients.includes(id)}
              onChange={() => handleArrayChange("recipients", id)}
            />
            {label}
          </label>
        ))}
      </div>

      {/* Tags selection */}
      <div>
        {TAGS.map(({ id, label }) => (
          <label key={id} style={{ marginRight: 10 }}>
            <input
              type="checkbox"
              checked={form.tags.includes(id)}
              onChange={() => handleArrayChange("tags", id)}
            />
            {label}
          </label>
        ))}
      </div>

      <button type="submit" disabled={sendNotification.isPending}>
        Send Notification
      </button>
    </form>
  );
}
