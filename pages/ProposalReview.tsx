import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, ExternalLink } from 'lucide-react';

const literatureReviews = [
  { id: 1, text: "Islam, A., Khan, R. H., & Syeed, M. M. M. (2020). ICCA - A Smart and Integrated Surface Water Monitor System Architecture: Bangladesh Perspective. Proceedings of the International Conference on Computing Advancements, NA(NA), 1-6.", link: "https://doi.org/10.1145/3377049.3377103" },
  { id: 2, text: "Jang, A., Zou, Z., Lee, K. K., Ahn, C. H., & Bishop, P. L. (2011). State-of-the-art lab chip sensors for environmental water monitoring. Measurement Science and Technology, 22(3), 032001-NA.", link: "https://doi.org/10.1088/0957-0233/22/3/032001" },
  { id: 3, text: "Jovanovska, E. M., & Davcev, D. (2020). No pollution Smart City Sightseeing Based on WSN Monitoring System. 2020 Sixth International Conference on Mobile And Secure Services (MobiSecServ), NA(NA), 1-6.", link: "https://doi.org/10.1109/mobisecserv48690.2020.9042959" },
  { id: 4, text: "Kazemi, N., Abdolrazzaghi, M., Musilek, P., & Daneshmand, M. (2020). A Temperature-Compensated High-Resolution Microwave Sensor Using Artificial Neural Network. IEEE Microwave and Wireless Components Letters, 30(9), 919-922.", link: "https://doi.org/10.1109/lmwc.2020.3012388" },
  { id: 5, text: "Kortazar, L., Saez, J., Agirre, J., Izaguirre, J. K., & Fernández, L. A. (2014). Application of multivariate analysis to the turbidimetric determination of sulphate in seawater. Anal. Methods, 6(10), 3510-3514.", link: "https://doi.org/10.1039/c4ay00335g" },
  { id: 6, text: "Lachtar, A., Val, T., & Kachouri, A. (2020). Elderly monitoring system in a smart city environment using LoRa and MQTT. IET Wireless Sensor Systems, 10(2), 70-77.", link: "https://doi.org/10.1049/iet-wss.2019.0121" },
  { id: 7, text: "Leal, R. L., Castillo, J. M., Lopez, A. G. M., & May, A. L. H. (2016). Analysis of the development of smart sensors based on MEMS devices and smart sensor platform proposals. 2016 IEEE International Engineering Summit, II Cumbre Internacional de las Ingenierias (IE-Summit), NA(NA), 1-6.", link: "https://doi.org/10.1109/iesummit.2016.7459756" },
  { id: 8, text: "Li, X., Liu, Q., Yang, R., Wen, J., Zhang, J., Cai, E., & Zhang, H. (2016). The Combination of Ground-Sensing Network and Satellite Remote Sensing in Huailai County. IEEE Sensors Journal, 16(10), 3819-3826.", link: "https://doi.org/10.1109/jsen.2016.2535350" },
  { id: 9, text: "Liu, L., Wang, R., Xie, C., Yang, P., Sudirman, S., Wang, F., & Li, R. (2019). INDIN - Deep Learning based Automatic Approach using Hybrid Global and Local Activated Features towards Large-scale Multi-class Pest Monitoring. 2019 IEEE 17th International Conference on Industrial Informatics (INDIN), 1(NA), 1507-1510.", link: "https://doi.org/10.1109/indin41052.2019.8972026" },
  { id: 10, text: "M, S. A., & Nagaveni, V. (2019). Survey on Smart Agriculture Using IOT. NA, NA(NA), NA-NA.", link: "https://doi.org/NA" },
  { id: 11, text: "Mayer, M., & Baeumner, A. J. (2019). A Megatrend Challenging Analytical Chemistry: Biosensor and Chemosensor Concepts Ready for the Internet of Things. Chemical reviews, 119(13), 7996-8027.", link: "https://doi.org/10.1021/acs.chemrev.8b00719" },
  { id: 12, text: "Mazare, A. G., Lonescu, L. M., Lita, L., Visan, D. A., Belu, N., & Gherghe, M. (2018). Intelligent monitoring and planning system for herbicidal processes in agricultural crops. 2018 IEEE 24th International Symposium for Design and Technology in Electronic Packaging (SIITME), NA(NA), 169-172.", link: "https://doi.org/10.1109/siitme.2018.8599213" },
  { id: 13, text: "Mihăiţă, A. S., Dupont, L., Chery, O., Camargo, M., & Cai, C. (2019). Evaluating air quality by combining stationary, smart mobile pollution monitoring and data-driven modelling. Journal of Cleaner Production, 221(NA), 398-418.", link: "https://doi.org/10.1016/j.jclepro.2019.02.179" },
  { id: 14, text: "Mois, G., Folea, S., & Sanislav, T. (2017). Analysis of Three IoT-Based Wireless Sensors for Environmental Monitoring. IEEE Transactions on Instrumentation and Measurement, 66(8), 2056-2064.", link: "https://doi.org/10.1109/tim.2017.2677619" },
  { id: 15, text: "Mshali, H., Lemlouma, T., Moloney, M., & Magoni, D. (2018). A survey on health monitoring systems for health smart homes. International Journal of Industrial Ergonomics, 66(NA), 26-56.", link: "https://doi.org/10.1016/j.ergon.2018.02.002" },
  { id: 16, text: "Mukherji, S. V., Sinha, R., Basak, S., & Kar, S. P. (2019). Smart Agriculture using Internet of Things and MQTT Protocol. 2019 International Conference on Machine Learning, Big Data, Cloud and Parallel Computing (COMITCon), NA(NA), NANA.", link: "https://doi.org/10.1109/comitcon.2019.8862233" },
  { id: 17, text: "Nahid, O. F., Rahmatullah, R., Al-Arafat, M., Kabir, M. E., & Dasgupta, A. (2024). Risk Mitigation Strategies In Large Scale Infrastructure Project: A Project Management Perspective. Journal of Science and Engineering Research, 1(01), 21-37.", link: "https://doi.org/10.70008/jeser.v1i01.38" },
  { id: 18, text: "Nayyar, A., & Puri, V. (2016). Smart farming: IoT based smart sensors agriculture stick for live temperature and moisture monitoring using Arduino, cloud computing & solar technology. Communication and Computing Systems, NA(NA), 673-680.", link: "https://doi.org/10.1201/9781315364094-121" },
  { id: 19, text: "Okafor, N. U., & Delaney, D. (2019). Considerations for system design in IoT-based autonomous ecological sensing. Procedia Computer Science, 155(NA), 258-267.", link: "https://doi.org/10.1016/j.procs.2019.08.037" },
  { id: 20, text: "Pasika, S., & Gandla, S. T. (2020). Smart water quality monitoring system with cost-effective using IoT. Heliyon, 6(7), e04096-NA.", link: "https://doi.org/10.1016/j.heliyon.2020.e04096" },
  { id: 21, text: "Addabbo, P., Focareta, M., Marcuccio, S., Votto, C., & Ullo, S. L. (2016). Contribution of Sentinel-2 data for applications in vegetation monitoring. ACTA IMEKO, 5(2), 44-54.", link: "https://doi.org/10.21014/acta_imeko.v5i2.352" },
  { id: 22, text: "Al-Arafat, M., Kabir, M. E., Morshed, A. S. M., & Islam, M. M. (2025). Artificial Intelligence in Project Management: Balancing Automation and Human Judgment. Frontiers in Applied Engineering and Technology, 2(01), 18-29.", link: "https://doi.org/10.70937/faet.v1i02.47" },
  { id: 23, text: "Ali, S., Tirumala, S. S., & Sarrafzadeh, A. (2014). SVM aggregation modelling for spatio-temporal air pollution analysis. 17th IEEE International Multi Topic Conference 2014, NA(NA), 249-254.", link: "https://doi.org/10.1109/inmic.2014.7097346" },
  { id: 24, text: "Alzahrani, A. I. A., Chauhdary, S. H., & Alshdadi, A. A. (2023). Internet of Things (IoT)-Based Wastewater Management in Smart Cities. Electronics, 12(12), 2590-2590.", link: "https://doi.org/10.1109/inmic.2014.7097347" },
  { id: 25, text: "Amado, T. M., & Dela Cruz, J. C. (2018). TENCON - Development of Machine Learning-based Predictive Models for Air Quality Monitoring and Characterization. TENCON 2018 - 2018 IEEE Region 10 Conference, NA(NA), 668-672.", link: "https://doi.org/10.1109/tencon.2018.8650518" },
  { id: 26, text: "Ameer, S., Shah, M. A., Khan, A., Song, H., Maple, C., Islam, S., & Asghar, M. N. (2019). Comparative Analysis of Machine Learning Techniques for Predicting Air Quality in Smart Cities. IEEE Access, 7(NA), 128325-128338.", link: "https://doi.org/10.1109/access.2019.2925082" },
  { id: 27, text: "Blythe, J. M., & Johnson, S. D. (2018). The Consumer Security Index for IoT: A protocol for developing an index to improve consumer decision making and to incentivize greater security provision in IoT devices. Living in the Internet of Things: Cybersecurity of the IoT - 2018, NA(NA), 1-7.", link: "https://doi.org/10.1049/cp.2018.0004" },
  { id: 28, text: "Budiarti, R. P. N., Sukaridhoto, S., Hariadi, M., & Purnomo, M. H. (2019). Big Data Technologies using SVM (Case Study: Surface Water Classification on Regional Water Utility Company in Surabaya). 2019 International Conference on Computer Science, Information Technology, and Electrical Engineering (ICOMITEE), NA(NA), 94-101.", link: "https://doi.org/10.1109/icomitee.2019.8920823" },
  { id: 29, text: "Campelo, J. C., Capella, J. V., Ors, R., Peris, M., & Bonastre, A. (2022). IoT Technologies in Chemical Analysis Systems: Application to Potassium Monitoring in Water. Sensors (Basel, Switzerland), 22(3), 842-842.", link: "https://doi.org/10.3390/s22030842" },
  { id: 30, text: "Capella, J. V., Bonastre, A., Campelo, J. C., Ors, R., & Peris, M. (2020). IoT & environmental analytical chemistry: Towards a profitable symbiosis. Trends in Environmental Analytical Chemistry, 27(NA), e00095-NA.", link: "https://doi.org/10.1016/j.teac.2020.e00095" },
  { id: 31, text: "Capella, J. V., Bonastre, A., Ors, R., & Peris, M. (2019). A New Application of Internet of Things and Cloud Services in Analytical Chemistry: Determination of Bicarbonate in Water. Sensors (Basel, Switzerland), 19(24), 5528-NA.", link: "https://doi.org/10.3390/s19245528" },
  { id: 32, text: "Carpenter, S. R. (2005). Eutrophication of aquatic ecosystems: Bistability and soil phosphorus. Proceedings of the National Academy of Sciences of the United States of America, 102(29), 10002-10005.", link: "https://doi.org/10.1073/pnas.0503959102" },
  { id: 33, text: "Corbellini, S., Di Francia, E., Grassini, S., Iannucci, L., Lombardo, L., & Parvis, M. (2018). Cloud based sensor network for environmental monitoring. Measurement, 118(NA), 354-361.", link: "https://doi.org/10.1016/j.measurement.2017.09.049" },
  { id: 34, text: "Dang, C.-L., Yang, J., Zhang, X.-y., & Li, S.-F. (2008). The application of the Fuzzy Attenuation model in the evaluation of water quality in the Yangtze River. 2008 International Conference on Machine Learning and Cybernetics, 3(NA), 1474-1479.", link: "https://doi.org/10.1109/icmlc.2008.4620638" },
  { id: 35, text: "Demetillo, A. T., Japitana, M. V., & Taboada, E. B. (2019). A system for monitoring water quality in a large aquatic area using wireless sensor network technology. Sustainable Environment Research, 29(1), 1-9.", link: "https://doi.org/10.1186/s42834-019-0009-4" },
  { id: 36, text: "Duisebekova, K. S., Sarsenova, Z. N., Pyagay, V. T., Tuyakova, Z. N., Duzbayev, N. T., Aitmagambetov, A. Z., & Amanzholova, S. T. (2019). Environmental monitoring system for analysis of climatic and ecological changes using LoRa technology. Proceedings of the 5th International Conference on Engineering and MIS, NA(NA), 15-16.", link: "https://doi.org/10.1145/3330431.3330446" },
  { id: 37, text: "Erger, C., & Schmidt, T. C. (2014). Disk-based solid-phase extraction analysis of organic substances in water. TrAC Trends in Analytical Chemistry, 61(NA), 74-82.", link: "https://doi.org/10.1016/j.trac.2014.05.006" },
  { id: 38, text: "Fuentes, H., & Mauricio, D. (2020). Smart water consumption measurement system for houses using IoT and cloud computing. Environmental monitoring and assessment, 192(9), 602-602.", link: "https://doi.org/10.1007/s10661-020-08535-4" },
  { id: 39, text: "Hosseini, M., McNairn, H., Mitchell, S., Davidson, A., & Robertson, L. D. (2019). IGARSS - Comparison of Machine Learning Algorithms and Water Cloud Model for Leaf Area Index Estimation Over Corn Fields. IGARSS 2019 - 2019 IEEE International Geoscience and Remote Sensing Symposium, NA(NA), 6267-6270.", link: "https://doi.org/10.1109/igarss.2019.8900445" },
  { id: 40, text: "Imen, S., Chang, N.-B., Yang, Y. J., & Golchubian, A. (2018). Developing a Model-Based Drinking Water Decision Support System Featuring Remote Sensing and Fast Learning Techniques. IEEE systems journal, 12(2), 1358-1368.", link: "https://doi.org/10.1109/jsyst.2016.2538082" },
  { id: 41, text: "Islam, A., Khan, R. H., & Syeed, M. M. M. (2020). ICCA - A Smart and Integrated Surface Water Monitor System Architecture: Bangladesh Perspective. Proceedings of the International Conference on Computing Advancements, NA(NA), 1-6.", link: "https://doi.org/10.1145/3377049.3377103" },
  { id: 42, text: "Jovanovska, E. M., & Davcev, D. (2020). No pollution Smart City Sightseeing Based on WSN Monitoring System. 2020 Sixth International Conference on Mobile And Secure Services (MobiSecServ), NA(NA), 1-6.", link: "https://doi.org/10.1109/mobisecserv48690.2020.9042959" },
  { id: 43, text: "Kazemi, N., Abdolrazzaghi, M., Musilek, P., & Daneshmand, M. (2020). A Temperature-Compensated High-Resolution Microwave Sensor Using Artificial Neural Network. IEEE Microwave and Wireless Components Letters, 30(9), 919-922.", link: "https://doi.org/10.1109/lmwc.2020.3012388" },
  { id: 44, text: "Kortazar, L., Saez, J., Agirre, J., Izaguirre, J. K., & Fernández, L. A. (2014). Application of multivariate analysis to the turbidimetric determination of sulphate in seawater. Anal. Methods, 6(10), 3510-3514.", link: "https://doi.org/10.1039/c4ay00335g" }
];

