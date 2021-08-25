import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="f9ef965a-143e-4b64-80ce-8a4196495b1e"
        userName="Vartika"
        userSecret="1234"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()
        }
      />
    </div>
  );
}

export default App;
