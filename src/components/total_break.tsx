import { WrapItem } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
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

export const TotalBreak = () => {
  // getter
  const totalLeft = useRecoilValue(totalBreaksLeftState);
  const totalRight = useRecoilValue(totalBreaksRightState);
  // setter
  const setLeft = useSetRecoilState(totalBreaksLeftState);
  const setRight = useSetRecoilState(totalBreaksRightState);

  const incrementLeft = () => {
    setLeft(totalLeft + 1);
  };
  const decrementLeft = () => {
    setLeft(totalLeft - 1);
  };
  const incrementRight = () => {
    setRight(totalRight + 1);
  };
  const decrementRight = () => {
    setRight(totalRight - 1);
  };
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
      <ENumber></ENumber>
      <ENumber>{totalLeft}</ENumber>
      <ETextBox>
        <ETextline>Total Break</ETextline>
      </ETextBox>
      <ENumber>{totalRight}</ENumber>
      <ENumber></ENumber>
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
