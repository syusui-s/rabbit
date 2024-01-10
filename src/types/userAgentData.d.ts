type NavigatorUAData = {
  brands: { brand: string; version: string }[];
  mobile: boolean;
  platform: string;
};

interface Navigator {
  userAgentData?: NavigatorUAData;
}
