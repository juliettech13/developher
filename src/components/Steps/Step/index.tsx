import React from 'react';
import './index.scss'

interface Props {
  children: JSX.Element;
  stepTitle: string;
  stepNo: number | "";
  slides?: string;
  recording?: string;
}

export default function Step(props: Props): JSX.Element {
  const { children, stepTitle, stepNo, slides, recording } = props;

  return (
    <>
      <div className="step">
        <div className="stepTitle">
          <p className="stepTitleText">{`${stepNo} - ${stepTitle}`}</p>
          <div className="inline">
            {slides && (
              <div className="linkUnderline">
                <a href={slides} className="subTitle">Slides</a>
              </div>
            )}
            {recording && (
              <div className="linkUnderline marginLeft">
                <a href={recording} className="subTitle">Recording</a>
              </div>
            )}
          </div>
        </div>
        <div className="listPadding">{children}</div>
      </div>
      <br/>
    </>
  )
}
