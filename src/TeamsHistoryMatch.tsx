import './App.css';
import { useEffect, useState } from 'react';
import {
  BasicParticipantData,
  GenericResponse,
  InfoDto,
  MatchData,
  MetadataDto,
} from './types/types';

import WinnerTeamHistoryMatch from './components/WinnerTeamHistoryMatch';
import LoserTeamHistoryMatch from './components/LoserTeamHistoryMatch';

function TeamsHistoryMatch() {
  const [participantsData, setParticipantsData] = useState<
    BasicParticipantData[] | null
  >(null);
  const [matchInfo, setMatchInfo] = useState<InfoDto | null>(null);
  const [matchMetadata, setMatchMetadata] = useState<MetadataDto | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const url =
        'http://localhost:8080/api/matches/match/EUW1_7269765313/EUW1';
      console.log(url);
      try {
        const response = await fetch(url);
        const data: GenericResponse<MatchData> = await response.json();
        setParticipantsData(data.data.basicDataFromParticipants);
        setMatchInfo(data.data.matchInfo);
        setMatchMetadata(data.data.matchMetadata);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (participantsData && matchInfo && matchMetadata)
      console.log({ participantsData, matchInfo, matchMetadata });
  }, [matchMetadata, matchInfo, participantsData]);

  return (
    <>
      <div>
        {participantsData && matchInfo && (
          <>
            <WinnerTeamHistoryMatch
              matchInfo={matchInfo}
              participantsData={participantsData}
            />

            <h2>Losing Team</h2>

            <LoserTeamHistoryMatch
              matchInfo={matchInfo}
              participantsData={participantsData}
            />
          </>
        )}
      </div>
    </>
  );
}

export default TeamsHistoryMatch;
