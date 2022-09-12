import { WrapItem } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  BallMadeOnBreakLeftState,
  BallMadeOnBreakRightState,
  totalBreaksLeftState,
  totalBreaksRightState,
} from "../global/globalState";
import {
  EFlex,
  ENumber,
  ETextBox,
  ETextline,
  SizedButton,
} from "../common/styles";

export const BallMadeOnBreak = () => {
  const left = useRecoilValue(BallMadeOnBreakLeftState);
  const right = useRecoilValue(BallMadeOnBreakRightState);

  const totalLeft = useRecoilValue(totalBreaksLeftState);
  const totalRight = useRecoilValue(totalBreaksRightState);

  const setLeft = useSetRecoilState(BallMadeOnBreakLeftState);
  const setRight = useSetRecoilState(BallMadeOnBreakRightState);

  const incrementLeft = () => {
    setLeft(left + 1);
  };
  const decrementLeft = () => {
    setLeft(left - 1);
  };
  const incrementRight = () => {
    setRight(right + 1);
  };
  const decrementRight = () => {
    setRight(right - 1);
  };

  const PercentageLeft = Math.round((left / totalLeft) * 100);

  const PercentageRight = Math.round((right / totalRight) * 100);

  return (
    <>
      <EFlex>
        <WrapItem>
          <SizedButton onClick={decrementLeft} colorScheme="red">
            -1
          </SizedButton>
          <WrapItem>
            <SizedButton onClick={incrementLeft} colorScheme="blue">
              +1
            </SizedButton>
          </WrapItem>
        </WrapItem>
        <ENumber>{PercentageLeft || 0}%</ENumber>
        <ENumber>{left}</ENumber>
        <ETextBox>
          <ETextline>Ball Made on Break</ETextline>
        </ETextBox>
        <ENumber>{right}</ENumber>
        <ENumber>{PercentageRight || 0}%</ENumber>
        <WrapItem>
          <SizedButton onClick={incrementRight} colorScheme="blue">
            +1
          </SizedButton>
        </WrapItem>
        <WrapItem>
          <SizedButton onClick={decrementRight} colorScheme="red">
            -1
          </SizedButton>
        </WrapItem>
      </EFlex>
    </>
  );
};
