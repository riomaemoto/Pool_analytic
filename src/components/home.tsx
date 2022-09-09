import { Center, WrapItem } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { Input } from "@chakra-ui/react";

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
  const [ShotafterBreakLeft, setShotafterBreakLeft] = useState(0);
  const [ShotafterBreakRight, setShotafterBreakRight] = useState(0);
  const [BreakandRunLeft, setBreakandRunLeft] = useState(0);
  const [BreakandRunRight, setBreakandRunRight] = useState(0);
  const [ConsecutiveBRLeft, setConsecutiveBRLeft] = useState(0);
  const [ConsecutiveBRRight, setConsecutiveBRRight] = useState(0);
  const [LongestGameWinLeft, setLongestGameWinLeft] = useState(0);
  const [LongestGameWinRight, setLongestGameWinRight] = useState(0);
  const [BallspocketedLeft, setBallspocketedLeft] = useState(0);
  const [BallspocketedRight, setBallspocketedRight] = useState(0);
  const [MissedLeft, setMissedLeft] = useState(0);
  const [MissedRight, setMissedRight] = useState(0);
  const [UnforcedLeft, setUnforcedLeft] = useState(0);
  const [UnforcedRight, setUnforcedRight] = useState(0);
  const [SafetyLeft, setSafetyLeft] = useState(0);
  const [SafetyRight, setSafetyRight] = useState(0);
  const [KickingLeft, setKickingLeft] = useState(0);
  const [KickingRight, setKickingRight] = useState(0);

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
  // ----------------TotalBreaks----------------------------
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

  // ----------------DryBreakCount----------------------------
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

  const persentageDryBreakCountLeft = Math.round(
    (DryBreakCountLeft / TotalBreaksLeft) * 100
  );

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

  const persentageScratchLeft = Math.round(
    (ScratchLeft / TotalBreaksLeft) * 100
  );
  const persentageScratchRight = Math.round(
    (ScratchRight / TotalBreaksRight) * 100
  );
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

  const persentageMadeonBreakLeft = Math.round(
    (MadeonBreakLeft / TotalBreaksLeft) * 100
  );
  const persentageMadeonBreakRight = Math.round(
    (MadeonBreakRight / TotalBreaksRight) * 100
  );
  // ----------------------------Shot after Break --------------------------
  const incrementShotafterBreakLeft = () => {
    setShotafterBreakLeft(ShotafterBreakLeft + 1);
  };
  const decrementShotafterBreakLeft = () => {
    setShotafterBreakLeft(ShotafterBreakLeft - 1);
  };
  const incrementShotafterBreakRight = () => {
    setShotafterBreakRight(ShotafterBreakRight + 1);
  };
  const decrementShotafterBreakRight = () => {
    setShotafterBreakRight(ShotafterBreakRight - 1);
  };

  const persentageShotafterBreakLeft = Math.round(
    (ShotafterBreakLeft / TotalBreaksLeft) * 100
  );
  const persentageShotafterBreakRight = Math.round(
    (ShotafterBreakRight / TotalBreaksRight) * 100
  );
  // ----------------------------Break and run --------------------------
  const incrementBreakandRunLeft = () => {
    setBreakandRunLeft(BreakandRunLeft + 1);
  };
  const decrementBreakandRunLeft = () => {
    setBreakandRunLeft(BreakandRunLeft - 1);
  };
  const incrementBreakandRunRight = () => {
    setBreakandRunRight(BreakandRunRight + 1);
  };
  const decrementBreakandRunRight = () => {
    setBreakandRunRight(BreakandRunRight - 1);
  };

  const persentageBreakandRunLeft = Math.round(
    (BreakandRunLeft / TotalBreaksLeft) * 100
  );
  const persentageBreakandRunRight = Math.round(
    (BreakandRunRight / TotalBreaksRight) * 100
  );
  // ----------------------------consecutive Break and run --------------------------

  const incrementConsecutiveBRLeft = () => {
    setConsecutiveBRLeft(ConsecutiveBRLeft + 1);
  };
  const decrementConsecutiveBRLeft = () => {
    setConsecutiveBRLeft(ConsecutiveBRLeft - 1);
  };
  const incrementConsecutiveBRRight = () => {
    setConsecutiveBRRight(ConsecutiveBRRight + 1);
  };
  const decrementConsecutiveBRRight = () => {
    setConsecutiveBRRight(ConsecutiveBRRight - 1);
  };

  // ---------------------------- Longest Game Winning strike ---------------------------------

  const incrementLongestGameWinLeft = () => {
    setLongestGameWinLeft(LongestGameWinLeft + 1);
  };
  const decrementLongestGameWinLeft = () => {
    setLongestGameWinLeft(LongestGameWinLeft - 1);
  };
  const incrementLongestGameWinRight = () => {
    setLongestGameWinRight(LongestGameWinRight + 1);
  };
  const decrementLongestGameWinRight = () => {
    setLongestGameWinRight(LongestGameWinRight - 1);
  };

  // ---------------------------- TotalScore -----------------------------

  const aaa = scoreLeft * 9;
  const bbb = scoreRight * 9;

  const TotalScore = aaa + bbb;

  // ---------------------------- BallsLeft ---------------------------------

  const BallsLeft = TotalScore - BallspocketedLeft - BallspocketedRight;

  // ---------------------------- Balls pocketed ----------------------------------

  const incrementBallspocketedLeft = () => {
    setBallspocketedLeft(BallspocketedLeft + 1);
  };
  const decrementBallspocketedLeft = () => {
    setBallspocketedLeft(BallspocketedLeft - 1);
  };
  const incrementBallspocketedRight = () => {
    setBallspocketedRight(BallspocketedRight + 1);
  };
  const decrementBallspocketedRight = () => {
    setBallspocketedRight(BallspocketedRight - 1);
  };

  // ---------------------------- Balls Missed -----------------------------

  const incrementMissedLeft = () => {
    setMissedLeft(MissedLeft + 1);
  };
  const decrementMissedLeft = () => {
    setMissedLeft(MissedLeft - 1);
  };
  const incrementMissedRight = () => {
    setMissedRight(MissedRight + 1);
  };
  const decrementMissedRight = () => {
    setMissedRight(MissedRight - 1);
  };

  // ---------------------------- Unforced Missed -----------------------------

  const incrementUnforcedLeft = () => {
    setUnforcedLeft(UnforcedLeft + 1);
  };
  const decrementUnforcedLeft = () => {
    setUnforcedLeft(UnforcedLeft - 1);
  };
  const incrementUnforcedRight = () => {
    setUnforcedRight(UnforcedRight + 1);
  };
  const decrementUnforcedRight = () => {
    setUnforcedRight(UnforcedRight - 1);
  };

  // ---------------------------- Safety error -----------------------------

  const incrementSafetyLeft = () => {
    setSafetyLeft(SafetyLeft + 1);
  };
  const decrementSafetyLeft = () => {
    setSafetyLeft(SafetyLeft - 1);
  };
  const incrementSafetyRight = () => {
    setSafetyRight(SafetyRight + 1);
  };
  const decrementSafetyRight = () => {
    setSafetyRight(SafetyRight - 1);
  };

  // ---------------------------- Kicking error -----------------------------
  const incrementKickingLeft = () => {
    setKickingLeft(KickingLeft + 1);
  };
  const decrementKickingLeft = () => {
    setKickingLeft(KickingLeft - 1);
  };
  const incrementKickingRight = () => {
    setKickingRight(KickingRight + 1);
  };
  const decrementKickingRight = () => {
    setKickingRight(KickingRight - 1);
  };

  // ---------------------------- ACCUStatLeft -----------------------------

  const ACCUStatLeft =
    (MissedLeft + UnforcedLeft + SafetyLeft + KickingLeft) / BallspocketedLeft -
    1;

  const PersentageACCUStatLeft = Math.round(ACCUStatLeft * 1000) / 1000;

  // ---------------------------- ACCUStatRight -----------------------------

  const ACCUStatRight =
    (MissedRight + UnforcedRight + SafetyRight + KickingRight) /
      BallspocketedRight -
    1;

  const PersentageACCUStatRight = Math.round(ACCUStatRight * 1000) / 1000;

  // ---------------------------- CSS -----------------------------

  const vvv = css`
    background-color: rgba(211, 274, 80, 0.2);
    @media (max-width: 500px) {
      background-color: white;
    }
  `;

  const EContainer = styled.div`
    padding: 40px;
    @media (max-width: 500px) {
      margin-left: 130px;
      padding: 60px 30px 40px 50px;
    }
  `;

  const button = css`
    width: 80px;
    @media (max-width: 500px) {
      width: 40px;
    }
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
    width: 240px;
    @media (max-width: 500px) {
      margin: 3px;
      width: 120px;
    }
  `;
  const ENumber = styled.div`
    text-align: center;
    width: 80px;
    border: 0.5px solid;
    box-sizing: border-box;
    padding: 5px;
    @media (max-width: 500px) {
      padding: 2.5px;
      width: 80px;
    }
  `;
  const EFlex = styled.div`
    display: flex;
    margin: 1px;
  `;
  const EFlex2 = styled.div`
    display: flex;
    margin: 1px;
    margin-left: 161px;
    @media (max-width: 500px) {
      margin-left: 81px;
    }
  `;
  const TopFlex = styled.div`
    display: flex;
    margin: 1px;
  `;

  return (
    <>
      <Center css={vvv} h="100%">
        <EContainer>
          <TopFlex>
            <Input variant="filled" placeholder="Filled" />
            <ENumber>First breaks</ENumber>
            <ETextBox>
              <ETextline>Break</ETextline>
            </ETextBox>
            <ENumber>Odd breaks</ENumber>
            <Input variant="filled" placeholder="Filled" />
          </TopFlex>

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
            <ENumber></ENumber>
            <ENumber>{TotalBreaksLeft}</ENumber>
            <ETextBox>
              <ETextline>Total Break</ETextline>
            </ETextBox>
            <ENumber>{TotalBreaksRight}</ENumber>
            <ENumber></ENumber>
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
            <ENumber>{persentageDryBreakCountLeft}%</ENumber>
            <ENumber>{DryBreakCountLeft}</ENumber>
            <ETextBox>
              <ETextline>Dry Breaks</ETextline>
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
            <ENumber>{persentageScratchLeft}%</ENumber>
            <ENumber>{ScratchLeft}</ENumber>
            <ETextBox>
              <ETextline>Scratches on Break</ETextline>
            </ETextBox>
            <ENumber>{ScratchRight}</ENumber>
            <ENumber>{persentageScratchRight}%</ENumber>
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
            <ENumber>{persentageMadeonBreakLeft}%</ENumber>
            <ENumber>{MadeonBreakLeft}</ENumber>
            <ETextBox>
              <ETextline>Ball Made on Break</ETextline>
            </ETextBox>
            <ENumber>{MadeonBreakRight}</ENumber>
            <ENumber>{persentageMadeonBreakRight}%</ENumber>
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
              <Button
                onClick={decrementShotafterBreakLeft}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={incrementShotafterBreakLeft}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <ENumber>{persentageShotafterBreakLeft}%</ENumber>
            <ENumber>{ShotafterBreakLeft}</ENumber>
            <ETextBox>
              <ETextline>Shot After The Break</ETextline>
            </ETextBox>
            <ENumber>{ShotafterBreakRight}</ENumber>
            <ENumber>{persentageShotafterBreakRight}%</ENumber>
            <WrapItem>
              <Button
                onClick={incrementShotafterBreakRight}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={decrementShotafterBreakRight}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <br />
          <EFlex>
            <WrapItem>
              <Button
                onClick={decrementBreakandRunLeft}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={incrementBreakandRunLeft}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <ENumber>{persentageBreakandRunLeft}%</ENumber>
            <ENumber>{BreakandRunLeft}</ENumber>
            <ETextBox>
              <ETextline>Break and Run</ETextline>
            </ETextBox>
            <ENumber>{BreakandRunRight}</ENumber>
            <ENumber>{persentageBreakandRunRight}%</ENumber>
            <WrapItem>
              <Button
                onClick={incrementBreakandRunRight}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={decrementBreakandRunRight}
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
                onClick={decrementConsecutiveBRLeft}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={incrementConsecutiveBRLeft}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>{ConsecutiveBRLeft}</ENumber>
            <ETextBox>
              <ETextline>Consecutive Break and Runs</ETextline>
            </ETextBox>
            <ENumber>{ConsecutiveBRRight}</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <Button
                onClick={incrementConsecutiveBRRight}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={decrementConsecutiveBRRight}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <br />
          <EFlex>
            <WrapItem>
              <Button
                onClick={decrementLongestGameWinLeft}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={incrementLongestGameWinLeft}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>{LongestGameWinLeft}</ENumber>
            <ETextBox>
              <ETextline>Longest Game Winning Streak</ETextline>
            </ETextBox>
            <ENumber>{LongestGameWinRight}</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <Button
                onClick={incrementLongestGameWinRight}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={decrementLongestGameWinRight}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
          </EFlex>
          <br />
          <EFlex2>
            <ENumber></ENumber>
            <ENumber></ENumber>
            <ETextBox>
              <ETextline>In Game Stats</ETextline>
            </ETextBox>
            <ENumber></ENumber>
            <ENumber></ENumber>
          </EFlex2>

          <EFlex2>
            <ENumber></ENumber>
            <ENumber>{BallsLeft}</ENumber>
            <ETextBox>
              <ETextline>{TotalScore}</ETextline>
            </ETextBox>
            <ENumber>{BallsLeft}</ENumber>
            <ENumber></ENumber>
          </EFlex2>

          <EFlex>
            <WrapItem>
              <Button
                onClick={decrementBallspocketedLeft}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={incrementBallspocketedLeft}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>{BallspocketedLeft}</ENumber>
            <ETextBox>
              <ETextline>Balls Pocketed</ETextline>
            </ETextBox>
            <ENumber>{BallspocketedRight}</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <Button
                onClick={incrementBallspocketedRight}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={decrementBallspocketedRight}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <br />
          <EFlex>
            <WrapItem>
              <Button
                onClick={decrementMissedLeft}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={incrementMissedLeft}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>{MissedLeft}</ENumber>
            <ETextBox>
              <ETextline>Balls Missed</ETextline>
            </ETextBox>
            <ENumber>{MissedRight}</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <Button
                onClick={incrementMissedRight}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={decrementMissedRight}
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
                onClick={decrementUnforcedLeft}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={incrementUnforcedLeft}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>{UnforcedLeft}</ENumber>
            <ETextBox>
              <ETextline>Unforced Errors</ETextline>
            </ETextBox>
            <ENumber>{UnforcedRight}</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <Button
                onClick={incrementUnforcedRight}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={decrementUnforcedRight}
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
                onClick={decrementSafetyLeft}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={incrementSafetyLeft}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>{SafetyLeft}</ENumber>
            <ETextBox>
              <ETextline>Safety Errors</ETextline>
            </ETextBox>
            <ENumber>{SafetyRight}</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <Button
                onClick={incrementSafetyRight}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={decrementSafetyRight}
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
                onClick={decrementKickingLeft}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={incrementKickingLeft}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>{KickingLeft}</ENumber>
            <ETextBox>
              <ETextline>Kicking Errors</ETextline>
            </ETextBox>
            <ENumber>{KickingRight}</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <Button
                onClick={incrementKickingRight}
                css={button}
                colorScheme="blue"
              >
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={decrementKickingRight}
                css={button}
                colorScheme="red"
              >
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex2>
            <ENumber></ENumber>
            <ENumber>{PersentageACCUStatLeft}</ENumber>
            <ETextBox>
              <ETextline>ACCU-STAT Performance Rate</ETextline>
            </ETextBox>
            <ENumber>{PersentageACCUStatRight}</ENumber>
            <ENumber></ENumber>
          </EFlex2>
        </EContainer>
      </Center>
    </>
  );
};
