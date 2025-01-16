import React from 'react';
Base64Image;
import { BasicParticipantData, InfoDto } from '../types/types';
import { isParticipantWinner } from '../utils/utils';
import Base64Image from './Base64Image';

interface WinnerTeamHistoryMatchProps {
  participantsData: BasicParticipantData[];
  matchInfo: InfoDto;
}

const WinnerTeamHistoryMatch: React.FC<WinnerTeamHistoryMatchProps> = ({
  participantsData,
  matchInfo,
}) => {
  return (
    <div style={{ backgroundColor: 'blue' }}>
      <h1 style={{ color: 'green' }}>WINNER</h1>
      {participantsData
        .filter((participant) => isParticipantWinner(participant, matchInfo))
        .map((participant) => (
          <div key={participant.puuid}>
            <div>Summoner: {participant.riotIdGameName}</div>
            <Base64Image base64String={participant.champion.championImage} />
            <div>
              Items:
              {participant.items.map((item, index) => (
                <Base64Image key={index} base64String={item.image} />
              ))}
            </div>
            <div>Winner: Yes</div>
          </div>
        ))}
    </div>
  );
};

export default WinnerTeamHistoryMatch;
