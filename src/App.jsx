import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messageAtom,
  networkAtom,
  notificationAtom,
  todoAtom,
  todoFamily,
  totalpopupselector,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Mainapp />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={3} />
    </RecoilRoot>
  );
}
function Mainapp() {
  const networknotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notifcationCount = useRecoilValue(notificationAtom);
  const [messageCount, setmessageCount] = useRecoilState(messageAtom);
  const totalnotificationcount = useRecoilValue(totalpopupselector);
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

      <button>Avatar ({totalnotificationcount})</button>
    </>
  );
}

function Todo({ id }) {
  const todos = useRecoilValue(todoFamily(id));
  return (
    <>
      <h1> {todos.title}</h1>
    </>
  );
}
export default App;
