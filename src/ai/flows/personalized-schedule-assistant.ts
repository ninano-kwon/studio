'use server';

/**
 * @fileOverview Personalized schedule assistant flow.
 *
 * - generatePersonalizedSchedule - A function that generates a personalized summit schedule based on user interests and goals.
 * - PersonalizedScheduleInput - The input type for the generatePersonalizedSchedule function.
 * - PersonalizedScheduleOutput - The return type for the generatePersonalizedSchedule function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedScheduleInputSchema = z.object({
  interests: z
    .string()
    .describe('A description of the users interests related to developer topics, AI and community.'),
  goals: z
    .string()
    .describe('The users goals for attending the summit, such as networking, learning specific technologies, etc.'),
});
export type PersonalizedScheduleInput = z.infer<typeof PersonalizedScheduleInputSchema>;

const PersonalizedScheduleOutputSchema = z.object({
  schedule: z.string().describe('A personalized schedule of summit sessions and networking opportunities.'),
});
export type PersonalizedScheduleOutput = z.infer<typeof PersonalizedScheduleOutputSchema>;

export async function generatePersonalizedSchedule(
  input: PersonalizedScheduleInput
): Promise<PersonalizedScheduleOutput> {
  return personalizedScheduleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedSchedulePrompt',
  input: {schema: PersonalizedScheduleInputSchema},
  output: {schema: PersonalizedScheduleOutputSchema},
  prompt: `You are an AI assistant that generates personalized schedules for the 2025 Korea Developer Community Summit.

  Consider the following schedule:

  Day 1: 9월 20일 (토)
  12:00-13:00 웰컴 & 점심 식사
  13:00-13:30 키노트: Growing Together
  13:30-15:00 세션 & 핸즈온
  15:00-17:30 팀 빌딩 & 아이스브레이킹
  17:30- 저녁 식사 및 네트워킹

  Day 2: 9월 21일 (일)
  09:00-10:00 Office Hour with Alessandro
  10:00-13:00 미니 해커톤
  13:00-14:00 점심 식사
  14:00-15:00 라이트닝 토크
  15:00-16:00 시상 및 마무리

  Given the user's interests and goals, create a personalized schedule for the summit.

  Interests: {{{interests}}}
  Goals: {{{goals}}}

  Schedule: `,
});

const personalizedScheduleFlow = ai.defineFlow(
  {
    name: 'personalizedScheduleFlow',
    inputSchema: PersonalizedScheduleInputSchema,
    outputSchema: PersonalizedScheduleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
