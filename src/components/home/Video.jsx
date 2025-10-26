import React from "react";

function Video() {
  return (
    <div className="h-full w-full">
      <video
        autoPlay
        preload="metadata"
        playsInline
        
        loop
        muted
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1761485554~exp=1761489154~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=1f88f59e440dcd252d413faca1b00329f95572cce87e54eb9ba79791d9beedef&r=dXMtZWFzdDE%3D"
        className="h-full w-full object-cover"
      ></video>
    </div>
  );
}

export default Video;
