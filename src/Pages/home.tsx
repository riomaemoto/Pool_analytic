import { Break } from "../components/Break";
import { GameScore } from "../components/game_score";
import { TotalBreak } from "../components/total_break";
import { ScratchOnBreak } from "../components/Scratches_on_Break";
import { DryBreaks } from "../components/Dry_Breaks";
import { BallMadeOnBreak } from "../components/ball_made_on_break";
import { ShotAfterBreak } from "../components/shot_after_break";
import { BreakandRun } from "../components/break_and_run";
import { ConsecutiveBreakandRun } from "../components/consecutive_break_and_run";
import { LongestGameWinningStreak } from "../components/longest_game_winning_streak";
import { InGameStats } from "../components/in_game_stats";
import { BallsPocketed } from "../components/Balls_Pocketed";
import { BallsMissed } from "../components/Balls_Missed";
import { UnforcedErrors } from "../components/unforced_errors";
import { SafeteyErrors } from "../components/safety_errors";
import { KickingErrors } from "../components/Kicking_Errors";
import { AccuStat } from "../components/accu_stat";
import { TotalScore } from "../components/total_score";
import { ECenter, EContainer } from "../common/styles";
import { CommonItems } from "../common/common_items";
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
              />
            );
          })}
          {/* <GameScore />
          <TotalBreak />
          <DryBreaks />
          <ScratchOnBreak />
          <BallMadeOnBreak />
          <ShotAfterBreak /> */}
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
          {/* <BreakandRun />
          <ConsecutiveBreakandRun /> */}
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
              />
            );
          })}
          <br />
          {/* <BallsMissed />
          <UnforcedErrors />
          <SafeteyErrors />
          <KickingErrors /> */}
          <AccuStat />
        </EContainer>
      </ECenter>
    </>
  );
};
