import './App.css';
import { useEffect, useState } from 'react';
import { BasicParticipantData, GenericResponse } from './types/types';
import Base64Image from './components/Base64Image';

function App() {
  const [participantsData, setParticipantsData] = useState<
    BasicParticipantData[] | null
  >(null);
  useEffect(() => {
    const fetchData = async () => {
      const url =
        'http://localhost:3000/api/matches/match/EUW1_7269765313/EUW1';
      console.log(url);
      try {
        const response = await fetch(url);
        const data: GenericResponse<BasicParticipantData[]> =
          await response.json();
        setParticipantsData(data.data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {participantsData &&
        participantsData.map((participant) => {
          return (
            <div>
              <div>Summoner: {participant.riotIdGameName}</div>
              <Base64Image
                key={`${participant.puuid}_${participant.champion}`}
                base64String={participant.champion.championImage}
              />
              <div>
                Items:
                {participant.items.map((item, index) => (
                  <Base64Image key={index} base64String={item.image} />
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
