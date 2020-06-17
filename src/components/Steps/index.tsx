import React from 'react';
import Css from './Css';
import Html from './Html';
import Layout from './Layout';
import Setup from './Setup';
import Step from './Step';
import Resources from './Resources';

export default function Steps(): JSX.Element {
  return (
    <div>
      <Step stepTitle="SETUP" stepNo={1} children={<Setup />} />
      <Step stepTitle="HTML" stepNo={2} children={<Html />} />
      <Step stepTitle="CSS" stepNo={3} children={<Css />} />
      <Step stepTitle="LAYOUT" stepNo={4} children={<Layout />} />
      <Step stepTitle="RESOURCES" stepNo={""} children={<Resources />} />
    </div>
  )
}