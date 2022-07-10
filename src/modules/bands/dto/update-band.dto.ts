import { MemberSchema } from '../../members/schemas/member.schema';

export type UpdateBandDto = {
  name?: string;
  origin?: string;
  members?: MemberSchema[];
  website?: string;
  genresIds?: string[];
};
