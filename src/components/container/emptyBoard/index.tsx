import * as S from 'components/container/emptyBoard/styles';

interface Props {
  message: string;
}

const EmptyBoard = ({ message }: Props): JSX.Element => {
  return <S.StyledEmptyBoard>{message}</S.StyledEmptyBoard>;
};

export default EmptyBoard;
