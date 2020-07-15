import React from 'react';
import Css from './Css';
import JavaScript from './JavaScript';
import Html from './Html';
import Layout from './Layout';
import Setup from './Setup';
import Step from './Step';
import Resources from './Resources';
import WebAnimations from './WebAnimations';

export default function Steps(): JSX.Element {
  return (
    <div>
      <Step stepTitle="SETUP" stepNo={1} children={<Setup />} slides="https://docs.google.com/presentation/d/1TH3Rsi6g9uQX7qLbOmB1Xae7a3caNLaDvNQO3BUWzhc/edit?usp=sharing" recording="https://www.youtube.com/watch?v=QOWq0u-EcGA" />
      <Step stepTitle="HTML" stepNo={2} children={<Html />} slides="https://docs.google.com/presentation/d/1TH3Rsi6g9uQX7qLbOmB1Xae7a3caNLaDvNQO3BUWzhc/edit?usp=sharing" recording="https://www.youtube.com/watch?v=QOWq0u-EcGA" />
      <Step stepTitle="CSS" stepNo={3} children={<Css />} slides="https://docs.google.com/presentation/d/1N04q8ZpTkHdcDEwnix9GuJCjpuX89AKzH8jl9iqAUAs/edit?usp=sharing" recording="https://www.youtube.com/watch?v=gFET00BIF90" />
      <Step stepTitle="LAYOUT" stepNo={4} children={<Layout />} slides="https://docs.google.com/presentation/d/1cjxW0Iyo8_deFpROjE882z3JW31E5nriyRfQyn-9qdQ/edit?usp=sharing" recording="https://www.youtube.com/watch?v=OqTx2PBlDiE" />
      <Step stepTitle="JAVASCRIPT" stepNo={5} children={<JavaScript />} slides="https://docs.google.com/presentation/d/1PQb6YxLnJ2xayiy3EOFjqiM-kXLql5DYIVZWSomLrqQ/edit?usp=sharing" recording="https://www.youtube.com/watch?time_continue=5&v=rZrv4QgidI4" />
      <Step stepTitle="WEB ANIMATIONS" stepNo={6} children={<WebAnimations />} slides="https://docs.google.com/presentation/d/1POlZRT8eZeRLKg9MNiRCA0dN9kGjDDVlm4Eg6YPfa3Y/edit?usp=sharing" />
      <Step stepTitle="RESOURCES" stepNo={""} children={<Resources />} />
    </div>
  )
}