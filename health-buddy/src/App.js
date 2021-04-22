import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { SpeechProvider, useSpeechContext } from "@speechly/react-client";
import ImgMediaCard from "./components/card.js";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  BigTranscript,
  BigTranscriptContainer,
  ErrorPanel,
} from "@speechly/react-ui";

function App() {
  return (
    <>
      {/* <ImgMediaCard></ImgMediaCard> */}
      <h1 className="App">Health Buddy</h1>
      <SpeechProvider
        appId="198a66b5-e1a4-42f9-9e50-63a03108b2f0"
        // appId="fea7b368-584a-49fc-96e3-62cba009fbbc"
        language="en-US"
      >
        <BigTranscriptContainer>
          <BigTranscript />
        </BigTranscriptContainer>

        <PushToTalkButtonContainer>
          <PushToTalkButton captureKey=" " />
          <ErrorPanel />
        </PushToTalkButtonContainer>
      </SpeechProvider>
      <h4 className="bottom-right">Made with ❤️ and Speechly</h4>
    </>
  );
}

export default App;
function SpeechlyApp() {
  const { segment } = useSpeechContext();
  return (
    <div>
      {segment ? (
        <div className="segment">
          {segment.words.map((w) => w.value).join(" ")}
        </div>
      ) : null}
    </div>
  );
}
