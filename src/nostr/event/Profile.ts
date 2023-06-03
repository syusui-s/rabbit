// TODO zodにする
// deleted等の特殊なもの
export type StandardProfile = {
  name?: string;
  about?: string;
  // user's icon
  picture?: string;
  // user's banner image
  banner?: string;
  nip05?: string; // NIP-05
  lud06?: string; // NIP-57
  lud16?: string; // NIP-57
};

export type NonStandardProfile = {
  display_name?: string;
  website?: string;
};

export type Profile = StandardProfile & NonStandardProfile;

export type ProfileWithOtherProperties = Profile & Record<string, any>;

export const parseProfile = (content: string | null): Profile => {
  if (content == null || content.length === 0) throw new TypeError('content is empty or null');
  // TODO 大きすぎたりしないかどうか、JSONかどうかのチェック
  return JSON.parse(content) as Profile;
};

export const safeParseProfile = (content: string | null): Profile | null => {
  try {
    return parseProfile(content);
  } catch (err) {
    console.warn('failed to parse profile (kind 0): ', err, content);
    return null;
  }
};
