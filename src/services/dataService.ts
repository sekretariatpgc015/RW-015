import Papa from 'papaparse';

export interface RTDistribution {
  rt: string;
  kk: number;
  jiwa: number;
  color: string;
}

export interface DemographicStats {
  totalResidents: number;
  totalKK: number;
  totalMale: number;
  totalFemale: number;
  genderData: { category: string; value: number }[];
  ageData: { category: string; value: number; male: number; female: number }[];
  generationData: { generation: string; male: number; female: number; value: number }[];
  rtData: RTDistribution[];
}

const COLORS = [
  'bg-blue-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-rose-500',
  'bg-indigo-500',
  'bg-cyan-500',
  'bg-violet-500',
  'bg-orange-500',
  'bg-teal-500',
  'bg-pink-500',
];

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRh_ePcQk6dlMg-n35ZQEyp_PGDJKFR0Jyf-dVMTKFdVYwZ7MReVZ8xww_1pIMNqUEWE_087gZd26nR/pub?gid=37780738&single=true&output=csv';
const PYRAMID_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRh_ePcQk6dlMg-n35ZQEyp_PGDJKFR0Jyf-dVMTKFdVYwZ7MReVZ8xww_1pIMNqUEWE_087gZd26nR/pub?gid=1135930185&single=true&output=csv';

const AGE_GROUPS = [
  "0 - 4",
  "5 - 9",
  "10 - 14",
  "15 - 19",
  "20 - 24",
  "25 - 29",
  "30 - 34",
  "35 - 39",
  "40 - 44",
  "45 - 49",
  "50 - 54",
  "55 - 59",
  "60 - 64",
  "65 - 69",
  "70 - 74",
  "75 +"
];

const getAgeGroup = (age: number): string => {
  if (age >= 75) return "75 +";
  if (age >= 70) return "70 - 74";
  if (age >= 65) return "65 - 69";
  if (age >= 60) return "60 - 64";
  if (age >= 55) return "55 - 59";
  if (age >= 50) return "50 - 54";
  if (age >= 45) return "45 - 49";
  if (age >= 40) return "40 - 44";
  if (age >= 35) return "35 - 39";
  if (age >= 30) return "30 - 34";
  if (age >= 25) return "25 - 29";
  if (age >= 20) return "20 - 24";
  if (age >= 15) return "15 - 19";
  if (age >= 10) return "10 - 14";
  if (age >= 5) return "5 - 9";
  return "0 - 4";
};

