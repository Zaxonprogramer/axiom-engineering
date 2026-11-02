import aerospaceImage from '../../../assets/images/projects/aerospace.jpg'
import driveModuleImage from '../../../assets/images/projects/drive-module.jpg'
import turbineImage from '../../../assets/images/projects/turbine.jpg'

const projects = {
  'aerospace-actuation-system': {
    number: '01',
    code: 'AX-ACT / 01',
    imageCode: 'AX-ACT-01',
    titleLine1: 'Aerospace',
    titleLine2: 'Actuation',
    titleLine3: 'System.',
    category: 'Precision Mechanics',
    year: '2026',
    image: aerospaceImage,
    heroDescription:
      'High-precision mechanical actuation architecture engineered for extreme loads, repeatable motion and demanding aerospace environments.',
    visualLabel: 'Precision Actuation Architecture',
    overviewTitle: 'Precision under',
    overviewMuted: 'extreme load.',
    overviewText1:
      'The system was developed around one central requirement: controlled mechanical movement under demanding structural loads without sacrificing precision or repeatability.',
    overviewText2:
      'Geometry, material selection, tolerance control and mechanical interfaces were developed as one integrated engineering system.',
    material: 'Ti-6Al-4V',
    tolerance: '± 0.02 mm',
    system: 'AX-042',
    status: 'Validated',
    discipline: 'Precision Mechanics',
    challengeTitle: 'Control motion.',
    challengeMuted: 'Eliminate uncertainty.',
    challengeText1:
      'Aerospace actuation systems operate inside narrow mechanical margins. Small deviations in geometry, load transfer or assembly tolerance can affect the performance of the entire mechanism.',
    challengeText2:
      'The architecture therefore prioritizes structural rigidity, controlled interfaces and predictable movement across the full operating range.',
    resultLine1: 'Engineered.',
    resultLine2: 'Validated.',
    resultLine3: 'Ready.',
    resultText:
      'A compact actuation architecture capable of maintaining precision, structural integrity and repeatable mechanical performance under demanding operating conditions.',
    nextSlug: 'autonomous-drive-module',
    nextNumber: '02',
    nextCategory: 'Mobility Systems',
    nextTitle: 'Autonomous Drive Module',
  },

  'autonomous-drive-module': {
    number: '02',
    code: 'AX-DRV / 02',
    imageCode: 'AX-DRV-02',
    titleLine1: 'Autonomous',
    titleLine2: 'Drive',
    titleLine3: 'Module.',
    category: 'Mobility Systems',
    year: '2026',
    image: driveModuleImage,
    heroDescription:
      'Compact electric drive architecture integrating mechanical systems, thermal management and intelligent control into one high-performance platform.',
    visualLabel: 'Integrated Electric Drive Platform',
    overviewTitle: 'Integrated by',
    overviewMuted: 'design.',
    overviewText1:
      'The drive module was developed as a compact mechanical platform capable of combining propulsion, thermal management and control hardware inside a tightly constrained package.',
    overviewText2:
      'Every interface was engineered around efficient load transfer, serviceability and predictable performance across demanding operating conditions.',
    material: 'Al 7075-T6',
    tolerance: '± 0.05 mm',
    system: 'AX-DRV',
    status: 'Prototype',
    discipline: 'Mobility Systems',
    challengeTitle: 'Package more.',
    challengeMuted: 'Compromise less.',
    challengeText1:
      'Autonomous mobility platforms demand high power density while leaving limited physical space for mechanical, electrical and thermal systems.',
    challengeText2:
      'The architecture balances structural performance, cooling paths and component accessibility without increasing unnecessary mass or complexity.',
    resultLine1: 'Compact.',
    resultLine2: 'Integrated.',
    resultLine3: 'Adaptive.',
    resultText:
      'A modular electric drive platform engineered to deliver efficient packaging, controlled thermal behavior and reliable mechanical performance.',
    nextSlug: 'industrial-turbine-assembly',
    nextNumber: '03',
    nextCategory: 'Energy Systems',
    nextTitle: 'Industrial Turbine Assembly',
  },

  'industrial-turbine-assembly': {
    number: '03',
    code: 'AX-TRB / 03',
    imageCode: 'AX-TRB-03',
    titleLine1: 'Industrial',
    titleLine2: 'Turbine',
    titleLine3: 'Assembly.',
    category: 'Energy Systems',
    year: '2025',
    image: turbineImage,
    heroDescription:
      'Performance-focused turbine architecture engineered around structural reliability, precision assembly and demanding continuous operation.',
    visualLabel: 'High-Performance Turbine Architecture',
    overviewTitle: 'Reliability at',
    overviewMuted: 'industrial scale.',
    overviewText1:
      'The turbine assembly was developed around long-term mechanical stability, controlled rotational geometry and serviceable component architecture.',
    overviewText2:
      'Structural interfaces and critical tolerances were engineered to maintain predictable performance across extended operating cycles.',
    material: 'Inconel 718',
    tolerance: '± 0.03 mm',
    system: 'AX-TRB',
    status: 'Production',
    discipline: 'Energy Systems',
    challengeTitle: 'Sustain performance.',
    challengeMuted: 'Control complexity.',
    challengeText1:
      'Industrial turbine systems operate under continuous mechanical and thermal stress where small deviations can accelerate wear and reduce system efficiency.',
    challengeText2:
      'The final architecture prioritizes rigid alignment, controlled assembly interfaces and maintainability throughout the operating lifecycle.',
    resultLine1: 'Reliable.',
    resultLine2: 'Serviceable.',
    resultLine3: 'Proven.',
    resultText:
      'A production-focused turbine assembly engineered for repeatable performance, controlled maintenance and long-term mechanical reliability.',
    nextSlug: 'aerospace-actuation-system',
    nextNumber: '01',
    nextCategory: 'Precision Mechanics',
    nextTitle: 'Aerospace Actuation System',
  },
}

export default projects