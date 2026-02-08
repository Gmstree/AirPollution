import { TeamMember, Reference } from './types';

export const PROJECT_TITLE = "LoT Smart Air Pollution Awareness Monitoring Detection System";

export const SURVEY_DATA = [
  { name: 'Cultural Habits', value: 35, color: '#1a202c' }, // uni-900
  { name: 'Economic Constraints', value: 25, color: '#c0392b' }, // uni-accent
  { name: 'Tech Familiarity', value: 20, color: '#2d3748' }, // uni-800
  { name: 'Health Awareness', value: 20, color: '#718096' }, // gray-600
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "abdul-monaim-sizar",
    studentId: "2312204",
    name: "Abdul Monaim Sizar",
    role: "Leader",
    email: "2312204@iub.edu.bd",
    bio: "Project Leader responsible for overall system architecture, team coordination, and final implementation of the IoT network solution.",
    image: "https://avatars.githubusercontent.com/u/183996840?v=4",
    socials: {
      linkedin: "https://www.linkedin.com/in/sizar-in",
      github: "https://github.com/Gmstree",
      website: "https://sizar.devnames.com/",
      email: "mailto:2312204@iub.edu.bd"
    },
    skills: ["Leadership", "IoT", "System Design"]
  },
  {
    id: "projjal-das-sumya",
    studentId: "2311522",
    name: "Projjal Das Sumya",
    role: "Co-leader",
    email: "2311522@iub.edu.bd",
    bio: "Co-leader focusing on software algorithms, data processing pipelines, and ensuring seamless integration between hardware and cloud modules.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGmrVz5YYjWUw/profile-displayphoto-shrink_800_800/B56ZXZLHP.HoAc-/0/1743105325255?e=1772064000&v=beta&t=FgS7rg8tJivvh03ehLgtMupT8nPvEndPh5cUK53KDJE",
    socials: {
      linkedin: "https://www.linkedin.com/in/projjal-das-a17a3632a",
      github: "https://github.com/projjaldas",
      email: "mailto:2311522@iub.edu.bd"
    },
    skills: ["Software Integration", "Algorithms", "Management"]
  },
  {
    id: "md-hossain",
    studentId: "2312144",
    name: "Md Hossain",
    role: "Member",
    email: "2312144@iub.edu.bd",
    bio: "Technical member dedicated to circuit design, sensor calibration, and ensuring the electrical stability of the monitoring units.",
    image: "https://avatars.githubusercontent.com/u/243840293?v=4",
    socials: {
      linkedin: "https://www.linkedin.com/in/mohammadhossainahmed",
      github: "https://github.com/Mdhossain567",
      email: "mailto:2312144@iub.edu.bd"
    },
    skills: ["Circuit Design", "Calibration", "Hardware"]
  },
  {
    id: "abdur-rahman",
    studentId: "2230042",
    name: "Abdur Rahman",
    role: "Member",
    email: "2230042@iub.edu.bd",
    bio: "Member responsible for hardware assembly, 3D modeling of enclosures, and field testing of the sensor nodes.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGXJYj-2C7RLw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698518907977?e=1772064000&v=beta&t=j1AhBuJtJoBUCYKka_kDzg2SYPAr_0bPB_ds68I3Sk0",
    socials: {
      linkedin: "https://www.linkedin.com/in/abdur-rahman-814196270",
      github: "https://github.com/arsumon94",
      email: "mailto:2230042@iub.edu.bd"
    },
    skills: ["Assembly", "3D Modeling", "Testing"]
  },
  {
    id: "mithila-marjia-nimmi",
    studentId: "2010153",
    name: "Mithila Marjia Nimmi",
    role: "Member",
    email: "2010153@iub.edu.bd",
    bio: "Research member focusing on data analysis, documentation, and surveying the socio-environmental impact of the project.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHDVd-cWK5P9A/profile-displayphoto-crop_800_800/B4DZw9xVB4HwAI-/0/1770562871935?e=1772064000&v=beta&t=bqPEzSMpQwNopKBZWpOYs5INsBLFeNmEp62GWCqxURA",
    socials: {
      linkedin: "https://www.linkedin.com/in/mithila-marjia-nimmi-9179763ab",
      github: "https://github.com/Mithila-Marjia",
      email: "mailto:2010153@iub.edu.bd"
    },
    skills: ["Research", "Documentation", "Analysis"]
  }
];

