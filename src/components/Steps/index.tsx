import React from 'react';
import Step from './Step';
import Setup from './Setup';
import Html from './Html';
import Resources from './Resources';
import Css from './Css';

export default function Steps(): JSX.Element {
  return (
    <div>
      <Step stepTitle="SETUP" stepNo={1} children={<Setup />} />
      <Step stepTitle="HTML" stepNo={2} children={<Html />} />
      <Step stepTitle="CSS" stepNo={3} children={<Css />} />
      <Step stepTitle="RESOURCES" stepNo={""} children={<Resources />} />
    </div>
  )
}