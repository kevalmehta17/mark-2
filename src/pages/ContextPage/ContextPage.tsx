import UserProvider from "../../ContextStore/UserProvider.tsx";
import ContextPageContent from "./ContextPageContainer"

const ContextPage = () => {
  return (
    <UserProvider>
      <ContextPageContent />
    </UserProvider>
  );
};

export default ContextPage;