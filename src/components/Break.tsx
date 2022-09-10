import { InputForm } from "./input_form";
import { ENumber, ETextBox, ETextline, TopFlex } from "./styles";

export const Break = () => {
  return (
    <TopFlex>
      <InputForm />
      <ENumber>First breaks</ENumber>
      <ETextBox>
        <ETextline>Hi</ETextline>
      </ETextBox>
      <ENumber>Odd breaks</ENumber>
      <InputForm isRight />
    </TopFlex>
  );
};
