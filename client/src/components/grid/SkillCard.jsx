import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const SkillCard = () => {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '20px' }}>
      <Tippy placement="left" arrow={false} content="Basic Tooltip">
        <button>Hover</button>
      </Tippy>
    </div>
  );
};

export default SkillCard;

/*
import React, {forwardRef} from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ColoredTooltip = () => {
  return (
    <span style={{ color: "yellow" }}>
      Colored component
    </span>
  );
};

const CustomChild = forwardRef((props, ref) => {
  return(
    <div ref={ref}>
      <div>First line</div>
      <div>Second line</div>
    </div>
  )
})

export default function Tooltip() {
  return (
    <div>
      <div style={{ paddingTop: '100px', paddingBottom: "20px" }}>
        <Tippy placement='left' arrow={false} content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy placement='top-end' delay={1000} content={<span style={{ color: "orange" }}>Colored</span>}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy placement='right' content={<ColoredTooltip /> }>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColoredTooltip /> }>
          <CustomChild />
        </Tippy>
      </div>
    </div>
  );
}


*/
