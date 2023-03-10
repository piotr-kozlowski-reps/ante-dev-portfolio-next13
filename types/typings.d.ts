import gsap from "gsap";

export type TWhichSectionIsActive = {
  home: boolean;
  about: boolean;
  projects: boolean;
  contact: boolean;
};

export type TSliderData = {
  mainTitle: string;
  additionalInfo: string;
  percentage: number;
};

export type TAddSliderToAnimation = (el: {
  element: React.RefObject<HTMLDivElement>;
  percentage: number;
}) => void;

export type TDetailsInfoSet = {
  // slidersData: TSliderData[];
  logoImageURL: string;
  clipPathName: string;
  sectionPurposeName: string;
  paragraphText: string;
  sliders: TSliderData[];
  isFirstSectionThenNoTopMargin: boolean;
};

export type TCredentialsInfoSet = {
  backgroundTopImgUrl: string;
  backgroundTopLineImgUrl: string;
  portraitImgUrl: string;
  credentialText: string;
  backgroundBottomImgUrl: string;
};

export type TTimelineFunctionsToBeNested = () => gsap.core.Timeline;

export type TMediaSizeNames = "mobile" | "tablet" | "desktop";

/**
 * @param {String} numberImageURL url to file with number image
 * @param {TProjectImage} projectImages needs 4 elements: 3 desktop long images and 1 mobile
 * @param {TProjectInfo} projectInfo object with project information
 * @param {boolean} isClickableGithubIcon 
 * @param {string} githubURL 

 */
export type TProjectDetails = {
  numberImageURL: string;
  projectImages: TProjectImage[];
  projectInfo: TProjectInfo;
};

/**
 * @param {string} projectName
 * @param {string} projectDescription
 * @param {string} projectTechnologiesUsed
 */
export type TProjectInfo = {
  projectName: string;
  projectDescription: string;
  projectTechnologiesUsed: string;
  isClickableGithubIcon: boolean;
  githubURL: string;
  isClickableSeeWWWIcon: boolean;
  seeWWWURL: string;
};

/**
 * @param {String} imageUrl url to image file
 * @param {number} width width of image in pixels
 * @param {number} height height of image in pixels
 * @description !! remember first 3 images are big desktop ones, 4th is narrower /mobile
 */
export type TProjectImage = {
  imageUrl: string;
  width: number;
  height: number;
};
