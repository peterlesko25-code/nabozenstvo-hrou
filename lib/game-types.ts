export type GameType = "memory";
export type ReviewStatus = "draft" | "reviewed";

export interface MemoryPair {
  id: string;
  concept: string;
  explanation: string;
  teachingNote?: string;
}

export interface BaseGameDefinition {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  type: GameType;
  topic: string;
  ageRange: { min: number; max: number };
  learningGoal: string;
  sources: string[];
  reviewStatus: ReviewStatus;
  estimatedMinutes: number;
}

export interface MemoryGameDefinition extends BaseGameDefinition {
  type: "memory";
  pairs: MemoryPair[];
}

export type GameDefinition = MemoryGameDefinition;
