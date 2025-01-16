import { BasicParticipantData, InfoDto, ParticipantDto } from '../types/types';

export function isParticipantWinner(
  participant: BasicParticipantData,
  matchInfo: InfoDto
): boolean {
  const matchParticipant = matchInfo.participants.find(
    (matchinf) => matchinf.puuid === participant.puuid
  );
  if (matchParticipant?.win) return true;
  else return false;
}
