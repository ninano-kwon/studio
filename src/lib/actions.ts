
'use server';

import { z } from 'zod';
import { generatePersonalizedSchedule } from '@/ai/flows/personalized-schedule-assistant';
import { veoVideoSummarization } from '@/ai/flows/veo-video-summarization';

// Schema for personalized schedule form
const scheduleSchema = z.object({
  interests: z.string().min(10, { message: 'Please describe your interests in at least 10 characters.' }),
  goals: z.string().min(10, { message: 'Please describe your goals in at least 10 characters.' }),
});

export type ScheduleState = {
  message?: string | null;
  errors?: {
    interests?: string[];
    goals?: string[];
  };
  schedule?: string | null;
};

export async function createPersonalizedSchedule(
  prevState: ScheduleState,
  formData: FormData
): Promise<ScheduleState> {
  const validatedFields = scheduleSchema.safeParse({
    interests: formData.get('interests'),
    goals: formData.get('goals'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
    };
  }
  
  try {
    const { interests, goals } = validatedFields.data;
    const result = await generatePersonalizedSchedule({ interests, goals });
    return { message: 'Success', schedule: result.schedule };
  } catch (error) {
    return { message: 'An error occurred while generating the schedule. Please try again.' };
  }
}

export async function getVeoSummaryAction() {
    // Mock data for video descriptions
    const videoDescriptions = [
        "Our community sees AI as a co-pilot for creativity, enabling us to build more complex applications faster and explore new frontiers in user experience. We've been using Gemini to prototype new features and the results are amazing.",
        "For us, AI is about accessibility. It's breaking down barriers for new developers and enabling non-coders to bring their ideas to life. We are exploring how AI can help in teaching programming concepts more effectively.",
        "AI is a powerful tool for data analysis and finding insights. Our community is focused on using AI for social good, analyzing public data to address local challenges and drive positive change.",
        "We believe the future of AI in our community is collaborative. It's not just about individual developers but about how we can build smarter, more connected systems together, leveraging shared models and collective intelligence."
    ];

    try {
        const result = await veoVideoSummarization({ videoDescriptions });
        return { summary: result.summary, error: null };
    } catch (e) {
        console.error(e);
        return { summary: null, error: "Failed to generate summary." };
    }
}