export const REFERENCES: Reference[] = [
  { id: "1", text: "Addabbo, P., Focareta, M., Marcuccio, S., Votto, C., & Ullo, S. L. (2020). Contribution of Sentinel-2 data for applications in vegetation monitoring. ACTA IMEKO, 5(2), 44-54.", doi: "https://doi.org/10.21014/acta_imeko.v5i2.352" },
  { id: "2", text: "Al-Arafat, M., Kabir, M. E., Morshed, A. S. M., & Islam, M. M. (2025). Artificial Intelligence in Project Management: Balancing Automation and Human Judgment. Frontiers in Applied Engineering and Technology, 2(01), 18-29.", doi: "https://doi.org/10.70937/faet.v1i02.47" },
  { id: "3", text: "Ameer, S., Shah, M. A., Khan, A., Song, H., Maple, C., Islam, S., & Asghar, M. N. (2019). Comparative Analysis of Machine Learning Techniques for Predicting Air Quality in Smart Cities. IEEE Access, 7(NA), 128325-128338.", doi: "https://doi.org/10.1109/access.2019.2925082" },
  { id: "4", text: "Blythe, J. M., & Johnson, S. D. (2018). The Consumer Security Index for IoT: A protocol for developing an index to improve consumer decision making and to incentivize greater security provision in IoT devices. Living in the Internet of Things: Cybersecurity of the IoT - 2018, NA(NA), 1-7.", doi: "https://doi.org/10.1049/cp.2018.0004" },
  { id: "5", text: "Budiarti, R. P. N., Sukaridhoto, S., Hariadi, M., & Purnomo, M. H. (2019). Big Data Technologies using SVM (Case Study: Surface Water Classification on Regional Water Utility Company in Surabaya). 2019 International Conference on Computer Science, Information Technology, and Electrical Engineering (ICOMITEE), NA(NA), 94-101.", doi: "https://doi.org/10.1109/icomitee.2019.8920823" },
  { id: "6", text: "Campelo, J. C., Capella, J. V., Ors, R., Peris, M., & Bonastre, A. (2022). IoT Technologies in Chemical Analysis Systems: Application to Potassium Monitoring in Water. Sensors (Basel, Switzerland), 22(3), 842-842.", doi: "https://doi.org/10.3390/s22030842" },
  { id: "7", text: "Capella, J. V., Bonastre, A., Campelo, J. C., Ors, R., & Peris, M. (2020). IoT & environmental analytical chemistry: Towards a profitable symbiosis. Trends in Environmental Analytical Chemistry, 27(NA), e00095-NA.", doi: "https://doi.org/10.1016/j.teac.2020.e00095" },
  { id: "8", text: "Capella, J. V., Bonastre, A., Ors, R., & Peris, M. (2019). A New Application of Internet of Things and Cloud Services in Analytical Chemistry: Determination of Bicarbonate in Water. Sensors (Basel, Switzerland), 19(24), 5528-NA.", doi: "https://doi.org/10.3390/s19245528" },
  { id: "9", text: "Carpenter, S. R. (2005). Eutrophication of aquatic ecosystems: Bistability and soil phosphorus. Proceedings of the National Academy of Sciences of the United States of America, 102(29), 10002-10005.", doi: "https://doi.org/10.1073/pnas.0503959102" },
  { id: "10", text: "Corbellini, S., Di Francia, E., Grassini, S., Iannucci, L., Lombardo, L., & Parvis, M. (2018). Cloud based sensor network for environmental monitoring. Measurement, 118(NA), 354-361.", doi: "https://doi.org/10.1016/j.measurement.2017.09.049" },
  { id: "11", text: "Dang, C.-L., Yang, J., Zhang, X.-y., & Li, S.-F. (2008). The application of the Fuzzy Attenuation model in the evaluation of water quality in the Yangtze River. 2008 International Conference on Machine Learning and Cybernetics, 3(NA), 1474-1479.", doi: "https://doi.org/10.1109/icmlc.2008.4620638" },
  { id: "12", text: "Demetillo, A. T., Japitana, M. V., & Taboada, E. B. (2019). A system for monitoring water quality in a large aquatic area using wireless sensor network technology. Sustainable Environment Research, 29(1), 1-9.", doi: "https://doi.org/10.1186/s42834-019-0009-4" },
];

export const COMPONENT_LIST = [
  "Arduino Uno R3",
  "Full-Size Breadboard",
  "Jumper Wires",
  "MQ-2 (Gas Sensor)",
  "MQ-7 (Co-sensor)",
  "MQ-135 (Air Quality Sensor)",
  "DHT11 (or DHT22) Sensor",
  "Review Sound Sensor (KY-038)",
  "16x2 LCD Display (Liquid Crystal Display)",
  "10k Potentiometer",
  "NodeMCU V3 (ESP8266)",
  "DFplayer Mini",
  "Speaker (3 Watt)",
  "Micro SD Card"
];