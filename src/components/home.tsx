import { Center, WrapItem } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

export const Home = () => {
  const [scoreLeft, setScoreLeft] = useState(0);
  const [scoreRight, setScoreRight] = useState(0);
  const [TotalBreaksLeft, setTotalBreaksLeft] = useState(0);
  const [TotalBreaksRight, setTotalBreaksRight] = useState(0);
  const [DryBreakCountLeft, setDryBreakCountLeft] = useState(0);
  const [DryBreakCountRight, setDryBreakCountRight] = useState(0);
  const [ScratchLeft, setScratchLeft] = useState(0);
  const [ScratchRight, setScratchRight] = useState(0);
  const [MadeonBreakLeft, setMadeonBreakLeft] = useState(0);
  const [MadeonBreakRight, setMadeonBreakRight] = useState(0);

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

  const incrementTotalBreaksLeft = () => {
    setTotalBreaksLeft(TotalBreaksLeft + 1);
  };
  const decrementTotalBreaksLeft = () => {
    setTotalBreaksLeft(TotalBreaksLeft - 1);
  };
  const incrementTotalBreaksRight = () => {
    setTotalBreaksRight(TotalBreaksRight + 1);
  };
  const decrementTotalBreaksRight = () => {
    setTotalBreaksRight(TotalBreaksRight - 1);
  };
  const incrementDryBreakCountLeft = () => {
    setDryBreakCountLeft(DryBreakCountLeft + 1);
  };
  const decrementDryBreakCountLeft = () => {
    setDryBreakCountLeft(DryBreakCountLeft - 1);
  };
  const incrementDryBreakCountRight = () => {
    setDryBreakCountRight(DryBreakCountRight + 1);
  };
  const decrementDryBreakCountRight = () => {
    setDryBreakCountRight(DryBreakCountRight - 1);
  };

  const persentageDryBreakCountRight = Math.round(
    (DryBreakCountRight / TotalBreaksRight) * 100
  );

  // ----------------------------Scratch on break------------------
  const incrementScratchLeft = () => {
    setScratchLeft(ScratchLeft + 1);
  };

  const decrementScratchLeft = () => {
    setScratchLeft(ScratchLeft - 1);
  };

  const incrementScratchRight = () => {
    setScratchRight(ScratchRight + 1);
  };

  const decrementScratchRight = () => {
    setScratchRight(ScratchRight - 1);
  };
  // ----------------------------Made on break --------------------------
  const incrementMadeonBreakLeft = () => {
    setMadeonBreakLeft(MadeonBreakLeft + 1);
  };
  const decrementMadeonBreakLeft = () => {
    setMadeonBreakLeft(MadeonBreakLeft - 1);
  };
  const incrementMadeonBreakRight = () => {
    setMadeonBreakRight(MadeonBreakRight + 1);
  };
  const decrementMadeonBreakRight = () => {
    setMadeonBreakRight(MadeonBreakRight - 1);
  };

  const vvv = css`
    background-color: rgba(161, 214, 20, 0.2);
    overflow: hidden;
  `;
  const EContainer = styled.div``;
  const button = css`
    width: 80px;
  `;
  const ETextBox = styled.div`
    background-color: rgba(11, 434, 332);
    text-align: center;
    display: flex;
    border: 0.5px solid;
  `;
  const ETextline = styled.div`
    text-align: center;
    font-weight: 600;
    margin: 6px;
    width: 250px;
  `;
  const ENumber = styled.div`
    text-align: center;
    width: 80px;
    border: 0.5px solid;
  `;
  const EFlex = styled.div`
    display: flex;
    margin: 1px;
  `;
  const EFlex2 = styled.div`
    display: flex;
    margin: 1px;
    margin-left: 161px;
  `;

  return (
    <>
      <Center css={vvv} h="100vh">
        <EContainer>
          <EFlex2>
            <ENumber></ENumber>
            <ENumber>First breaks</ENumber>
            <ETextBox>
              <ETextline>Break</ETextline>
            </ETextBox>
            <ENumber>Odd breaks</ENumber>
            <ENumber></ENumber>
          </EFlex2>

          <EFlex>
            <WrapItem>
              <Button
                onClick={decrementScoreLeft}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={incrementScoreLeft}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>{scoreLeft}</ENumber>
            <ETextBox>
              <ETextline>Game Score</ETextline>
            </ETextBox>
            <ENumber>{scoreRight}</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <Button
                onClick={incrementScoreRight}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={decrementScoreRight}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button
                onClick={decrementTotalBreaksLeft}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={incrementTotalBreaksLeft}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <ENumber>%</ENumber>
            <ENumber>{TotalBreaksLeft}</ENumber>
            <ETextBox>
              <ETextline>Total Break</ETextline>
            </ETextBox>
            <ENumber>{TotalBreaksRight}</ENumber>
            <ENumber>{persentageDryBreakCountRight}%</ENumber>
            <WrapItem>
              <Button
                onClick={incrementTotalBreaksRight}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={decrementTotalBreaksRight}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button
                onClick={decrementDryBreakCountLeft}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={incrementDryBreakCountLeft}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <ENumber>%</ENumber>
            <ENumber>{DryBreakCountLeft}</ENumber>
            <ETextBox>
              <ETextline>Dry breaks</ETextline>
            </ETextBox>
            <ENumber>{DryBreakCountRight}</ENumber>
            <ENumber>{persentageDryBreakCountRight}%</ENumber>
            <WrapItem>
              <Button
                onClick={incrementDryBreakCountRight}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={decrementDryBreakCountRight}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button
                onClick={decrementScratchLeft}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={incrementScratchLeft}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <ENumber>%</ENumber>
            <ENumber>{ScratchLeft}</ENumber>
            <ETextBox>
              <ETextline>Scratches on break</ETextline>
            </ETextBox>
            <ENumber>{ScratchRight}</ENumber>
            <ENumber>%</ENumber>
            <WrapItem>
              <Button
                onClick={incrementScratchRight}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={decrementScratchRight}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button
                onClick={decrementMadeonBreakLeft}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
              <WrapItem>
                <Button
                  onClick={incrementMadeonBreakLeft}
                  css={button}
                  colorScheme="blue"
                >
                  +1
                </Button>
              </WrapItem>
            </WrapItem>
            <ENumber>%</ENumber>
            <ENumber>{MadeonBreakLeft}</ENumber>
            <ETextBox>
              <ETextline>ball made on break</ETextline>
            </ETextBox>
            <ENumber>{MadeonBreakRight}</ENumber>
            <ENumber>%</ENumber>
            <WrapItem>
              <Button
                onClick={incrementMadeonBreakRight}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={decrementMadeonBreakRight}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <ENumber>%</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>shot after the break</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>%</ENumber>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <br />
          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <ENumber>%</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>break and run</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>%</ENumber>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <ENumber>%</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Consecutive break and runs</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>%</ENumber>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <br />
          <EFlex2>
            <ENumber></ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Longest game winning streak</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber></ENumber>
          </EFlex2>
          <br />
          <EFlex2>
            <ENumber></ENumber>
            <ENumber></ENumber>
            <ETextBox>
              <ETextline>In game stats</ETextline>
            </ETextBox>
            <ENumber></ENumber>
            <ENumber></ENumber>
          </EFlex2>

          <EFlex2>
            <ENumber>Balls left</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>230</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>Balls left</ENumber>
          </EFlex2>

          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>100</ENumber>
            <ETextBox>
              <ETextline>Balls pocketed</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <br />
          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Balls Missed</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Unforced errors</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Safety errors</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Kicking Errors</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <Button css={button} colorScheme="blue">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex2>
            <ENumber>%</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>ACCU Stat Performance Rate</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>%</ENumber>
          </EFlex2>
        </EContainer>
      </Center>
    </>
  );
};