const ProposalReview: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 space-y-16 md:space-y-24">
      
      {/* Project Proposal Section */}
      <section>
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-uni-900 dark:text-white mb-4 flex items-center justify-center gap-3">
              <FileText className="text-uni-accent w-8 h-8 md:w-12 md:h-12" />
              Project Proposal
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Review our comprehensive project proposal document directly below.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl p-4 md:p-8 border border-gray-200 dark:border-slate-700 shadow-xl"
        >
          <div className="rounded-xl overflow-hidden bg-white shadow-inner border border-gray-200 dark:border-slate-600 aspect-[3/4] md:aspect-video relative w-full">
            <iframe 
              src="https://drive.google.com/file/d/12WLZ4ZPGPHegVtU6AIYjKqcMrGsFk1Bm/preview" 
              title="Project Proposal PDF" 
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="autoplay"
            ></iframe>
          </div>
        </motion.div>
      </section>

      {/* Literature Review Section */}
      <section>
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-uni-900 dark:text-white mb-4 flex items-center justify-center gap-3">
              <BookOpen className="text-uni-accent w-8 h-8 md:w-12 md:h-12" />
              Literature Review
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              A curated list of research papers, articles, and references that form the foundation of our study.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm min-w-full md:min-w-[800px]">
              <thead>
                <tr className="bg-uni-900 dark:bg-slate-950 text-white border-b border-gray-200 dark:border-slate-600">
                  <th className="p-4 w-12 text-center font-bold uppercase tracking-wider text-xs">#</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-xs">Citation Details</th>
                  <th className="p-4 w-48 font-bold uppercase tracking-wider text-xs hidden md:table-cell">DOI / Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                {literatureReviews.map((review) => (
                  <tr key={review.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-center font-mono text-gray-500 dark:text-gray-400 align-top font-semibold">
                      {review.id}
                    </td>
                    <td className="p-4 text-gray-700 dark:text-gray-300 font-serif leading-relaxed text-sm">
                      {review.text}
                      {/* Mobile Link View */}
                      {review.link && review.link !== "https://doi.org/NA" && (
                        <a 
                          href={review.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex items-center gap-1 mt-3 text-uni-accent md:hidden text-[11px] font-sans font-bold uppercase tracking-wider"
                        >
                          <ExternalLink size={12} /> View Source
                        </a>
                      )}
                    </td>
                    <td className="p-4 hidden md:table-cell align-middle">
                      {review.link && review.link !== "https://doi.org/NA" ? (
                        <a 
                          href={review.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center gap-1 text-uni-accent dark:text-uni-darkAccent hover:underline text-xs font-mono break-all"
                        >
                          <ExternalLink size={12} className="flex-shrink-0" />
                          {review.link.replace('https://doi.org/', '')}
                        </a>
                      ) : (
                        <span className="text-gray-400 text-xs italic">Not Available</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default ProposalReview;
