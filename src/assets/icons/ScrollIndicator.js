import React from 'react';

export default function ScrollIndicator(props) {
  return (
    <div>
      <svg width={32} height={60} className="scroll-indicator" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g id="scroll-indicator" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <g id="Desktop-HD-Copy-17" transform="translate(-707 -423)" stroke="#FFF">
            <g id="scroll-indicator" transform="translate(708 423)">
              <g id="indicator-3" transform="translate(0 20)">
                <path id="Shape" d="M30 0L15 15 0 0" />
              </g>
              <g id="indicator-2" transform="translate(3 8)">
                <path id="Shape" d="M23.25.75L12 12 .75.75" />
              </g>
              <g id="indicator-1" transform="translate(7)">
                <path id="Shape" d="M15.5.5L8 8 .5.5" />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <style dangerouslySetInnerHTML={{__html: "#indicator-1,#indicator-2{-webkit-transform-origin:center}.scroll-indicator{display:block;margin:0 auto}#indicator-1{-webkit-animation:pleaseScroll1 2s .3s forwards infinite;animation:pleaseScroll1 2s .3s forwards infinite;transform-origin:center}#indicator-2{-webkit-animation:pleaseScroll2 2s .2s forwards infinite;animation:pleaseScroll2 2s .2s forwards infinite;transform-origin:center}#indicator-3{-webkit-animation:pleaseScroll3 2s forwards infinite;animation:pleaseScroll3 2s forwards infinite;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes pleaseScroll1{0%{opacity:0}50%{opacity:1;-webkit-transform:translate(7px,10px);transform:translate(7px,10px)}100%{opacity:0;-webkit-transform:translate(7px,10px);transform:translate(7px,10px)}}@keyframes pleaseScroll1{0%{opacity:0}50%{opacity:1;-webkit-transform:translate(7px,10px);transform:translate(7px,10px)}100%{opacity:0;-webkit-transform:translate(7px,10px);transform:translate(7px,10px)}}@-webkit-keyframes pleaseScroll2{0%{opacity:0}50%{opacity:1;-webkit-transform:translate(3px,18px);transform:translate(3px,18px)}100%{opacity:0;-webkit-transform:translate(3px,18px);transform:translate(3px,18px)}}@keyframes pleaseScroll2{0%{opacity:0}50%{opacity:1;-webkit-transform:translate(3px,18px);transform:translate(3px,18px)}100%{opacity:0;-webkit-transform:translate(3px,18px);transform:translate(3px,18px)}}@-webkit-keyframes pleaseScroll3{0%{opacity:0}50%{opacity:1;-webkit-transform:translate(0,30px);transform:translate(0,30px)}100%{opacity:0;-webkit-transform:translate(0,30px);transform:translate(0,30px)}}@keyframes pleaseScroll3{0%{opacity:0}50%{opacity:1;-webkit-transform:translate(0,30px);transform:translate(0,30px)}100%{opacity:0;-webkit-transform:translate(0,30px);transform:translate(0,30px)}}" }} />
    </div>
  );
}
