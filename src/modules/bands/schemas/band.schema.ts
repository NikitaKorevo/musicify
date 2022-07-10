import { MemberSchema } from '../../members/schemas/member.schema';

export type BandSchema = {
  _id: string;
  name: string;
  origin: string;
  membersId: MemberSchema[];
  website: string;
  genresIds: string[];
};
