import {
  Box, Button, Divider, Modal,
} from '@mui/material';
import { TextType3 } from '../Texts';

import callIcon from './call.png';
import talkIcon from './talk.png';

interface Props {
  open: boolean;
  onClose: () => void;
  resize: number;
}

export default function WeddingDayModal({ open, onClose, resize }: Props) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        style={{
          overflow: 'hidden',
          width: `${380 * resize}px`,
          paddingTop: `${resize * 30}px`,
          backgroundColor: 'white',
          borderRadius: '40px',
        }}
      >
        <TextType3
          fontSize={`${resize * 30}px`}
          style={{
            display: 'block',
            marginBottom: `${resize * 30}px`,
            fontWeight: 300,
            textAlign: 'center',
          }}
        >
          <strong style={{ fontWeight: 400 }}>신랑측</strong>
          {' '}
          혼주
        </TextType3>

        <TextType3
          fontSize={`${resize * 30}px`}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            marginBottom: `${resize * 30}px`,
            padding: `0 ${resize * 30}px`,
            fontWeight: 300,
          }}
        >
          부
          {' '}
          <strong style={{ fontWeight: 400, flex: 1, marginLeft: `${4 * resize}px` }}>김연한</strong>

          <a href="tel:01032134553">
            <img src={callIcon} alt="전화하기" style={{ width: `${resize * 34}px`, marginRight: `${resize * 30}px` }} />
          </a>
          <a href="sms:01032134553">
            <img src={talkIcon} alt="문자하기" style={{ width: `${resize * 44}px` }} />
          </a>
        </TextType3>

        <TextType3
          fontSize={`${resize * 30}px`}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            marginBottom: `${resize * 30}px`,
            padding: `0 ${resize * 30}px`,
            fontWeight: 300,
          }}
        >
          모
          {' '}
          <strong style={{ fontWeight: 400, flex: 1, marginLeft: `${4 * resize}px` }}>심태숙</strong>

          <a href="tel:01041774552">
            <img src={callIcon} alt="전화하기" style={{ width: `${resize * 34}px`, marginRight: `${resize * 30}px` }} />
          </a>
          <a href="sms:01041774552">
            <img src={talkIcon} alt="문자하기" style={{ width: `${resize * 44}px` }} />
          </a>
        </TextType3>

        <Divider style={{ marginBottom: `${resize * 30}px` }} />

        <TextType3
          fontSize={`${resize * 30}px`}
          style={{
            display: 'block',
            marginBottom: `${resize * 30}px`,
            fontWeight: 300,
            textAlign: 'center',
          }}
        >
          <strong style={{ fontWeight: 400 }}>신부측</strong>
          {' '}
          혼주
        </TextType3>

        <TextType3
          fontSize={`${resize * 30}px`}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            marginBottom: `${resize * 30}px`,
            padding: `0 ${resize * 30}px`,
            fontWeight: 300,
          }}
        >
          부
          {' '}
          <strong style={{ fontWeight: 400, flex: 1, marginLeft: `${4 * resize}px` }}>양병록</strong>

          <a href="tel:01037160294">
            <img src={callIcon} alt="전화하기" style={{ width: `${resize * 34}px`, marginRight: `${resize * 30}px` }} />
          </a>
          <a href="sms:01037160294">
            <img src={talkIcon} alt="문자하기" style={{ width: `${resize * 44}px` }} />
          </a>
        </TextType3>

        <TextType3
          fontSize={`${resize * 30}px`}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            marginBottom: `${resize * 30}px`,
            padding: `0 ${resize * 30}px`,
            fontWeight: 300,
          }}
        >
          모
          {' '}
          <strong style={{ fontWeight: 400, flex: 1, marginLeft: `${4 * resize}px` }}>전영식</strong>

          <a href="tel:01045000294">
            <img src={callIcon} alt="전화하기" style={{ width: `${resize * 34}px`, marginRight: `${resize * 30}px` }} />
          </a>
          <a href="sms:01045000294">
            <img src={talkIcon} alt="문자하기" style={{ width: `${resize * 44}px` }} />
          </a>
        </TextType3>

        <Button
          onClick={onClose}
          style={{
            width: '100%',
            height: `${resize * 70}px`,
            color: '#FFF',
            fontFamily: 'Noto Sans KR',
            fontSize: `${resize * 24}px`,
            fontWeight: 300,
            backgroundColor: '#000',
            borderRadius: 0,
            boxShadow: 'none',
          }}
        >
          닫기
        </Button>
      </Box>
    </Modal>
  );
}
