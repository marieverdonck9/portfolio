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
    name: "Characterizing the fitness landscape of adaptation using high-throughput genome editing",
    date: "September - June 2023",
    link: "https://voneschlab.sites.vib.be/en",
    skills: [
      "CRISPR/Cas9 genome engineering",
      "Next-generation sequencing",
      "Bacterial and yeast transformation",
      "Molecular cloning",
    ],
    featured: true,
    description:
      "Developed a high-throughput genome-editing pipeline to study how combinations of mutations shape adaptive fitness in S. cerevisiae. Work combined CRISPR engineering and NGS analysis to map genotype-to-phenotype relationships — skills directly applicable to target discovery and functional screening in therapeutics R&D.",
    imagePath: fitness_landscape,
  },
  {
    name: "Enhancing bTB Diagnosis: CXCL9 Detection via Quartz Crystal Microbalance",
    date: "January 2024",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Enhancing%20bTB%20Diagnosis%3A%20CXCL9%20Detection%20via%20Quartz%20Crystal%20Microbalance%20.pdf",
    skills: ["Writing Sample"],
    description:
      "Project proposal for a diagnostic biosensor detecting CXCL9 as an early immune biomarker for bTB using Quartz Crystal Microbalance. Emphasizes assay design, antigen selection and translational feasibility — useful experience for diagnostic R&D roles.",
    imagePath: cxcl9,
  },
  {
    name: "Resistance development of Pseudomonas aeruginosa over the past half-century",
    date: "May 2023",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Resistance%20development%20of%20Pseudomonas%20aeruginosa%20over%20the%20past%20half-century.pdf",
    skills: [
      "Genomic Analysis",
      "Data Quality Assurance",
      "Bioinformatics Tools",
    ],
    description:
      "Investigated antibiotic resistance development in Pseudomonas aeruginosa. Using whole-genome analysis and next-generation sequencing, I compared strains isolated before and after 1940 to study the evolution of antibiotic resistance. The analysis focused on aminoglycoside and fluoroquinolone resistance mechanisms, examining the presence of aminoglycoside-modifying enzymes and mutations in key proteins.",
    imagePath: pseudomonas_aeruginosa,
  },
  {
    name: "3D analysis of the Fv structure of the IgE SPE-7 in complex with acenaphthenequinone",
    date: "May 2023",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Immunology_1OAX_MarieVerdonck.pdf",
    skills: ["Structural Biology", "PyMOL"],
    featured: true,
    description:
      "Structural analysis of an antibody–antigen complex using PyMOL to identify complementarity-determining regions and infer binding interfaces. Demonstrates structural intuition relevant to antibody engineering and therapeutic design.",
    imagePath: d_display,
  },
  {
    name: "Histology of pig and chicken lymphoid organs",
    date: "May 2023",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Histology%20of%20pig%20and%20chicken%20lymphoid%20organs.pdf",
    skills: ["Histological Analysis", "Microscopy Techniques"],
    description:
      "Delved into histology as a vital component of my immunology practicals. Primary focus was on the examination of histological sections from pig and chicken lymphoid organs, with an emphasis on understanding how these samples were prepared.",
    imagePath: chicken_bursa,
  },
  {
    name: "Summary & Critique of 'An adaptive interaction between cell type and metabolism drives ploidy evolution in a wild yeast' presented by John Crandall",
    date: "November 2022",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/MarieVerdonck_Seminar%20Review%20Paper%20Assignment.pdf",
    skills: ["Writing Sample"],
    description:
      "Provided a summary and critique of John Crandall's compelling findings on the adaptive interaction between cell type and metabolism driving ploidy evolution in wild yeast. This research significantly contributes to unraveling the genotype-to-phenotype map in yeasts, a crucial objective in genetics and evolutionary biology. As a genetics student with a keen interest in biotechnology, gaining mechanistic insights into environment-cell type fitness interactions was particularly exciting.",
    imagePath: ploidy,
  },
  {
    name: "Summary & Critique of 'Understanding the Cas13 dependent and independent silencing in plants' presented by Divya Mishra",
    date: "November 2022",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/MarieVerdonck_WrittenReport.pdf",
    skills: ["Writing Sample"],
    description:
      "Composed a summary and critique of Divya Mishra's presentation, exploring her groundbreaking discovery of Cas13-dependent and independent RNA silencing. This innovative approach holds promise for advancements in plant engineering and virus treatment. As a genetics student deeply interested in biotechnology's applications in animals, plants, and food, I found great satisfaction in learning about this novel process.",
    imagePath: crispr,
  },
  {
    name: "Antimicrobial production in nontoxigenic Clostridium botulinum",
    date: "February - June 2022",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Article%26Poster_Antimicrobial%20production%20in%20nontoxigenic%20Clostridium%20botulinum%202.pdf",
    skills: [
      "Genomic Analysis",
      "Microbiological Techniques",
      "Microscopy Techniques",
    ],
    featured: true,
    description:
      "Identified bacteriocin-like antimicrobial compounds in nontoxigenic Clostridium botulinum using genome mining and phenotypic assays. This project highlights experience in linking genomic signals to functional assays — a valuable skill for early-stage therapeutic discovery.",
    imagePath: antimicrobial,
  },
  {
    name: "Applying Systems Biology to Give Lone Genes a Meaning",
    date: "August-December 2021",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Applying%20Systems%20Biology%20to%20Give%20Lone%20Genes%20a%20Meaning.pdf",
    skills: ["Cytoscape", "Overrepresentation analysis", "Network Analysis"],
    description:
      "Delved into Systems Biology, exploring 25 specific genes. Using statistical tools and databases like BiNGO, Reactome, Panther, UniProtKB, and more, I constructed a network in Cytoscape focused on the human immune system. Comparing gene expression in colorectal cancer and normal tissue, I found lower expression of apoptotic genes and the overexpression of SOCS1 and SMAD3, promoting tumor formation. This work highlighted the dynamic nature of biological systems and their potential in cancer treatment.",
    imagePath: network,
  },
  {
    name: "Process Control: Heat Exchange in Two Tanks",
    date: "September - November 2021",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Project%20T%3A%20Heat%20Exchange%20in%20Two%20Tanks.pdf",
    skills: ["MATLAB", "Dynamic Process Modeling", "Feedback Control"],
    description:
      "Developed a model to simulate and analyze a heat exchange system between two tanks to understand the basics of modeling and linearization of dynamic processes and gain knowledge of process control. I explored the power and limitations of the feedback principle, recognizing how instability can manifest in dynamic systems.",
    imagePath: tanks,
  },
  {
    name: "Analyzing how transposon Tn3E.F. influences antibiotic resistance in E. coli strains S17.1 and C2110",
    date: "November 2021",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Analyzing%20how%20transposon%20Tn3E.F.%20influences%20antibiotic%20resistance%20in%20E.%20coli%20strains%20S17.1%20and%20C2110.pdf",
    skills: ["Genetic Manipulation", "Molecular Biology Techniques"],
    description:
      "Used transposons to introduce mutations in E. coli to alter the resistance characteristics of the target plasmid. The goal was to investigate the mutagenic capabilities of transposons and their broader scientific relevance.",
    imagePath: transposon,
  },
  {
    name: "Using the QuickChange method to introduce mutations into algL whilst adding a restriction site for BpmI",
    date: "November 2021",
    link: "https://github.com/marieverdonck9/portfolio_documents/blob/main/Using%20the%20QuickChange%20method%20to%20introduce%20mutations%20into%20algL%20whilst%20adding%20a%20restriction%20site%20for%20BpmI%20.pdf",
    skills: ["Genetic Manipulation", "Molecular Biology Techniques"],
    description:
      "Conducted site-directed mutagenesis to introduce specific genetic mutations in Pseudomonas fluorescens. The goal was to investigate genetic modification techniques, contributing to a deeper understanding of precise genetic alterations and their broader applications.",
    imagePath: addgene_plasmid,
  },
];
