import { MemberSchema } from '../../members/schemas/member.schema';

export type CreateBandDto = {
  name: string;
  origin?: string;
  members?: MemberSchema[];
  website?: string;
  genresIds?: string[];
};
