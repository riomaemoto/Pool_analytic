import { WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import { Break } from "./Break";
import { GameScore } from "./game_score";
import { TotalBreak } from "./total_break";
import {
  ECenter,
  EContainer,
  EFlex,
  EFlex3,
  EFlexBottom,
  ENumber,
  ETextBox,
  ETextline,
  SizedButton,
} from "./styles";
import { totalBreaksLeftState, totalBreaksRightState } from "../globalState";
import { useRecoilValue } from "recoil";

export const Home = () => {
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

  const TotalBreaksLeft = useRecoilValue(totalBreaksLeftState);
  const TotalBreaksRight = useRecoilValue(totalBreaksRightState);

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

  // const aaa = scoreLeft * 9;
  // const bbb = scoreRight * 9;

  // const TotalScore = aaa + bbb;

  // ---------------------------- BallsLeft ---------------------------------

  // const BallsLeft = TotalScore - BallspocketedLeft - BallspocketedRight;

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

  return (
    <>
      <ECenter>
        <EContainer>
          <Break />
          <GameScore />
          <TotalBreak />

          <EFlex>
            <WrapItem>
              <SizedButton onClick={decrementScratchLeft} colorScheme="red">
                -1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton onClick={incrementScratchLeft} colorScheme="blue">
                +1
              </SizedButton>
            </WrapItem>
            <ENumber>{persentageScratchLeft || 0}%</ENumber>
            <ENumber>{ScratchLeft}</ENumber>
            <ETextBox>
              <ETextline>Scratches on Break</ETextline>
            </ETextBox>
            <ENumber>{ScratchRight}</ENumber>
            <ENumber>{persentageScratchRight || 0}%</ENumber>
            <WrapItem>
              <SizedButton onClick={incrementScratchRight} colorScheme="blue">
                +1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton onClick={decrementScratchRight} colorScheme="red">
                -1
              </SizedButton>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <SizedButton onClick={decrementMadeonBreakLeft} colorScheme="red">
                -1
              </SizedButton>
              <WrapItem>
                <SizedButton
                  onClick={incrementMadeonBreakLeft}
                  colorScheme="blue"
                >
                  +1
                </SizedButton>
              </WrapItem>
            </WrapItem>
            <ENumber>{persentageMadeonBreakLeft || 0}%</ENumber>
            <ENumber>{MadeonBreakLeft}</ENumber>
            <ETextBox>
              <ETextline>Ball Made on Break</ETextline>
            </ETextBox>
            <ENumber>{MadeonBreakRight}</ENumber>
            <ENumber>{persentageMadeonBreakRight || 0}%</ENumber>
            <WrapItem>
              <SizedButton
                onClick={incrementMadeonBreakRight}
                colorScheme="blue"
              >
                +1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton
                onClick={decrementMadeonBreakRight}
                colorScheme="red"
              >
                -1
              </SizedButton>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <SizedButton
                onClick={decrementShotafterBreakLeft}
                colorScheme="red"
              >
                -1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton
                onClick={incrementShotafterBreakLeft}
                colorScheme="blue"
              >
                +1
              </SizedButton>
            </WrapItem>
            <ENumber>{persentageShotafterBreakLeft || 0}%</ENumber>
            <ENumber>{ShotafterBreakLeft}</ENumber>
            <ETextBox>
              <ETextline>Shot After The Break</ETextline>
            </ETextBox>
            <ENumber>{ShotafterBreakRight}</ENumber>
            <ENumber>{persentageShotafterBreakRight || 0}%</ENumber>
            <WrapItem>
              <SizedButton
                onClick={incrementShotafterBreakRight}
                colorScheme="blue"
              >
                +1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton
                onClick={decrementShotafterBreakRight}
                colorScheme="red"
              >
                -1
              </SizedButton>
            </WrapItem>
          </EFlex>

          <br />
          <EFlex>
            <WrapItem>
              <SizedButton onClick={decrementBreakandRunLeft} colorScheme="red">
                -1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton
                onClick={incrementBreakandRunLeft}
                colorScheme="blue"
              >
                +1
              </SizedButton>
            </WrapItem>
            <ENumber>{persentageBreakandRunLeft || 0}%</ENumber>
            <ENumber>{BreakandRunLeft}</ENumber>
            <ETextBox>
              <ETextline>Break and Run</ETextline>
            </ETextBox>
            <ENumber>{BreakandRunRight}</ENumber>
            <ENumber>{persentageBreakandRunRight || 0}%</ENumber>
            <WrapItem>
              <SizedButton
                onClick={incrementBreakandRunRight}
                colorScheme="blue"
              >
                +1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton
                onClick={decrementBreakandRunRight}
                colorScheme="red"
              >
                -1
              </SizedButton>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <SizedButton
                onClick={decrementConsecutiveBRLeft}
                colorScheme="red"
              >
                -1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton
                onClick={incrementConsecutiveBRLeft}
                colorScheme="blue"
              >
                +1
              </SizedButton>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>{ConsecutiveBRLeft}</ENumber>
            <ETextBox>
              <ETextline>Consecutive Break and Runs</ETextline>
            </ETextBox>
            <ENumber>{ConsecutiveBRRight}</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <SizedButton
                onClick={incrementConsecutiveBRRight}
                colorScheme="blue"
              >
                +1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton
                onClick={decrementConsecutiveBRRight}
                colorScheme="red"
              >
                -1
              </SizedButton>
            </WrapItem>
          </EFlex>

          <br />
          <EFlex>
            <WrapItem>
              <SizedButton
                onClick={decrementLongestGameWinLeft}
                colorScheme="red"
              >
                -1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton
                onClick={incrementLongestGameWinLeft}
                colorScheme="blue"
              >
                +1
              </SizedButton>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>{LongestGameWinLeft}</ENumber>
            <ETextBox>
              <ETextline>Longest Game Winning Streak</ETextline>
            </ETextBox>
            <ENumber>{LongestGameWinRight}</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <SizedButton
                onClick={incrementLongestGameWinRight}
                colorScheme="blue"
              >
                +1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton
                onClick={decrementLongestGameWinRight}
                colorScheme="red"
              >
                -1
              </SizedButton>
            </WrapItem>
          </EFlex>
          <br />
          <EFlex3>
            <ENumber></ENumber>
            <ENumber></ENumber>
            <ETextBox>
              <ETextline>In Game Stats</ETextline>
            </ETextBox>
            <ENumber></ENumber>
            <ENumber></ENumber>
          </EFlex3>

          {/* <EFlex2>
            <ENumber></ENumber>
            <ENumber>{BallsLeft}</ENumber>
            <ETextBox>
              <ETextline>{TotalScore}</ETextline>
            </ETextBox>
            <ENumber>{BallsLeft}</ENumber>
            <ENumber></ENumber>
          </EFlex2> */}

          <EFlex>
            <WrapItem>
              <SizedButton
                onClick={decrementBallspocketedLeft}
                colorScheme="red"
              >
                -1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton
                onClick={incrementBallspocketedLeft}
                colorScheme="blue"
              >
                +1
              </SizedButton>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>{BallspocketedLeft}</ENumber>
            <ETextBox>
              <ETextline>Balls Pocketed</ETextline>
            </ETextBox>
            <ENumber>{BallspocketedRight}</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <SizedButton
                onClick={incrementBallspocketedRight}
                colorScheme="blue"
              >
                +1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton
                onClick={decrementBallspocketedRight}
                colorScheme="red"
              >
                -1
              </SizedButton>
            </WrapItem>
          </EFlex>

          <br />
          <EFlex>
            <WrapItem>
              <SizedButton onClick={decrementMissedLeft} colorScheme="red">
                -1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton onClick={incrementMissedLeft} colorScheme="blue">
                +1
              </SizedButton>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>{MissedLeft}</ENumber>
            <ETextBox>
              <ETextline>Balls Missed</ETextline>
            </ETextBox>
            <ENumber>{MissedRight}</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <SizedButton onClick={incrementMissedRight} colorScheme="blue">
                +1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton onClick={decrementMissedRight} colorScheme="red">
                -1
              </SizedButton>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <SizedButton onClick={decrementUnforcedLeft} colorScheme="red">
                -1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton onClick={incrementUnforcedLeft} colorScheme="blue">
                +1
              </SizedButton>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>{UnforcedLeft}</ENumber>
            <ETextBox>
              <ETextline>Unforced Errors</ETextline>
            </ETextBox>
            <ENumber>{UnforcedRight}</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <SizedButton onClick={incrementUnforcedRight} colorScheme="blue">
                +1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton onClick={decrementUnforcedRight} colorScheme="red">
                -1
              </SizedButton>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <SizedButton onClick={decrementSafetyLeft} colorScheme="red">
                -1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton onClick={incrementSafetyLeft} colorScheme="blue">
                +1
              </SizedButton>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>{SafetyLeft}</ENumber>
            <ETextBox>
              <ETextline>Safety Errors</ETextline>
            </ETextBox>
            <ENumber>{SafetyRight}</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <SizedButton onClick={incrementSafetyRight} colorScheme="blue">
                +1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton onClick={decrementSafetyRight} colorScheme="red">
                -1
              </SizedButton>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <SizedButton onClick={decrementKickingLeft} colorScheme="red">
                -1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton onClick={incrementKickingLeft} colorScheme="blue">
                +1
              </SizedButton>
            </WrapItem>
            <ENumber></ENumber>
            <ENumber>{KickingLeft}</ENumber>
            <ETextBox>
              <ETextline>Kicking Errors</ETextline>
            </ETextBox>
            <ENumber>{KickingRight}</ENumber>
            <ENumber></ENumber>
            <WrapItem>
              <SizedButton onClick={incrementKickingRight} colorScheme="blue">
                +1
              </SizedButton>
            </WrapItem>
            <WrapItem>
              <SizedButton onClick={decrementKickingRight} colorScheme="red">
                -1
              </SizedButton>
            </WrapItem>
          </EFlex>

          <EFlexBottom>
            <ENumber></ENumber>
            <ENumber>{PersentageACCUStatLeft || 0}</ENumber>
            <ETextBox>
              <ETextline>ACCU-STAT</ETextline>
            </ETextBox>
            <ENumber>{PersentageACCUStatRight || 0}</ENumber>
            <ENumber></ENumber>
          </EFlexBottom>
        </EContainer>
      </ECenter>
    </>
  );
};
