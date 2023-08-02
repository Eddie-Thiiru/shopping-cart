import { useContext, createContext } from "react";
import PropTypes from "prop-types";
import useData from "./data";

const Context = createContext();

export const DataProvider = ({ children }) => {
  const zeldaBOTW = useData(22511);
  const rdr = useData(28);
  const witcher3 = useData(3328);
  const gta5 = useData(3498);
  const gow2 = useData(58175);
  const mgs5 = useData(3192);
  const lastOfUs = useData(3636);
  const uncharted4 = useData(2462);
  const residentEvil4 = useData(56184);
  const gtaSanAndreas = useData(416);
  const forza5 = useData(622492);
  const hollowKnight = useData(9767);
  const willOfWisps = useData(28199);
  const nfsHeat = useData(364806);
  const civ6 = useData(10297);

  return (
    <Context.Provider
      value={{
        zeldaBOTW,
        rdr,
        witcher3,
        gta5,
        gow2,
        mgs5,
        lastOfUs,
        uncharted4,
        residentEvil4,
        gtaSanAndreas,
        forza5,
        hollowKnight,
        willOfWisps,
        nfsHeat,
        civ6,
      }}
    >
      {children}
    </Context.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.object,
};

export const useProductsData = () => useContext(Context);
