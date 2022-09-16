import { Break } from "../components/Break";
import { LongestGameWinningStreak } from "../components/longest_game_winning_streak";
import { InGameStats } from "../components/in_game_stats";
import { BallsPocketed } from "../components/Balls_Pocketed";
import { AccuStat } from "../components/accu_stat";
import { TotalScore } from "../components/total_score";
import { ECenter, EContainer } from "../common/styles";
import { CommonItems } from "../common/common_items";
import Dialog from "../common/dialog";
import { useDisclosure } from "@chakra-ui/react";
import {
  BallMadeOnBreakLeftState,
  BallMadeOnBreakRightState,
  BallsMissedLeftState,
  BallsMissedRightState,
  BreakandRunLeftState,
  BreakandRunRightState,
  ConsecutiveBreakandRunLeftState,
  ConsecutiveBreakandRunRightState,
  dryBreakCountLeftState,
  dryBreakCountRightState,
  KickingErrorsLeftState,
  KickingErrorsRightState,
  SafeteyErrorsLeftState,
  SafeteyErrorsRightState,
  scoreLeftState,
  scoreRightState,
  ScratchLeftState,
  ScratcRightState,
  ShotAfterBreakLeftState,
  ShotAfterBreakRightState,
  totalBreaksLeftState,
  totalBreaksRightState,
  UnforcedErrorsLeftState,
  UnforcedErrorsRightState,
} from "../global/globalState";

export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const topStateList = [
    {
      title: "Game Score",
      left: scoreLeftState,
      right: scoreRightState,
      hasPercentage: false,
    },
    {
      title: "Total Break",
      left: totalBreaksLeftState,
      right: totalBreaksRightState,
      hasPercentage: false,
    },
    {
      title: "Dry Breaks",
      left: dryBreakCountLeftState,
      right: dryBreakCountRightState,
      hasPercentage: true,
    },
    {
      title: "Scratches on Break",
      left: ScratchLeftState,
      right: ScratcRightState,
      hasPercentage: true,
    },
    {
      title: "Ball Made on Break",
      left: BallMadeOnBreakLeftState,
      right: BallMadeOnBreakRightState,
      hasPercentage: true,
    },
    {
      title: "Shot After The Break",
      left: ShotAfterBreakLeftState,
      right: ShotAfterBreakRightState,
      hasPercentage: true,
    },
  ];

  const centerStateList = [
    {
      title: "Break and Run",
      left: BreakandRunLeftState,
      right: BreakandRunRightState,
      hasPercentage: false,
    },
    {
      title: "Consecutive Break and Runs",
      left: ConsecutiveBreakandRunLeftState,
      right: ConsecutiveBreakandRunRightState,
      hasPercentage: true,
    },
  ];

  const bottomStateList = [
    {
      title: "Balls Missed",
      left: BallsMissedLeftState,
      right: BallsMissedRightState,
      hasPercentage: false,
    },
    {
      title: "Unforced Errors",
      left: UnforcedErrorsLeftState,
      right: UnforcedErrorsRightState,
      hasPercentage: false,
    },
    {
      title: "Safety Errors",
      left: SafeteyErrorsLeftState,
      right: SafeteyErrorsRightState,
      hasPercentage: false,
    },
    {
      title: "Kicking Errors",
      left: KickingErrorsLeftState,
      right: KickingErrorsRightState,
      hasPercentage: false,
    },
  ];
  return (
    <>
      <Dialog onClose={onClose} isOpen={isOpen} />
      <ECenter>
        <EContainer>
          <Break />
          {topStateList.map((item) => {
            return (
              <CommonItems
                title={item.title}
                leftState={item.left}
                rightState={item.right}
                hasPercentage={item.hasPercentage}
                dialogOpen={onOpen}
              />
            );
          })}
          <br />
          {centerStateList.map((item) => {
            return (
              <CommonItems
                title={item.title}
                leftState={item.left}
                rightState={item.right}
                hasPercentage={item.hasPercentage}
              />
            );
          })}
          <br />
          <LongestGameWinningStreak />
          <br />
          <InGameStats />
          <TotalScore />
          <BallsPocketed />
          {bottomStateList.map((item) => {
            return (
              <CommonItems
                title={item.title}
                leftState={item.left}
                rightState={item.right}
                hasPercentage={item.hasPercentage}
                dialogOpen={onOpen}
              />
            );
          })}
          <br />
          <AccuStat />
        </EContainer>
      </ECenter>
    </>
  );
};
