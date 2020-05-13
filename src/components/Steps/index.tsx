import React from 'react';
import Step from './Step';
import Setup from './Setup';
import Html from './Html';

export default function Steps(): JSX.Element {
  return (
    <div>
      <Step stepTitle="SETUP" stepNo={1} children={<Setup />} />
      <Step stepTitle="HTML" stepNo={2} children={<Html />} />
    </div>
  )
}