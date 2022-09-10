import { Break } from "../components/Break";
import { GameScore } from "../components/game_score";
import { TotalBreak } from "../components/total_break";
import { ECenter, EContainer } from "../components/styles";
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

export const Home = () => {
  return (
    <>
      <ECenter>
        <EContainer>
          <Break />
          <GameScore />
          <TotalBreak />
          <DryBreaks />
          <ScratchOnBreak />
          <BallMadeOnBreak />
          <ShotAfterBreak />
          <br />
          <BreakandRun />
          <ConsecutiveBreakandRun />
          <br />
          <LongestGameWinningStreak />
          <br />
          <InGameStats />
          <TotalScore />
          <BallsPocketed />
          <br />
          <BallsMissed />
          <UnforcedErrors />
          <SafeteyErrors />
          <KickingErrors />
          <AccuStat />
        </EContainer>
      </ECenter>
    </>
  );
};
