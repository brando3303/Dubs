import { Location } from "./marker";


/** Information about a building on campus. */
export type Building = {shortName: string, longName: string, location: Location};

/**
 * List of many known buildings on campus. These are listed in "reading order".
 * They are split into "lines" of buildings at about the same vertical position.
 * Then, they are sorted first by line (top to bottom) and then within the line
 * (left to right).
 */
export const BUILDINGS: Array<Building> = [
  {shortName: "UBS", longName: "University Bookstore",
   location: {x: 1373.6078, y: 556.55779}},
  {shortName: "MCC", longName: "McCarty Hall",
   location: {x: 2345.7143, y: 528.64286}},
  {shortName: "T65", longName: "Thai 65",
   location: {x: 1370.6408, y: 807.35188}},
  {shortName: "DEN", longName: "Denny Hall",
   location: {x: 1890, y: 892.57144}},
  {shortName: "MCM", longName: "McMahon Hall",
   location: {x: 2446.9314, y: 898.06137}},
  {shortName: "PAR", longName: "Parrington Hall",
   location: {x: 1715.3571, y: 1060.4286}},
  {shortName: "SAV", longName: "Savery Hall",
   location: {x: 1951.8672, y: 1094.7886}},
  {shortName: "RAI", longName: "Raitt Hall",
   location: {x: 2024.5103, y: 993.01223}},
  {shortName: "MLR", longName: "Miller Hall",
   location: {x: 2184.7074, y: 1045.0386}},
  {shortName: "MUS", longName: "Music Building",
   location: {x: 2202.5882, y: 957.31147}},
  {shortName: "OUG", longName: "Odegaard Undergraduate Library",
   location: {x: 1724.1276, y: 1208.4754}},
  {shortName: "KNE", longName: "Kane Hall",
   location: {x: 1876.6109, y: 1165.2467}},
  {shortName: "GWN", longName: "Gowen Hall",
   location: {x: 2022.3254, y: 1210.9561}},
  {shortName: "CMU", longName: "Communications Building",
   location: {x: 2344.8512, y: 1114.6251}},
  {shortName: "BGR", longName: "By George",
   location: {x: 1671.5499, y: 1258.4333}},
  {shortName: "MNY", longName: "Meany Hall",
   location: {x: 1684.1768, y: 1297.0716}},
  {shortName: "SUZ", longName: "Suzzallo Library",
   location: {x: 1895.8038, y: 1325.861}},
  {shortName: "HUB", longName: "Student Union Building",
   location: {x: 2269.7856, y: 1364.3777}},
  {shortName: "MGH", longName: "Mary Gates Hall",
   location: {x: 1973.1382, y: 1433.6676}},
  {shortName: "PAB", longName: "Physics/Astronomy Building",
   location: {x: 1560.6467, y: 1698.3767}},
  {shortName: "CHL", longName: "Chemistry Library",
   location: {x: 1707.6629, y: 1671.5098}},
  {shortName: "EEB", longName: "Electrical Engineering Building",
   location: {x: 2159.9587, y: 1694.8192}},
  {shortName: "LOW", longName: "Loew Hall",
   location: {x: 2375.6262, y: 1576.1262}},
  {shortName: "FSH", longName: "Fishery Sciences Building",
   location: {x: 1061.8213, y: 1779.6903}},
  {shortName: "PAA", longName: "Physics/Astronomy Building A",
   location: {x: 1625.2679, y: 1783.5181}},
  {shortName: "BAG", longName: "Bagley Hall",
   location: {x: 1914.5103, y: 1709.8816}},
  {shortName: "CSE", longName: "Paul G. Allen Center for Computer Science & Engineering",
   location: {x: 2259.7112, y: 1715.5273}},
  {shortName: "CS2", longName: "Bill & Melinda Gates Center For Computer Science & Engineering",
   location: {x: 2315.0936, y: 1780.7913}},
  {shortName: "IMA", longName: "Intramural Activities Building",
   location: {x: 2722.3352, y: 1710.2859}},
  {shortName: "ROB", longName: "Roberts Hall",
   location: {x: 2309.4107, y: 1979.0003}},
  {shortName: "MOR", longName: "Moore Hall",
   location: {x: 2317.1749, y: 1859.502}},
];
