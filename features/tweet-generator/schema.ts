import { z } from "zod";

export const tweetFormSchema = z.object({
  displayName: z
    .string()
    .min(1, "Display name is required")
    .max(50, "Display name cannot exceed 50 characters"),
  username: z
    .string()
    .min(1, "Username is required")
    .max(30, "Username cannot exceed 30 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain alphanumeric characters and underscores (no @ or spaces)"
    ),
  tweetText: z
    .string()
    .min(1, "Tweet text is required")
    .max(280, "Tweet text cannot exceed 280 characters"),
  selectedLogo: z.enum(["x", "twitter"]).default("x"),
  showMetrics: z.boolean().default(true),
  likes: z.string().default("0"),
  comments: z.string().default("0"),
  retweets: z.string().default("0"),
  views: z.string().default("0"),
  date: z.string().default(""),
  hour: z.string().default("12"),
  minute: z.string().default("00"),
  meridiem: z.enum(["AM", "PM"]).default("AM"),
  backgroundType: z.enum(["solid", "preset", "custom"]).default("solid"),
  backgroundColor: z.string().default("#0F2356"),
  exportFormat: z.enum(["story", "square", "landscape"]).default("landscape"),
});

export type TweetFormValues = z.infer<typeof tweetFormSchema>;
