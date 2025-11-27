import transposon from "../assets/projects/transposon.jpeg";
import tanks from "../assets/projects/tanks.jpeg";
import d_display from "../assets/projects/3d_display.jpeg";
import addgene_plasmid from "../assets/projects/addgene_plasmid.jpeg";
import antimicrobial from "../assets/projects/antimicrobial.jpeg";
import chicken_bursa from "../assets/projects/chicken_bursa.jpeg";
import crispr from "../assets/projects/crispr.jpeg";
import cxcl9 from "../assets/projects/cxcl9.jpeg";
import fitness_landscape from "../assets/projects/fitness_landscape.jpeg";
import network from "../assets/projects/network.jpeg";
import ploidy from "../assets/projects/ploidy.jpeg";
import pseudomonas_aeruginosa from "../assets/projects/pseudomonas_aeruginosa.jpeg";

export const projectInfo = [
  {
    name: "Mapping Adaptive Fitness Landscapes via High-Throughput Genome Editing",
    date: "September 2023 – June 2024",
    link: "https://voneschlab.sites.vib.be/en",
    skills: [
      "CRISPR/Cas9 genome engineering",
      "Next-generation sequencing",
      "Bacterial and yeast transformation",
      "Molecular cloning",
    ],
    featured: true,
    description:
      "Developed a scalable CRISPR/Cas9 genome-editing pipeline to systematically characterize how combinatorial mutations shape adaptive fitness in S. cerevisiae. Integrated NGS analysis with quantitative phenotyping to map genotype-to-phenotype relationships, establishing foundational approaches for functional genomics in therapeutic target discovery.",
    imagePath: fitness_landscape,
  },
  {
    name: "CXCL9-Based Biosensor for Early Bovine Tuberculosis Detection",
    date: "January 2024",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Enhancing%20bTB%20Diagnosis%3A%20CXCL9%20Detection%20via%20Quartz%20Crystal%20Microbalance%20.pdf",
    skills: ["Biosensor Design", "Immunoassay Development"],
    description:
      "Designed a diagnostic biosensor platform utilizing Quartz Crystal Microbalance technology to detect CXCL9 as an early immune biomarker for bovine tuberculosis. Project encompassed antigen selection, assay optimization, and translational feasibility assessment for field deployment.",
    imagePath: cxcl9,
  },
  {
    name: "Genomic Analysis of Antibiotic Resistance Evolution in Pseudomonas aeruginosa",
    date: "May 2023",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Resistance%20development%20of%20Pseudomonas%20aeruginosa%20over%20the%20past%20half-century.pdf",
    skills: ["Genomic Analysis", "Bioinformatics", "Comparative Genomics"],
    description:
      "Conducted whole-genome comparative analysis of P. aeruginosa strains isolated across a 50-year span to characterize the molecular evolution of aminoglycoside and fluoroquinolone resistance mechanisms, identifying key mutations and resistance gene acquisitions.",
    imagePath: pseudomonas_aeruginosa,
  },
  {
    name: "Structural Analysis of IgE SPE-7 Antibody–Antigen Complex",
    date: "May 2023",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Immunology_1OAX_MarieVerdonck.pdf",
    skills: ["Structural Biology", "PyMOL", "Protein Structure Analysis"],
    featured: true,
    description:
      "Performed computational structural analysis of the IgE SPE-7 Fv region in complex with acenaphthenequinone using PyMOL. Characterized complementarity-determining regions and binding interfaces, applying structural immunology principles relevant to antibody engineering and therapeutic design.",
    imagePath: d_display,
  },
  {
    name: "Comparative Histology of Lymphoid Organs in Agricultural Species",
    date: "May 2023",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Histology%20of%20pig%20and%20chicken%20lymphoid%20organs.pdf",
    skills: [
      "Histological Analysis",
      "Light Microscopy",
      "Comparative Immunology",
    ],
    description:
      "Conducted histological characterization of primary and secondary lymphoid organs in porcine and avian models, analyzing tissue architecture and cellular composition to understand species-specific immune system organization.",
    imagePath: chicken_bursa,
  },
  {
    name: "Critical Review: Cell Type–Metabolism Interactions in Yeast Ploidy Evolution",
    date: "November 2022",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/MarieVerdonck_Seminar%20Review%20Paper%20Assignment.pdf",
    skills: [
      "Scientific Writing",
      "Critical Analysis",
      "Evolutionary Genetics",
    ],
    description:
      "Authored a comprehensive review and critical analysis of research demonstrating how cell type–metabolism interactions drive ploidy evolution in wild yeast, examining the mechanistic basis of environment-dependent fitness landscapes.",
    imagePath: ploidy,
  },
  {
    name: "Critical Review: Cas13-Mediated RNA Silencing Mechanisms in Plants",
    date: "November 2022",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/MarieVerdonck_WrittenReport.pdf",
    skills: ["Scientific Writing", "Critical Analysis", "RNA Biology"],
    description:
      "Analyzed and critically evaluated research on Cas13-dependent and Cas13-independent RNA silencing pathways in plants, assessing implications for precision plant engineering and antiviral therapeutic strategies.",
    imagePath: crispr,
  },
  {
    name: "Discovery of Bacteriocin-Like Antimicrobials in Nontoxigenic C. botulinum",
    date: "February – June 2022",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Article%26Poster_Antimicrobial%20production%20in%20nontoxigenic%20Clostridium%20botulinum%202.pdf",
    skills: ["Genome Mining", "Antimicrobial Assays", "Microbiology"],
    featured: true,
    description:
      "Identified and characterized novel bacteriocin-like antimicrobial compounds in nontoxigenic C. botulinum strains through genome mining and phenotypic validation assays. Demonstrated integration of computational prediction with experimental verification for antimicrobial discovery.",
    imagePath: antimicrobial,
  },
  {
    name: "Systems Biology Network Analysis of Immune Gene Dysregulation in Colorectal Cancer",
    date: "August – December 2021",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Applying%20Systems%20Biology%20to%20Give%20Lone%20Genes%20a%20Meaning.pdf",
    skills: ["Cytoscape", "Network Analysis", "Pathway Enrichment"],
    description:
      "Constructed and analyzed gene regulatory networks using Cytoscape to characterize immune system dysregulation in colorectal cancer. Identified differential expression of apoptotic regulators and tumor-promoting factors (SOCS1, SMAD3) through pathway enrichment analysis.",
    imagePath: network,
  },
  {
    name: "Dynamic Process Modeling and Control: Heat Exchange Systems",
    date: "September – November 2021",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Project%20T%3A%20Heat%20Exchange%20in%20Two%20Tanks.pdf",
    skills: ["MATLAB", "Dynamic Modeling", "Process Control"],
    description:
      "Developed mathematical models and implemented feedback control systems for coupled heat exchange tanks in MATLAB, analyzing system dynamics, linearization, and stability characteristics.",
    imagePath: tanks,
  },
  {
    name: "Transposon Mutagenesis for Antibiotic Resistance Profiling in E. coli",
    date: "November 2021",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Analyzing%20how%20transposon%20Tn3E.F.%20influences%20antibiotic%20resistance%20in%20E.%20coli%20strains%20S17.1%20and%20C2110.pdf",
    skills: [
      "Transposon Mutagenesis",
      "Bacterial Genetics",
      "Molecular Biology",
    ],
    description:
      "Applied Tn3-based transposon mutagenesis to generate insertional mutants in E. coli, characterizing altered antibiotic resistance profiles and investigating transposon-mediated genetic instability.",
    imagePath: transposon,
  },
  {
    name: "Site-Directed Mutagenesis of algL in Pseudomonas fluorescens",
    date: "November 2021",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Using%20the%20QuickChange%20method%20to%20introduce%20mutations%20into%20algL%20whilst%20adding%20a%20restriction%20site%20for%20BpmI%20.pdf",
    skills: ["Site-Directed Mutagenesis", "Molecular Cloning", "PCR"],
    description:
      "Executed QuickChange site-directed mutagenesis to introduce targeted mutations in the algL gene of P. fluorescens while simultaneously incorporating a BpmI restriction site for downstream cloning applications.",
    imagePath: addgene_plasmid,
  },
];
