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
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1761670911~exp=1761674511~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=fbd92fb7796329faae39ce3579a48f1e273e0b7fae233bfd64cf46d572dc4374&r=dXMtZWFzdDE%3D"
        className="h-full w-full object-cover"
      ></video>
    </div>
  );
}

export default Video;
