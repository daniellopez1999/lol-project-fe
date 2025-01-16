export interface ChampionWithImage {
  championName: string;
  championId: number;
  championImage: string;
}

export interface BasicParticipantData {
  champion: ChampionWithImage;
  assists: number;
  kills: number;
  deaths: number;
  itemsPurchased: number;
  puuid: string;
  riotIdGameName: string;
  items: ItemWithImage[];
}
export interface ItemWithImage {
  image: string;
  itemID: number;
}

export interface GenericResponse<T> {
  message: string;
  data: T;
  statusCode: number;
}
