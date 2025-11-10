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
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1762795218~exp=1762798818~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=3201a45167c2e0b095b9f5dcd1f1ea794dd423f70fe3f780d58a3d481169fd3b&r=dXMtZWFzdDE%3D"
        className="h-full w-full object-cover"
      ></video>
    </div>
  );
}

export default Video;
