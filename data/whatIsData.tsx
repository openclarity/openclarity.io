import { ImgPaths } from "../types/enums";

export const whatIsData = [
  {
    title: "FunctionClarity",
    description:
      "FunctionClarity is an open source tool that provides a framework for signing and validating serverless cloud function artifacts (images or code) utilizing various signing techniques, including keyless.",
    keyCapabilities: [
      "Combined from CLI for signing and serverless infrastructure for validation",
      "Multi-cloud support (GCP, AWS, Azure)",
      "Keyless and key-pair support",
      "Multiple validation feedback support (detect, block, and notification)",
    ],
    githubLink: "https://github.com/openclarity/functionclarity",
    documentationLink: "https://github.com/openclarity/functionclarity/blob/main/README.md",
    mainColor: "#f0ad42",
    thumbnail: ImgPaths.DefaultThumbnail,
    diagram: ImgPaths.FunctionClarityDiagram,
    diagramHeight: '603px',
    videoID: "6313395920112",
  },

  {
    title: "KubeClarity",
    description:
      "KubeClarity is a tool for detection and management of software bills of materials (SBOMs) and vulnerabilities in container images and filesystems. It scans both runtime Kubernetes clusters and CI/CD pipelines for enhanced software supply-chain security. ",
    keyCapabilities: [
      "SBOM and vulnerability detection",
      "Comprehensive dashboard for SBOM analysis",
      "Pluggable architecture",
    ],
    githubLink: "https://github.com/openclarity/kubeclarity",
    documentationLink:
      "https://github.com/openclarity/kubeclarity/blob/main/README.md",
    mainColor: "#52BAE6",
    thumbnail: ImgPaths.DefaultThumbnail,
    diagram: ImgPaths.KubeClarityDiagram,
    diagramHeight: '569px',
    videoID: "6313395145112",
  },
  {
    title: "APIClarity",
    description:
      "APIClarity is an open source tool for APIs that helps you visualize and identify potential risks around API usage in your cloud native environments. It helps build the OpenAPI specifications for all APIs in your environment, then helps track drift, shadow or zombie usage for those APIs. You can then use this information to build your application security posture. ",
    keyCapabilities: [
      "Quick and easy API visibility and analysis",
      "Comprehensive dashboard to monitor APIs",
      "Designed for developers, loved by security teams",
    ],
    githubLink: "https://github.com/openclarity/apiclarity.io",
    documentationLink:
      "https://github.com/openclarity/apiclarity.io/blob/main/README.md",
    mainColor: "#73B736",
    thumbnail: ImgPaths.APIClarityThumbnail,
    diagram: ImgPaths.APIClarityDiagram,
    diagramHeight: '558px',
    videoID: "6313395301112",
  },
];
