import { useEffect, useRef, useState } from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, Tooltip,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CopyToClipboard from 'react-copy-to-clipboard';

import Section from '../Section';
import {
  TextType3,
} from '../Texts';
import { CopyButton } from '../Buttons';
import Copyright from '../Copyright';

export default function BankAccountSection(): JSX.Element {
  const ref = useRef<HTMLElement>(null);

  const [resize, setResize] = useState<number>(1);
  const [tooltipOpen1, setTooltipOpen1] = useState<boolean>(false);
  const [tooltipOpen2, setTooltipOpen2] = useState<boolean>(false);
  const [tooltipOpen3, setTooltipOpen3] = useState<boolean>(false);
  const [tooltipOpen4, setTooltipOpen4] = useState<boolean>(false);

  const handleResize = (): void => setResize(ref.current!.clientWidth / 720);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', () => handleResize());
  }, []);

  return (
    <Section
      ref={ref}
      style={{
        padding: `${resize * 100}px ${resize * 90}px 0`,
        backgroundColor: '#f6f6f6',
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

      <Accordion
        style={{
          marginBottom: `${resize * 20}px`,
          color: '#000',
          borderRadius: '30px',
          boxShadow: 'none',
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon style={{ fill: '#000', fontSize: `${resize * 20}px`, zoom: 2 }} />}
          style={{
            padding: `${resize * 6}px ${resize * 30}px`,
            borderRadius: '30px',
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
            신한은행 110-352-575352
            <br />
            김철수
          </TextType3>
          <CopyToClipboard
            text="110352575352"
            onCopy={() => {
              setTooltipOpen1(true);

              setTimeout(() => setTooltipOpen1(false), 2000);
            }}
          >
            <Tooltip title="복사되었습니다." arrow open={tooltipOpen1}>
              <CopyButton
                type="button"
                fontSize={`${resize * 24}px`}
                padding={`${resize * 10}px ${resize * 20}px`}
                top={`${resize * 30}px`}
                right={`${resize * 30}px`}
              >
                복사
              </CopyButton>
            </Tooltip>
          </CopyToClipboard>
        </AccordionDetails>
        <AccordionDetails style={{ position: 'relative', padding: `${resize * 30}px ${resize * 30}px` }}>
          <TextType3
            fontSize={`${resize * 24}px`}
            fontWeight={300}
          >
            국민은행 804-01-0114-451
            <br />
            김연한
          </TextType3>
          <CopyToClipboard
            text="804010114451"
            onCopy={() => {
              setTooltipOpen2(true);

              setTimeout(() => setTooltipOpen2(false), 2000);
            }}
          >
            <Tooltip title="복사되었습니다." arrow open={tooltipOpen2}>
              <CopyButton
                type="button"
                fontSize={`${resize * 24}px`}
                padding={`${resize * 10}px ${resize * 20}px`}
                top={`${resize * 30}px`}
                right={`${resize * 30}px`}
              >
                복사
              </CopyButton>
            </Tooltip>
          </CopyToClipboard>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{
          color: '#000',
          borderRadius: '30px',
          boxShadow: 'none',
        }}
        sx={{
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon style={{ fill: '#000', fontSize: `${resize * 20}px`, zoom: 2 }} />}
          style={{
            padding: `${resize * 6}px ${resize * 30}px`,
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
            우리은행 1002-831-277797
            <br />
            양주혜
          </TextType3>
          <CopyToClipboard
            text="1002831277797"
            onCopy={() => {
              setTooltipOpen3(true);

              setTimeout(() => setTooltipOpen3(false), 2000);
            }}
          >
            <Tooltip title="복사되었습니다." arrow open={tooltipOpen3}>
              <CopyButton
                type="button"
                fontSize={`${resize * 24}px`}
                padding={`${resize * 10}px ${resize * 20}px`}
                top={`${resize * 30}px`}
                right={`${resize * 30}px`}
              >
                복사
              </CopyButton>
            </Tooltip>
          </CopyToClipboard>
        </AccordionDetails>
        <AccordionDetails style={{ position: 'relative', padding: `${resize * 30}px ${resize * 30}px` }}>
          <TextType3
            fontSize={`${resize * 24}px`}
            fontWeight={300}
          >
            신한은행 110-492-910415
            <br />
            양병록
          </TextType3>
          <CopyToClipboard
            text="110492910415"
            onCopy={() => {
              setTooltipOpen4(true);

              setTimeout(() => setTooltipOpen4(false), 2000);
            }}
          >
            <Tooltip title="복사되었습니다." arrow open={tooltipOpen4}>
              <CopyButton
                type="button"
                fontSize={`${resize * 24}px`}
                padding={`${resize * 10}px ${resize * 20}px`}
                top={`${resize * 30}px`}
                right={`${resize * 30}px`}
              >
                복사
              </CopyButton>
            </Tooltip>
          </CopyToClipboard>
        </AccordionDetails>
      </Accordion>
      <Copyright />
    </Section>
  );
}
