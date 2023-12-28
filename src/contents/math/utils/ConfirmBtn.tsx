import styled from '@emotion/styled';

import { handleColor } from './handleColor';

interface Props {
  type: boolean;
  day: number;
}
const ConfirmBtn = (props: Props) => {
  const { type, day } = props;
  const color = handleColor('title', day);
  return (
    <ButtonWrappr>
      {type ? (
        <ConfirmBox color={color}>제출하기</ConfirmBox>
      ) : (
        <RetryButton color={color}>다시풀기</RetryButton>
      )}
    </ButtonWrappr>
  );
};

const ButtonWrappr = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  & > button {
    border-radius: 0.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13.125rem;
    height: 3.125rem;
    font-size: 1.875rem;
    line-height: 100%;
  }
`;
const ConfirmBox = styled.button<{ color: string }>`
  background-color: ${props => props.color};
  color: #fff;
  font-weight: 500;
  border: none;
`;
const RetryButton = styled.button<{ color: string }>`
  border: 4px solid ${props => props.color};
  color: ${props => props.color};
  font-weight: 700;
`;

export default ConfirmBtn;
