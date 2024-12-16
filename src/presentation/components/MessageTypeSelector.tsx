import React from "react";
import { MessageType } from "@/domain/models/MessageType";

interface MessageTypeSelectorProps {
  value: MessageType;
  onChange: (value: MessageType) => void;
}

export const MessageTypeSelector: React.FC<MessageTypeSelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="w-72 mx-auto text-center">
      <label htmlFor="messageType" className="block text-sm font-semibold mb-2">
        Type de message
      </label>
      <select
        id="messageType"
        value={value}
        onChange={(e) => onChange(e.target.value as MessageType)}
        className="w-full h-10 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <option value={MessageType.LINKEDIN_MESSAGE_SENT}>
          LinkedIn Message
        </option>
        <option value={MessageType.LINKEDIN_INMAIL_SENT}>
          LinkedIn InMail
        </option>
        <option value={MessageType.EMAIL_SENT}>Email</option>
      </select>
    </div>
  );
};
