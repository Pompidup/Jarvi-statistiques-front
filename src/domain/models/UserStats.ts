import { MessageType } from "./MessageType";

export interface UserStats {
  period: string;
  totalMessages: number;
  repliedMessages: number;
  responseRate: number;
}

export interface UserStatsFilter {
  userId: string;
  messageType: MessageType;
  periodType: "week" | "month";
  startDate: Date;
  endDate: Date;
}
