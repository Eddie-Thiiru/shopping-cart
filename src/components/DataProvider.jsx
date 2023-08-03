import { createContext } from "react";
import PropTypes from "prop-types";
import useData from "./utils/data";

const Context = createContext();

const DataProvider = ({ children }) => {
  const zeldaBOTW = useData(22511);
  const redDeadRedemption2 = useData(28);
  const witcher3 = useData(3328);
  const gta5 = useData(3498);
  const godOfWar2 = useData(58175);
  const metalGearSolid5 = useData(3192);
  const lastOfUs = useData(3636);
  const uncharted4 = useData(2462);
  const portal2 = useData(4200);
  const ghostOfTsushima = useData(58550);
  const forza5 = useData(622492);
  const hollowKnight = useData(9767);
  const willOfWisps = useData(28199);
  const eldenRing = useData(326243);
  const riseOfTombRaider = useData(7689);
  const batmanArkhamCity = useData(28623);
  const residentEvil4 = useData(56184);
  const civ6 = useData(10297);
  const nfsHeat = useData(364806);
  const gtaSanAndreas = useData(416);

  return (
    <Context.Provider
      value={{
        zeldaBOTW,
        redDeadRedemption2,
        witcher3,
        gta5,
        godOfWar2,
        metalGearSolid5,
        lastOfUs,
        uncharted4,
        portal2,
        ghostOfTsushima,
        forza5,
        hollowKnight,
        willOfWisps,
        eldenRing,
        riseOfTombRaider,
        batmanArkhamCity,
        residentEvil4,
        civ6,
        nfsHeat,
        gtaSanAndreas,
      }}
    >
      {children}
    </Context.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.object,
};

export { DataProvider, Context };
