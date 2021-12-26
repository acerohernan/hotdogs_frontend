import { useLocation } from "@reach/router";

const useHash = () => {
  const { hash } = useLocation();

  return [hash.replace("#", "")];
};

export default useHash;