export const fetchDemographicData = async (): Promise<DemographicStats | null> => {
  try {
    const [response, pyramidResponse] = await Promise.all([
      fetch(`${CSV_URL}&t=${new Date().getTime()}`),
      fetch(`${PYRAMID_CSV_URL}&t=${new Date().getTime()}`)
    ]);
    
    const csvText = await response.text();
    const pyramidCsvText = await pyramidResponse.text();
    
    // Clean CSV text: remove leading empty lines/commas if any
    const lines = csvText.split('\n');
    const firstHeaderIndex = lines.findIndex(line => line.includes('RT') && line.includes('JML PENDUDUK'));
    const cleanCsvText = lines.slice(firstHeaderIndex).join('\n');

    const pyramidLines = pyramidCsvText.split('\n');
    const pyramidHeaderIndex = pyramidLines.findIndex(line => line.includes('USIA') && line.includes('JENIS KELAMIN'));
    const cleanPyramidCsvText = pyramidHeaderIndex >= 0 ? pyramidLines.slice(pyramidHeaderIndex).join('\n') : pyramidCsvText;

    return new Promise((resolve, reject) => {
      Papa.parse(cleanCsvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const data = results.data as any[];
          const rtData: RTDistribution[] = [];
          let totalResidents = 0;
          let totalKK = 0;
          let totalMale = 0;
          let totalFemale = 0;

          data.forEach((row, index) => {
            const rtRaw = row.RT?.toString().trim();
            if (!rtRaw || rtRaw.toUpperCase() === 'TOTAL' || rtRaw.toUpperCase() === 'RT') return;
            
            const rt = rtRaw.padStart(3, '0');
            const jiwa = parseInt(row['JML PENDUDUK']) || 0;
            const kk = (parseInt(row['JUMLAH KK']) || 0) + (parseInt(row['JUMLAH KK2']) || 0);
            const male = parseInt(row['LAKI-LAKI']) || 0;
            const female = parseInt(row['PEREMPUAN']) || 0;

            rtData.push({
              rt,
              kk,
              jiwa,
              color: COLORS[rtData.length % COLORS.length],
            });

            totalResidents += jiwa;
            totalKK += kk;
            totalMale += male;
            totalFemale += female;
          });

          // Sort RT data
          rtData.sort((a, b) => a.rt.localeCompare(b.rt));

          // Parse pyramid data
          Papa.parse(cleanPyramidCsvText, {
            header: true,
            skipEmptyLines: true,
            complete: (pyramidResults) => {
              const pData = pyramidResults.data as any[];
              const pyramidMap: Record<string, { male: number; female: number }> = {};
              
              AGE_GROUPS.forEach(group => {
                pyramidMap[group] = { male: 0, female: 0 };
              });

              const GENERATIONS = [
                "Pre-Boomer",
                "Baby Boomer",
                "Gen X",
                "Gen Y (Milenial)",
                "Gen Z",
                "Gen Alpha"
              ];
              const generationMap: Record<string, { male: number; female: number }> = {};
              GENERATIONS.forEach(gen => {
                generationMap[gen] = { male: 0, female: 0 };
              });

              pData.forEach(row => {
                const age = parseInt(row['USIA']);
                const gender = row['JENIS KELAMIN']?.toString().trim().toUpperCase();
                const tglLahir = row['TGL. LAHIR']?.toString().trim();
                
                let birthYear = 0;
                if (tglLahir) {
                  const parts = tglLahir.split('/');
                  if (parts.length === 3) {
                    birthYear = parseInt(parts[2]);
                  }
                }
                if (!birthYear && !isNaN(age)) {
                  birthYear = new Date().getFullYear() - age;
                }

                if (birthYear && gender) {
                  let gen = "Pre-Boomer";
                  if (birthYear >= 1946 && birthYear <= 1964) gen = "Baby Boomer";
                  else if (birthYear >= 1965 && birthYear <= 1980) gen = "Gen X";
                  else if (birthYear >= 1981 && birthYear <= 1996) gen = "Gen Y (Milenial)";
                  else if (birthYear >= 1997 && birthYear <= 2012) gen = "Gen Z";
                  else if (birthYear >= 2013) gen = "Gen Alpha";

                  if (gender === 'LAKI-LAKI') {
                    generationMap[gen].male += 1;
                  } else if (gender === 'PEREMPUAN') {
                    generationMap[gen].female += 1;
                  }
                }
                
                if (!isNaN(age) && gender) {
                  const group = getAgeGroup(age);
                  if (gender === 'LAKI-LAKI') {
                    pyramidMap[group].male += 1;
                  } else if (gender === 'PEREMPUAN') {
                    pyramidMap[group].female += 1;
                  }
                }
              });

              const generationData = GENERATIONS.map(gen => ({
                generation: gen,
                male: generationMap[gen].male,
                female: generationMap[gen].female,
                value: generationMap[gen].male + generationMap[gen].female
              }));

              const ageData = AGE_GROUPS.map(group => ({
                category: group,
                value: pyramidMap[group].male + pyramidMap[group].female,
                male: pyramidMap[group].male,
                female: pyramidMap[group].female
              }));

              resolve({
                totalResidents,
                totalKK,
                totalMale,
                totalFemale,
                genderData: [
                  { category: 'Laki-laki', value: totalMale },
                  { category: 'Perempuan', value: totalFemale },
                ],
                ageData,
                generationData,
                rtData,
              });
            },
            error: (error: any) => {
              reject(error);
            }
          });
        },
        error: (error: any) => {
          reject(error);
        },
      });
    });
  } catch (error) {
    console.error('Error fetching demographic data:', error);
    return null;
  }
};

export const fetchRTDistribution = async (): Promise<RTDistribution[]> => {
  const stats = await fetchDemographicData();
  return stats?.rtData || [];
};
