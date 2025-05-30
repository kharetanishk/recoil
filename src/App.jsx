import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, messageAtom, networkAtom, notificationAtom } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Mainapp />
    </RecoilRoot>
  );
}
function Mainapp() {
  const networknotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notifcationCount = useRecoilValue(notificationAtom);
  const [messageCount, setmessageCount] = useRecoilState(messageAtom);
  return (
    <>
      <button>
        My network (
        {networknotificationCount > 100 ? "99+" : networknotificationCount})
      </button>
      <button>Jobs ({jobsCount > 50 ? "50+" : jobsCount})</button>
      <button>
        Notifications ({notifcationCount > 100 ? "100+" : notifcationCount}){" "}
      </button>
      <button>Messages ({messageCount > 100 ? "100+" : messageCount})</button>
      <button
        onClick={() => {
          setmessageCount((c) => c + 1);
        }}
      >
        Increment the message
      </button>
    </>
  );
}
export default App;
