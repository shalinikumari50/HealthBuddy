import React from "react";
import { SpeechProvider, useSpeechContext } from "@speechly/react-client";
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
