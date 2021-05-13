import React from 'react'

import SelectInput from './SelectInput'

const SelectInputChoices = () => {

    const buildingArray = [
        {
            id: 1,
            name: "ACB",
            value: "ACB"
        },
        {
            id: 2,
            name: "ADH",
            value: "ADH"
        },
        {
            id: 3,
            name: "AHG",
            value: "AHG"
        },
        {
            id: 4,
            name: "ANB",
            value: "ANB"
        },
        {
            id: 5,
            name: "AND",
            value: "AND"
        }, {
            id: 6,
            name: "ARC",
            value: "ARC"
        }, {
            id: 7,
            name: "ART",
            value: "ART"
        }, {
            id: 8,
            name: "ASE",
            value: "ASE"
        }, {
            id: 9,
            name: "ASH",
            value: "ASH"
        }, {
            id: 10,
            name: "ATT",
            value: "ATT"
        }, {
            id: 11,
            name: "BAT",
            value: "BAT"
        }, {
            id: 12,
            name: "BEL",
            value: "BEL"
        }, {
            id: 13,
            name: "BEN",
            value: "BEN"
        }, {
            id: 14,
            name: "BHD",
            value: "BHD"
        }, {
            id: 15,
            name: "BIO",
            value: "BIO"
        }, {
            id: 16,
            name: "BLD",
            value: "BLD"
        }, {
            id: 17,
            name: "BMA",
            value: "BMA"
        }, {
            id: 18,
            name: "BMC",
            value: "BMC"
        }, {
            id: 19,
            name: "BME",
            value: "BME"
        }, {
            id: 20,
            name: "BMK",
            value: "BMK"
        }, {
            id: 21,
            name: "BMS",
            value: "BMS"
        }, {
            id: 22,
            name: "BRB",
            value: "BRB"
        }, {
            id: 23,
            name: "BRG",
            value: "BRG"
        }, {
            id: 24,
            name: "BTL",
            value: "BTL"
        }, {
            id: 25,
            name: "BUR",
            value: "BUR"
        }, {
            id: 26,
            name: "BWY",
            value: "BWY"
        }, {
            id: 27,
            name: "CAL",
            value: "CAL"
        }, {
            id: 28,
            name: "CAM",
            value: "CAM"
        }, {
            id: 29,
            name: "CBA",
            value: "CBA"
        }, {
            id: 30,
            name: "CCJ",
            value: "CCJ"
        }, {
            id: 31,
            name: "CDA",
            value: "CDA"
        }, {
            id: 32,
            name: "CDL",
            value: "CDL"
        }, {
            id: 33,
            name: "CMA",
            value: "CMA"
        }, {
            id: 34,
            name: "CMB",
            value: "CMB"
        }, {
            id: 35,
            name: "CML",
            value: "CML"
        }, {
            id: 36,
            name: "COM",
            value: "COM"
        }, {
            id: 37,
            name: "CPE",
            value: "CPE"
        }, {
            id: 38,
            name: "CRB",
            value: "CRB"
        }, {
            id: 39,
            name: "CRD",
            value: "CRD"
        }, {
            id: 40,
            name: "CRH",
            value: "CRH"
        }, {
            id: 41,
            name: "CS3",
            value: "CS3"
        }, {
            id: 42,
            name: "CS4",
            value: "CS4"
        }, {
            id: 43,
            name: "CS5",
            value: "CS5"
        }, {
            id: 44,
            name: "CS6",
            value: "CS6"
        }, {
            id: 47,
            name: "CTJ",
            value: "CTJ"
        }, {
            id: 48,
            name: "DFA",
            value: "DFA"
        }, {
            id: 49,
            name: "DFF",
            value: "DFF"
        }, {
            id: 50,
            name: "DPI",
            value: "DPI"
        }, {
            id: 51,
            name: "ECG",
            value: "EFG"
        }, {
            id: 52,
            name: "ECJ",
            value: "ECJ"
        }, {
            id: 53,
            name: "EER",
            value: "EER"
        }, {
            id: 54,
            name: "EPS",
            value: "EPS"
        }, {
            id: 55,
            name: "ERC",
            value: "ERC"
        }, {
            id: 56,
            name: "ETC",
            value: "ETC"
        }, {
            id: 57,
            name: "FAC",
            value: "FAC"
        }, {
            id: 58,
            name: "FC1",
            value: "FC1"
        }, {
            id: 59,
            name: "FC2",
            value: "FC2"
        }, {
            id: 60,
            name: "FC3",
            value: "FC3"
        }, {
            id: 61,
            name: "FC4",
            value: "FC4"
        }, {
            id: 62,
            name: "FC5",
            value: "FC5"
        }, {
            id: 63,
            name: "FC6",
            value: "FC6"
        }, {
            id: 64,
            name: "FC8",
            value: "FC8"
        }, {
            id: 65,
            name: "FC9",
            value: "FC9"
        }, {
            id: 66,
            name: "FDH",
            value: "FDH"
        }, {
            id: 67,
            name: "FNT",
            value: "FNT"
        }, {
            id: 68,
            name: "GAR",
            value: "GAR"
        }, {
            id: 69,
            name: "GDC",
            value: "GDC"
        }, {
            id: 70,
            name: "GEA",
            value: "GEA"
        }, {
            id: 71,
            name: "GEB",
            value: "GEB"
        }, {
            id: 72,
            name: "GOL",
            value: "GOL"
        },{
            id: 73,
            name: "GRE",
            value: "GRE"
        },{
            id: 74,
            name: "GRP",
            value: "GRP"
        },{
            id: 75,
            name: "GSB",
            value: "GSB"
        },{
            id: 76,
            name: "GWB",
            value: "GWB"
        },{
            id: 77,
            name: "HCG",
            value: "HCG"
        },{
            id: 78,
            name: "HDB",
            value: "HDB"
        },{
            id: 79,
            name: "HLB",
            value: "HLB"
        },{
            id: 80,
            name: "HMA",
            value: "HMA"
        },{
            id: 81,
            name: "HRC",
            value: "HRC"
        },{
            id: 82,
            name: "HRH",
            value: "HRH"
        },{
            id: 83,
            name: "HSM",
            value: "HSM"
        },{
            id: 84,
            name: "HTB",
            value: "HTB"
        },{
            id: 85,
            name: "IC2",
            value: "IC2"
        },{
            id: 86,
            name: "IMA",
            value: "IMA"
        },{
            id: 87,
            name: "IPF",
            value: "IPF"
        },{
            id: 88,
            name: "JCD",
            value: "JCD"
        },{
            id: 89,
            name: "JES",
            value: "JES"
        },{
            id: 90,
            name: "JGB",
            value: "JGB"
        },{
            id: 91,
            name: "JHH",
            value: "JHH"
        },{
            id: 92,
            name: "JON",
            value: "JON"
        },{
            id: 93,
            name: "KIN",
            value: "KIN"
        },{
            id: 94,
            name: "LAC",
            value: "LAC"
        },{
            id: 95,
            name: "LBJ",
            value: "LBJ"
        },{
            id: 96,
            name: "LCH",
            value: "LCH"
        },{
            id: 97,
            name: "LDH",
            value: "LDH"
        },{
            id: 98,
            name: "LFH",
            value: "LFH"
        },{
            id: 99,
            name: "LLA",
            value: "LLA"
        },{
            id: 100,
            name: "LLB",
            value: "LLB"
        },{
            id: 101,
            name: "LLC",
            value: "LLC"
        },
        {
            id: 102,
            name: "LLD",
            value: "LLD"
        },
        {
            id: 103,
            name: "LLE",
            value: "LLE"
        },
        {
            id: 104,
            name: "LLF",
            value: "LLF"
        },
        {
            id: 105,
            name: "LTD",
            value: "LTD"
        }, {
            id: 106,
            name: "LTH",
            value: "LTH"
        }, {
            id: 107,
            name: "MAG",
            value: "MAG"
        }, {
            id: 108,
            name: "MAI",
            value: "MAI"
        }, {
            id: 109,
            name: "MBB",
            value: "MBB"
        }, {
            id: 110,
            name: "MEZ",
            value: "MEZ"
        }, {
            id: 111,
            name: "MFH",
            value: "MFH"
        }, {
            id: 112,
            name: "MHD",
            value: "MHD"
        }, {
            id: 113,
            name: "MMS",
            value: "MMS"
        }, {
            id: 114,
            name: "MNC",
            value: "MNC"
        }, {
            id: 115,
            name: "MRH",
            value: "MRH"
        }, {
            id: 116,
            name: "MSB",
            value: "MSB"
        }, {
            id: 117,
            name: "MTC",
            value: "MTC"
        }, {
            id: 118,
            name: "NEZ",
            value: "NEZ"
        }, {
            id: 119,
            name: "NHB",
            value: "NHB"
        }, {
            id: 120,
            name: "NMS",
            value: "NMS"
        }, {
            id: 121,
            name: "NUR",
            value: "NUR"
        }, {
            id: 122,
            name: "OHH",
            value: "OHH"
        }, {
            id: 123,
            name: "PAC",
            value: "PAC"
        }, {
            id: 124,
            name: "PAI",
            value: "PAI"
        }, {
            id: 125,
            name: "PAR",
            value: "PAR"
        }, {
            id: 126,
            name: "PAT",
            value: "PAT"
        }, {
            id: 127,
            name: "PCL",
            value: "PCL"
        }, {
            id: 128,
            name: "PHD",
            value: "PHD"
        }, {
            id: 129,
            name: "PHR",
            value: "PHR"
        }, {
            id: 130,
            name: "POB",
            value: "POB"
        }, {
            id: 131,
            name: "PPA",
            value: "PPA"
        }, {
            id: 132,
            name: "PPE",
            value: "PPE"
        }, {
            id: 133,
            name: "PRC",
            value: "PRC"
        }, {
            id: 134,
            name: "PRH",
            value: "PRH"
        }, {
            id: 135,
            name: "RHD",
            value: "RHD"
        }, {
            id: 136,
            name: "RLM",
            value: "RLM"
        }, {
            id: 137,
            name: "RLP",
            value: "RLP"
        }, {
            id: 138,
            name: "RRH",
            value: "RRH"
        }, {
            id: 139,
            name: "RSC",
            value: "RSC"
        }, {
            id: 140,
            name: "SAG",
            value: "SAG"
        }, {
            id: 141,
            name: "SBS",
            value: "SBS"
        }, {
            id: 142,
            name: "SEA",
            value: "SEA"
        }, {
            id: 143,
            name: "SER",
            value: "SER"
        }, {
            id: 144,
            name: "SJG",
            value: "SJG"
        }, {
            id: 145,
            name: "SJH",
            value: "SJH"
        }, {
            id: 146,
            name: "SMC",
            value: "SMC"
        }, {
            id: 147,
            name: "SOF",
            value: "SOF"
        }, {
            id: 148,
            name: "SRH",
            value: "SRH"
        }, {
            id: 149,
            name: "SSB",
            value: "SSB"
        }, {
            id: 150,
            name: "SSW",
            value: "SSW"
        }, {
            id: 151,
            name: "STD",
            value: "STD"
        }, {
            id: 152,
            name: "SUT",
            value: "SUT"
        }, {
            id: 153,
            name: "SW7",
            value: "SW7"
        }, {
            id: 154,
            name: "SWG",
            value: "SWG"
        }, {
            id: 155,
            name: "SZB",
            value: "SZB"
        }, {
            id: 156,
            name: "TCC",
            value: "TCC"
        }, {
            id: 157,
            name: "TMM",
            value: "TMM"
        }, {
            id: 158,
            name: "TNH",
            value: "TNH"
        }, {
            id: 159,
            name: "TRG",
            value: "TRG"
        }, {
            id: 160,
            name: "TSC",
            value: "TSC"
        }, {
            id: 161,
            name: "TSG",
            value: "TSG"
        }, {
            id: 162,
            name: "UA9",
            value: "UA9"
        }, {
            id: 163,
            name: "UIL",
            value: "UIL"
        }, {
            id: 164,
            name: "UNB",
            value: "UNB"
        }, {
            id: 165,
            name: "UPB",
            value: "UPB"
        }, {
            id: 166,
            name: "USS",
            value: "USS"
        }, {
            id: 167,
            name: "UTA",
            value: "UTA"
        }, {
            id: 168,
            name: "UTC",
            value: "UTC"
        }, {
            id: 169,
            name: "UTX",
            value: "UTX"
        }, {
            id: 170,
            name: "WAG",
            value: "WAG"
        },{
            id: 171,
            name: "WCH",
            value: "WCH"
        },{
            id: 172,
            name: "WCP",
            value: "WCP"
        },{
            id: 173,
            name: "WEL",
            value: "WEL"
        },{
            id: 174,
            name: "WGB",
            value: "WGB"
        },{
            id: 175,
            name: "WIN",
            value: "WIN"
        },{
            id: 176,
            name: "WMB",
            value: "WMB"
        }{
            id: 177,
            name: "WPR",
            value: "WPR"
        }{
            id: 178,
            name: "WWH",
            value: "WWH"
        }
            

        
    ]

    return (
        <div>

        </div>
    )
}

export default SelectInputChoices
