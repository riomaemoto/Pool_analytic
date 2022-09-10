import { WrapItem } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { scoreLeftState, scoreRightState } from "../globalState";
import { EFlex, ENumber, ETextBox, ETextline, SizedButton } from "./styles";

export const GameScore = () => {
  // getter
  const scoreLeft = useRecoilValue(scoreLeftState);
  const scoreRight = useRecoilValue(scoreRightState);
  // setter
  const setScoreLeft = useSetRecoilState(scoreLeftState);
  const setScoreRight = useSetRecoilState(scoreRightState);

  const incrementScoreLeft = () => {
    setScoreLeft(scoreLeft + 1);
  };
  const decrementScoreLeft = () => {
    setScoreLeft(scoreLeft - 1);
  };
  const incrementScoreRight = () => {
    setScoreRight(scoreRight + 1);
  };
  const decrementScoreRight = () => {
    setScoreRight(scoreRight - 1);
  };

  return (
    <EFlex>
      <WrapItem>
        <SizedButton onClick={decrementScoreLeft} colorScheme="red">
          -1
        </SizedButton>
      </WrapItem>
      <WrapItem>
        <SizedButton onClick={incrementScoreLeft} colorScheme="blue">
          +1
        </SizedButton>
      </WrapItem>
      <ENumber></ENumber>
      <ENumber>{scoreLeft}</ENumber>
      <ETextBox>
        <ETextline>Game Score</ETextline>
      </ETextBox>
      <ENumber>{scoreRight}</ENumber>
      <ENumber></ENumber>
      <WrapItem>
        <SizedButton onClick={incrementScoreRight} colorScheme="blue">
          +1
        </SizedButton>
      </WrapItem>
      <WrapItem>
        <SizedButton onClick={decrementScoreRight} colorScheme="red">
          -1
        </SizedButton>
      </WrapItem>
    </EFlex>
  );
};
