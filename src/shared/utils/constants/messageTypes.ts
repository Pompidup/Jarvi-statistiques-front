import { MessageType } from "@/domain/models/MessageType";

export const MESSAGE_TYPE_LABELS: Record<MessageType, string> = {
  [MessageType.LINKEDIN_MESSAGE_SENT]: "LinkedIn Message envoyé",
  [MessageType.LINKEDIN_INMAIL_SENT]: "LinkedIn InMail envoyé",
  [MessageType.EMAIL_SENT]: "Email envoyé",
};
