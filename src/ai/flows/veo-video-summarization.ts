'use server';

/**
 * @fileOverview Summarizes the best Veo videos submitted prior to the event.
 *
 * - veoVideoSummarization - A function that summarizes the best Veo videos.
 * - VeoVideoSummarizationInput - The input type for the veoVideoSummarization function.
 * - VeoVideoSummarizationOutput - The return type for the veoVideoSummarization function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VeoVideoSummarizationInputSchema = z.object({
  videoDescriptions: z
    .array(z.string())
    .describe('An array of descriptions for each of the Veo videos.'),
});
export type VeoVideoSummarizationInput = z.infer<typeof VeoVideoSummarizationInputSchema>;

const VeoVideoSummarizationOutputSchema = z.object({
  summary: z.string().describe('A summary of the best Veo videos.'),
});
export type VeoVideoSummarizationOutput = z.infer<typeof VeoVideoSummarizationOutputSchema>;

export async function veoVideoSummarization(input: VeoVideoSummarizationInput): Promise<VeoVideoSummarizationOutput> {
  return veoVideoSummarizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'veoVideoSummarizationPrompt',
  input: {schema: VeoVideoSummarizationInputSchema},
  output: {schema: VeoVideoSummarizationOutputSchema},
  prompt: `You are an expert at summarizing video content for developer conferences.\n\nYou will be given descriptions of multiple Veo videos. Your job is to create a concise summary of the key themes and insights from these videos that would be interesting to summit attendees. Focus on community insights and highlight key themes. The videos are all on the topic of what AI means to the developer's community.\n\nVideo Descriptions:\n{{#each videoDescriptions}}- {{{this}}}\n{{/each}}`,
});

const veoVideoSummarizationFlow = ai.defineFlow(
  {
    name: 'veoVideoSummarizationFlow',
    inputSchema: VeoVideoSummarizationInputSchema,
    outputSchema: VeoVideoSummarizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
