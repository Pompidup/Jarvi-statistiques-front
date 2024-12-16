import React from "react";
import { UserStatsDashboard } from "./presentation/components/UserStatsDashboard";

const App: React.FC = () => {
  const userId = import.meta.env.VITE_USER_ID;

  return (
    <div className="container mx-auto">
      <UserStatsDashboard userId={userId} />
    </div>
  );
};

export default App;
