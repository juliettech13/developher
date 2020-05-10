import React from 'react';
import Step from './Step';

function content(): JSX.Element {
  return (
    <div>
      <p>Hello</p>
      <h4>Helloooo there</h4>
    </div>
  )
}

export default function Steps(): JSX.Element {
  return (
    <div>
      <Step stepTitle="SETUP" stepNo={1} children={content()} />
    </div>
  )
}