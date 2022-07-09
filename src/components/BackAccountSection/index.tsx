import { useEffect, useRef, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Section from '../Section';
import {
  TextType3,
} from '../Texts';
import { CopyButton } from '../Buttons';

export default function BackAccountSection(): JSX.Element {
  const ref = useRef<HTMLElement>(null);

  const [resize, setResize] = useState<number>(1);

  const handleResize = (): void => setResize(ref.current!.clientWidth / 720);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', () => handleResize());
  }, []);

  return (
    <Section
      ref={ref}
      style={{
        padding: `0 ${resize * 90}px`,
      }}
    >
      <TextType3
        fontSize={`${resize * 40}px`}
        style={{
          textAlign: 'center',
          marginBottom: `${resize * 40}px`,
          letterSpacing: `${resize * -1}px`,
        }}
      >
        마음을 전하는 곳
      </TextType3>

      <Accordion style={{ marginBottom: `${resize * 20}px`, color: '#000', borderRadius: '20px' }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon style={{ fill: '#000', fontSize: `${resize * 20}px`, zoom: 2 }} />}
          style={{
            padding: `${resize * 20}px ${resize * 30}px`,
            borderRadius: '20px',
          }}
        >
          <TextType3
            fontSize={`${resize * 26}px`}
            fontWeight={300}
            style={{ flex: 1, textAlign: 'center' }}
          >
            <strong style={{ fontWeight: 400 }}>신랑측</strong>
            {' '}
            계좌번호
          </TextType3>
        </AccordionSummary>
        <AccordionDetails style={{ position: 'relative', padding: `${resize * 30}px ${resize * 30}px`, borderBottom: '1px solid #e9e9e9' }}>
          <TextType3
            fontSize={`${resize * 24}px`}
            fontWeight={300}
          >
            신한은행 00-00000-000
            <br />
            김철수
          </TextType3>
          <CopyButton
            type="button"
            fontSize={`${resize * 24}px`}
            padding={`${resize * 10}px ${resize * 20}px`}
            top={`${resize * 30}px`}
            right={`${resize * 30}px`}
          >
            복사
          </CopyButton>
        </AccordionDetails>
        <AccordionDetails style={{ position: 'relative', padding: `${resize * 30}px ${resize * 30}px`, borderBottom: '1px solid #e9e9e9' }}>
          <TextType3
            fontSize={`${resize * 24}px`}
            fontWeight={300}
          >
            신한은행 00-00000-000
            <br />
            김연한
          </TextType3>
          <CopyButton
            type="button"
            fontSize={`${resize * 24}px`}
            padding={`${resize * 10}px ${resize * 20}px`}
            top={`${resize * 30}px`}
            right={`${resize * 30}px`}
          >
            복사
          </CopyButton>
        </AccordionDetails>
        <AccordionDetails style={{ position: 'relative', padding: `${resize * 30}px ${resize * 30}px` }}>
          <TextType3
            fontSize={`${resize * 24}px`}
            fontWeight={300}
          >
            신한은행 00-00000-000
            <br />
            심태숙
          </TextType3>
          <CopyButton
            type="button"
            fontSize={`${resize * 24}px`}
            padding={`${resize * 10}px ${resize * 20}px`}
            top={`${resize * 30}px`}
            right={`${resize * 30}px`}
          >
            복사
          </CopyButton>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ color: '#000', borderRadius: '20px' }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon style={{ fill: '#000', fontSize: `${resize * 20}px`, zoom: 2 }} />}
          style={{
            padding: `${resize * 20}px ${resize * 30}px`,
            textAlign: 'center',
          }}
        >
          <TextType3
            fontSize={`${resize * 26}px`}
            fontWeight={300}
            style={{ flex: 1, textAlign: 'center' }}
          >
            <strong style={{ fontWeight: 400 }}>신부측</strong>
            {' '}
            계좌번호
          </TextType3>
        </AccordionSummary>
        <AccordionDetails style={{ position: 'relative', padding: `${resize * 30}px ${resize * 30}px`, borderBottom: '1px solid #e9e9e9' }}>
          <TextType3
            fontSize={`${resize * 24}px`}
            fontWeight={300}
          >
            신한은행 00-00000-000
            <br />
            양주혜
          </TextType3>
          <CopyButton
            type="button"
            fontSize={`${resize * 24}px`}
            padding={`${resize * 10}px ${resize * 20}px`}
            top={`${resize * 30}px`}
            right={`${resize * 30}px`}
          >
            복사
          </CopyButton>
        </AccordionDetails>
        <AccordionDetails style={{ position: 'relative', padding: `${resize * 30}px ${resize * 30}px`, borderBottom: '1px solid #e9e9e9' }}>
          <TextType3
            fontSize={`${resize * 24}px`}
            fontWeight={300}
          >
            신한은행 00-00000-000
            <br />
            양병록
          </TextType3>
          <CopyButton
            type="button"
            fontSize={`${resize * 24}px`}
            padding={`${resize * 10}px ${resize * 20}px`}
            top={`${resize * 30}px`}
            right={`${resize * 30}px`}
          >
            복사
          </CopyButton>
        </AccordionDetails>
        <AccordionDetails style={{ position: 'relative', padding: `${resize * 30}px ${resize * 30}px` }}>
          <TextType3
            fontSize={`${resize * 24}px`}
            fontWeight={300}
          >
            신한은행 00-00000-000
            <br />
            전영식
          </TextType3>
          <CopyButton
            type="button"
            fontSize={`${resize * 24}px`}
            padding={`${resize * 10}px ${resize * 20}px`}
            top={`${resize * 30}px`}
            right={`${resize * 30}px`}
          >
            복사
          </CopyButton>
        </AccordionDetails>
      </Accordion>
    </Section>
  );
}
