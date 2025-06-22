import { useTranslation } from 'react-i18next';

// Defina as chaves de tradução para type safety
type TranslationKeys =
    // Navegação e UI básica
    | 'welcome'
    | 'about'
    | 'projects'
    | 'contact'
    | 'home'
    | 'skills'
    | 'experience'
    | 'formation'
    | 'portfolio'
    | 'languageSwitch'
    | 'online'
    | 'competence'

    // Home Page
    | 'helloEveryone'
    | 'fullStackDeveloper'
    | 'myTechStack'
    | 'messageToRecruiters'
    | 'recruiterMessagePt1'
    | 'technicalExcellence'
    | 'recruiterMessagePt2'
    | 'valueDelivery'
    | 'recruiterMessagePt3'
    | 'backend'
    | 'frontend'
    | 'database'
    | 'cloud'
    | "title"
    | "description"
    | "staticLocation"
    | "googleMapsUnavailable"
    | "configureApiKey"
    | "curitibaLocation"
    | "coordinates"
    | "timezone"
    | "contactButton"
    | "brazilSouthRegion"
    | "remoteNational"
    | "remoteInternational"
    | "curitibaLocal"
    | "hybrid"
    | "slogan"

    // Formation Page
    | 'formationTitle'
    | 'systemsDevelopmentTitle'
    | 'systemsInstitution'
    | 'competenciesDeveloped'
    | 'systemsDescription'
    | 'philosophyTitle'
    | 'philosophyInstitution'
    | 'competitiveDifferential'
    | 'philosophyDescription'
    | 'backendDevelopment'
    | 'frontendDevelopment'
    | 'databaseCloud'
    | 'devopsArchitecture'
    | 'strategicThinking'
    | 'innovationEthics'
    | 'philosophicalQuote'
    | 'skills001'
    | 'skills002'
    | 'skills003'
    | 'skills004'
    | 'skills005'
    | 'skills006'
    | 'skills007'
    | 'skills008'

    // Experience Page
    | 'experienceTitle'
    | 'executiveSummary'
    | 'yearsExperience'
    | 'recordsProcessed'
    | 'timeReduction'
    | 'schoolsConnected'
    | 'concurrentUsers'
    | 'specialistIn'
    | 'specialistIn001'
    | 'available'
    | 'availableLocation'
    | 'focus'
    | 'focusArea'
    | 'currentJobTitle'
    | 'currentJobDescription'
    | 'currentJobPeriod'
    | 'currentJobAchievement1'
    | 'currentJobAchievement2'
    | 'currentJobAchievement3'
    | 'currentJobAchievement3b'
    | 'currentJobAchievement3c'
    | 'currentJobAchievement3d'
    | 'currentJobAchievement4'
    | 'currentJobAchievement4b'
    | 'currentJobAchievement4c'
    | 'previousJobTitle'
    | 'previousJobDescription'
    | 'previousJobPeriod'
    | 'technicalCommunication'
    | 'mentoring'
    | 'problemSolving'
    | 'criticalThinking'
    | 'previousJobAchievement1'
    | 'previousJobAchievement2'
    | 'previousJobAchievement3'
    | 'developmentActivity'
    | 'activityDescription'
    | 'consistency'
    | 'and'
    | 'discipline'
    | 'activityDescriptionEnd'
    | 'commitStreak'
    | 'languagesActivity'
    | 'professionalismEvidence'
    | 'professionalismDescription'
    | 'techStackTitle'
    | 'cloudDevops'

    // Projects Page
    | 'projectsTitle'
    | 'confidentialProjects'
    | 'confidentialDescription'
    | 'confidential'
    | 'mainMetrics'
    | 'results'
    | 'stack'
    | 'openSourceTitle'
    | 'openSourceDescription'
    | 'openSourceNote'
    | 'technicalDiscussionTitle'
    | 'technicalDiscussionDescription'
    | 'futureProject1'
    | 'futureProject2'
    | 'futureProject3'
    | 'interviewTopic1'
    | 'interviewTopic2'
    | 'interviewTopic3'
    | 'interviewTopic4'
    | 'metrics001'
    | 'metrics002'
    | 'metrics003'
    | 'metrics004'
    | 'metrics005'
    | 'metrics006'
    | 'metrics007'
    | 'metrics008'
    | 'metrics009'
    | 'metrics010'
    | 'metrics011'
    | 'metrics012'
    | 'metrics013'
    | 'metrics014'
    | 'metrics015'
    | 'metrics016'

    // Competence Page
    | 'competenceTitle'
    | 'backendDev'
    | 'frontendDev'
    | 'databaseStorage'
    | 'cloudInfrastructure'
    | 'technologies'
    | 'fourPlusYears'
    | 'threePlusYears'
    | 'twoPlusYears'
    | 'onePlusYear'
    | 'methodologiesPractices'
    | 'patternsBestPractices'
    | 'cleanArchDDD'
    | 'cqrsEventSourcing'
    | 'designPatterns'
    | 'testDrivenDev'
    | 'scrumAgile'
    | 'codeReview'
    | 'continuousIntegration'
    | 'apiFirstDev'

    // Tech Evolution Journey
    | 'techEvolutionJourney'
    | 'growthOverYears'
    | 'dotnetInitiation'
    | 'reactSpecialization'
    | 'microservicesArch'
    | 'cloudDevOps'
    | 'aiMlIntegration'

    // Enterprise Experience
    | 'enterpriseExp'
    | 'fivePlusProjects'
    | 'deliveredSuccess'
    | 'twoPlusMillionUsers'
    | 'impactedSolutions'
    | 'eightyFiveReduction'
    | 'processingTime'

    // Learning and Goals
    | 'currentlyLearning'
    | 'continuousGrowth'
    | 'machineLearning'
    | 'kubernetes'
    | 'serverlessArch'
    | 'terraformIaC'
    | 'nextGoals'
    | 'evolutionRoadmap'
    | 'azureArchitect'
    | 'kafkaStreaming'
    | 'graphqlAdvanced'
    | 'webAssembly'

    // Footer/Final
    | 'alwaysEvolving'
    | 'evolutionDescription'
    | 'githubPortfolio'

    // Contact Page
    | 'contactTitle'
    | 'readyForChallenges'
    | 'heroDescription'
    | 'sendEmail'
    | 'availableImmediately'
    | 'remoteOrCuritiba'
    | 'onlineInterviews'
    | 'contactInformation'
    | 'primaryEmail'
    | 'whatsappPhone'
    | 'professionalLinks'
    | 'linkedinTooltip'
    | 'githubTooltip'
    | 'downloadCvTooltip'
    | 'availability'
    | 'preferredSchedule'
    | 'weekdaysSchedule'
    | 'onlineInterviewsPreferred'
    | 'responseTime24h'
    | 'opportunitiesOfInterest'
    | 'fullStackDeveloper'
    | 'solutionsArchitect'
    | 'techLead'
    | 'dotnetReactProjects'
    | 'professionalQuote';

export const useTypedTranslation = () => {
    const { t, i18n } = useTranslation();

    return {
        t: (key: TranslationKeys) => t(key),
        i18n,
        changeLanguage: i18n.changeLanguage,
        currentLanguage: i18n.language
    };
};
