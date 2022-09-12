import { WrapItem } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  dryBreakCountLeftState,
  dryBreakCountRightState,
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

export const DryBreaks = () => {
  // getter
  const left = useRecoilValue(dryBreakCountLeftState);
  const right = useRecoilValue(dryBreakCountRightState);
  const totalLeft = useRecoilValue(totalBreaksLeftState);
  const totalRight = useRecoilValue(totalBreaksRightState);
  // setter
  const setLeft = useSetRecoilState(dryBreakCountLeftState);
  const setRight = useSetRecoilState(dryBreakCountRightState);

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
    <EFlex>
      <WrapItem>
        <SizedButton onClick={decrementLeft} colorScheme="red">
          -1
        </SizedButton>
      </WrapItem>
      <WrapItem>
        <SizedButton onClick={incrementLeft} colorScheme="blue">
          +1
        </SizedButton>
      </WrapItem>
      <ENumber>{PercentageLeft || 0}%</ENumber>
      <ENumber>{left}</ENumber>
      <ETextBox>
        <ETextline>Dry Breaks</ETextline>
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
  );
};
