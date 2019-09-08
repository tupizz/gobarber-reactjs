import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;
export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 120px);
  top: calc(100% + 25px);
  background: rgba(0, 0, 0, 0.5);
  padding: 15px 5px;
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(0, 0, 0, 0.5);
  }
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.5;
  }

  button {
    background: none;
    border: 0;

    font-size: 12px;
    color: ${lighten(0.1, '#7159c1')};

    padding: 0 5px;
    margin: 0 5px;

    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
      }
    `}
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 250px;
  padding: 5px 15px;
`;
