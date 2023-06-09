package com.pfe.pfebackend.api.mapper;

import com.pfe.pfebackend.api.dto.Semestre5DTO;
import com.pfe.pfebackend.api.entity.Semestre5;
import org.springframework.stereotype.Component;

@Component
public class Semestre5Mapper {
    public Semestre5 map(Semestre5DTO dto) {
        return Semestre5.builder()
                .studentNum(dto.getStudentNum())
                .coefUELanguesVivantes5(dto.getCoefUELanguesVivantes5())
                .noteFinaleUELanguesVivantes5(dto.getNoteFinaleUELanguesVivantes5())
                .coefUECultureEntreprise5(dto.getCoefUECultureEntreprise5())
                .noteFinaleUECultureEntreprise5(dto.getNoteFinaleUECultureEntreprise5())
                .coefUEOutilsDeBasePourIngenieur1(dto.getCoefUEOutilsDeBasePourIngenieur1())
                .noteFinaleUEOutilsDeBasePourIngenieur1(dto.getNoteFinaleUEOutilsDeBasePourIngenieur1())
                .coefUEHarmonisation(dto.getCoefUEHarmonisation())
                .noteFinaleUEHarmonisation(dto.getNoteFinaleUEHarmonisation())
                .cCConferencesIntroductionAuxTelecommunications(dto.getCCConferencesIntroductionAuxTelecommunications())
                .tPConferencesIntroductionAuxTelecommunications(dto.getTPConferencesIntroductionAuxTelecommunications())
                .partiel1ConferencesIntroductionAuxTelecommunications(dto.getPartiel1ConferencesIntroductionAuxTelecommunications())
                .partiel2ConferencesIntroductionAuxTelecommunications(dto.getPartiel2ConferencesIntroductionAuxTelecommunications())
                .projetConferencesIntroductionAuxTelecommunications(dto.getProjetConferencesIntroductionAuxTelecommunications())
                .rapportConferencesIntroductionAuxTelecommunications(dto.getRapportConferencesIntroductionAuxTelecommunications())
                .exposeConferencesIntroductionAuxTelecommunications(dto.getExposeConferencesIntroductionAuxTelecommunications())
                .stageConferencesIntroductionAuxTelecommunications(dto.getStageConferencesIntroductionAuxTelecommunications())
                .coefConferencesIntroductionAuxTelecommunications(dto.getCoefConferencesIntroductionAuxTelecommunications())
                .noteFinaleConferencesIntroductionAuxTelecommunications(dto.getNoteFinaleConferencesIntroductionAuxTelecommunications())
                .cCHarmonisationElectromagnetisme(dto.getCCHarmonisationElectromagnetisme())
                .tPHarmonisationElectromagnetisme(dto.getTPHarmonisationElectromagnetisme())
                .partiel1HarmonisationElectromagnetisme(dto.getPartiel1HarmonisationElectromagnetisme())
                .partiel2HarmonisationElectromagnetisme(dto.getPartiel2HarmonisationElectromagnetisme())
                .projetHarmonisationElectromagnetisme(dto.getProjetHarmonisationElectromagnetisme())
                .rapportHarmonisationElectromagnetisme(dto.getRapportHarmonisationElectromagnetisme())
                .exposeHarmonisationElectromagnetisme(dto.getExposeHarmonisationElectromagnetisme())
                .stageHarmonisationElectromagnetisme(dto.getStageHarmonisationElectromagnetisme())
                .coefHarmonisationElectromagnetisme(dto.getCoefHarmonisationElectromagnetisme())
                .noteFinaleHarmonisationElectromagnetisme(dto.getNoteFinaleHarmonisationElectromagnetisme())
                .cCHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getCCHarmonisationElectroniqueAnalogiqueEtNumerique())
                .tPHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getTPHarmonisationElectroniqueAnalogiqueEtNumerique())
                .partiel1HarmonisationElectroniqueAnalogiqueEtNumerique(dto.getPartiel1HarmonisationElectroniqueAnalogiqueEtNumerique())
                .partiel2HarmonisationElectroniqueAnalogiqueEtNumerique(dto.getPartiel2HarmonisationElectroniqueAnalogiqueEtNumerique())
                .projetHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getProjetHarmonisationElectroniqueAnalogiqueEtNumerique())
                .rapportHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getRapportHarmonisationElectroniqueAnalogiqueEtNumerique())
                .exposseHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getExposseHarmonisationElectroniqueAnalogiqueEtNumerique())
                .stageHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getStageHarmonisationElectroniqueAnalogiqueEtNumerique())
                .coefHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getCoefHarmonisationElectroniqueAnalogiqueEtNumerique())
                .noteFinaleHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getNoteFinaleHarmonisationElectroniqueAnalogiqueEtNumerique())
                .coefHarmonisationCalcul(dto.getCoefHarmonisationCalcul())
                .tPHarmonisationCalcul(dto.getTPHarmonisationCalcul())
                .partiel1HarmonisationCalcul(dto.getPartiel1HarmonisationCalcul())
                .partiel2HarmonisationCalcul(dto.getPartiel2HarmonisationCalcul())
                .projetHarmonisationCalcul(dto.getProjetHarmonisationCalcul())
                .rapportHarmonisationCalcul(dto.getRapportHarmonisationCalcul())
                .exposeHarmonisationCalcul(dto.getExposeHarmonisationCalcul())
                .stageHarmonisationCalcul(dto.getStageHarmonisationCalcul())
                .coefHarmonisationCalcul(dto.getCoefHarmonisationCalcul())
                .noteFinaleHarmonisationCalcul(dto.getNoteFinaleHarmonisationCalcul())
                .cCProjetElectronique(dto.getCCProjetElectronique())
                .tPProjetElectronique(dto.getTPProjetElectronique())
                .partiel1ProjetElectronique(dto.getPartiel1ProjetElectronique())
                .partiel2ProjetElectronique(dto.getPartiel2ProjetElectronique())
                .projetProjetElectronique(dto.getProjetProjetElectronique())
                .rapportProjetElectronique(dto.getRapportProjetElectronique())
                .exposeProjetElectronique(dto.getExposeProjetElectronique())
                .stageProjetElectronique(dto.getStageProjetElectronique())
                .coefProjetElectronique(dto.getCoefProjetElectronique())
                .noteFinaleProjetElectronique(dto.getNoteFinaleProjetElectronique())
                .coefUEElectronique(dto.getCoefUEElectronique())
                .noteFinaleUEElectronique(dto.getNoteFinaleUEElectronique())
                .cCElectroniqueAnalogique(dto.getCCElectroniqueAnalogique())
                .tPElectroniqueAnalogique(dto.getTPElectroniqueAnalogique())
                .partiel1ElectroniqueAnalogique(dto.getPartiel1ElectroniqueAnalogique())
                .partiel2ElectroniqueAnalogique(dto.getPartiel2ElectroniqueAnalogique())
                .projetElectroniqueAnalogique(dto.getProjetElectroniqueAnalogique())
                .rapportElectroniqueAnalogique(dto.getRapportElectroniqueAnalogique())
                .exposeElectroniqueAnalogique(dto.getExposeElectroniqueAnalogique())
                .stageElectroniqueAnalogique(dto.getStageElectroniqueAnalogique())
                .coefElectroniqueAnalogique(dto.getCoefElectroniqueAnalogique())
                .noteFinaleElectroniqueAnalogique(dto.getNoteFinaleElectroniqueAnalogique())
                .cCElectroniqueNumerique(dto.getCCElectroniqueNumerique())
                .tPElectroniqueNumerique(dto.getTPElectroniqueNumerique())
                .partiel1ElectroniqueNumerique(dto.getPartiel1ElectroniqueNumerique())
                .partiel2ElectroniqueNumerique(dto.getPartiel2ElectroniqueNumerique())
                .projetElectroniqueNumerique(dto.getProjetElectroniqueNumerique())
                .rapportElectroniqueNumerique(dto.getRapportElectroniqueNumerique())
                .exposeElectroniqueNumerique(dto.getExposeElectroniqueNumerique())
                .stageElectroniqueNumerique(dto.getStageElectroniqueNumerique())
                .coefElectroniqueNumerique(dto.getCoefElectroniqueNumerique())
                .noteFinaleElectroniqueNumerique(dto.getNoteFinaleElectroniqueNumerique())
                .cCArchitectureEtStructureDesOrdinateurs(dto.getCCArchitectureEtStructureDesOrdinateurs())
                .tPArchitectureEtStructureDesOrdinateurs(dto.getTPArchitectureEtStructureDesOrdinateurs())
                .partiel1ArchitectureEtStructureDesOrdinateurs(dto.getPartiel1ArchitectureEtStructureDesOrdinateurs())
                .partiel2ArchitectureEtStructureDesOrdinateurs(dto.getPartiel2ArchitectureEtStructureDesOrdinateurs())
                .projetArchitectureEtStructureDesOrdinateurs(dto.getProjetArchitectureEtStructureDesOrdinateurs())
                .rapportArchitectureEtStructureDesOrdinateurs(dto.getRapportArchitectureEtStructureDesOrdinateurs())
                .exposeArchitectureEtStructureDesOrdinateurs(dto.getExposeArchitectureEtStructureDesOrdinateurs())
                .stageArchitectureEtStructureDesOrdinateurs(dto.getStageArchitectureEtStructureDesOrdinateurs())
                .coefArchitectureEtStructureDesOrdinateurs(dto.getCoefArchitectureEtStructureDesOrdinateurs())
                .noteFinaleArchitectureEtStructureDesOrdinateurs(dto.getNoteFinaleArchitectureEtStructureDesOrdinateurs())
                .build();
    }

    public Semestre5DTO map(Semestre5 dto) {
        return Semestre5DTO.builder()
                .studentNum(dto.getStudentNum())
                .coefUELanguesVivantes5(dto.getCoefUELanguesVivantes5())
                .noteFinaleUELanguesVivantes5(dto.getNoteFinaleUELanguesVivantes5())
                .coefUECultureEntreprise5(dto.getCoefUECultureEntreprise5())
                .noteFinaleUECultureEntreprise5(dto.getNoteFinaleUECultureEntreprise5())
                .coefUEOutilsDeBasePourIngenieur1(dto.getCoefUEOutilsDeBasePourIngenieur1())
                .noteFinaleUEOutilsDeBasePourIngenieur1(dto.getNoteFinaleUEOutilsDeBasePourIngenieur1())
                .coefUEHarmonisation(dto.getCoefUEHarmonisation())
                .noteFinaleUEHarmonisation(dto.getNoteFinaleUEHarmonisation())
                .cCConferencesIntroductionAuxTelecommunications(dto.getCCConferencesIntroductionAuxTelecommunications())
                .tPConferencesIntroductionAuxTelecommunications(dto.getTPConferencesIntroductionAuxTelecommunications())
                .partiel1ConferencesIntroductionAuxTelecommunications(dto.getPartiel1ConferencesIntroductionAuxTelecommunications())
                .partiel2ConferencesIntroductionAuxTelecommunications(dto.getPartiel2ConferencesIntroductionAuxTelecommunications())
                .projetConferencesIntroductionAuxTelecommunications(dto.getProjetConferencesIntroductionAuxTelecommunications())
                .rapportConferencesIntroductionAuxTelecommunications(dto.getRapportConferencesIntroductionAuxTelecommunications())
                .exposeConferencesIntroductionAuxTelecommunications(dto.getExposeConferencesIntroductionAuxTelecommunications())
                .stageConferencesIntroductionAuxTelecommunications(dto.getStageConferencesIntroductionAuxTelecommunications())
                .coefConferencesIntroductionAuxTelecommunications(dto.getCoefConferencesIntroductionAuxTelecommunications())
                .noteFinaleConferencesIntroductionAuxTelecommunications(dto.getNoteFinaleConferencesIntroductionAuxTelecommunications())
                .cCHarmonisationElectromagnetisme(dto.getCCHarmonisationElectromagnetisme())
                .tPHarmonisationElectromagnetisme(dto.getTPHarmonisationElectromagnetisme())
                .partiel1HarmonisationElectromagnetisme(dto.getPartiel1HarmonisationElectromagnetisme())
                .partiel2HarmonisationElectromagnetisme(dto.getPartiel2HarmonisationElectromagnetisme())
                .projetHarmonisationElectromagnetisme(dto.getProjetHarmonisationElectromagnetisme())
                .rapportHarmonisationElectromagnetisme(dto.getRapportHarmonisationElectromagnetisme())
                .exposeHarmonisationElectromagnetisme(dto.getExposeHarmonisationElectromagnetisme())
                .stageHarmonisationElectromagnetisme(dto.getStageHarmonisationElectromagnetisme())
                .coefHarmonisationElectromagnetisme(dto.getCoefHarmonisationElectromagnetisme())
                .noteFinaleHarmonisationElectromagnetisme(dto.getNoteFinaleHarmonisationElectromagnetisme())
                .cCHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getCCHarmonisationElectroniqueAnalogiqueEtNumerique())
                .tPHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getTPHarmonisationElectroniqueAnalogiqueEtNumerique())
                .partiel1HarmonisationElectroniqueAnalogiqueEtNumerique(dto.getPartiel1HarmonisationElectroniqueAnalogiqueEtNumerique())
                .partiel2HarmonisationElectroniqueAnalogiqueEtNumerique(dto.getPartiel2HarmonisationElectroniqueAnalogiqueEtNumerique())
                .projetHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getProjetHarmonisationElectroniqueAnalogiqueEtNumerique())
                .rapportHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getRapportHarmonisationElectroniqueAnalogiqueEtNumerique())
                .exposseHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getExposseHarmonisationElectroniqueAnalogiqueEtNumerique())
                .stageHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getStageHarmonisationElectroniqueAnalogiqueEtNumerique())
                .coefHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getCoefHarmonisationElectroniqueAnalogiqueEtNumerique())
                .noteFinaleHarmonisationElectroniqueAnalogiqueEtNumerique(dto.getNoteFinaleHarmonisationElectroniqueAnalogiqueEtNumerique())
                .coefHarmonisationCalcul(dto.getCoefHarmonisationCalcul())
                .tPHarmonisationCalcul(dto.getTPHarmonisationCalcul())
                .partiel1HarmonisationCalcul(dto.getPartiel1HarmonisationCalcul())
                .partiel2HarmonisationCalcul(dto.getPartiel2HarmonisationCalcul())
                .projetHarmonisationCalcul(dto.getProjetHarmonisationCalcul())
                .rapportHarmonisationCalcul(dto.getRapportHarmonisationCalcul())
                .exposeHarmonisationCalcul(dto.getExposeHarmonisationCalcul())
                .stageHarmonisationCalcul(dto.getStageHarmonisationCalcul())
                .coefHarmonisationCalcul(dto.getCoefHarmonisationCalcul())
                .noteFinaleHarmonisationCalcul(dto.getNoteFinaleHarmonisationCalcul())
                .cCProjetElectronique(dto.getCCProjetElectronique())
                .tPProjetElectronique(dto.getTPProjetElectronique())
                .partiel1ProjetElectronique(dto.getPartiel1ProjetElectronique())
                .partiel2ProjetElectronique(dto.getPartiel2ProjetElectronique())
                .projetProjetElectronique(dto.getProjetProjetElectronique())
                .rapportProjetElectronique(dto.getRapportProjetElectronique())
                .exposeProjetElectronique(dto.getExposeProjetElectronique())
                .stageProjetElectronique(dto.getStageProjetElectronique())
                .coefProjetElectronique(dto.getCoefProjetElectronique())
                .noteFinaleProjetElectronique(dto.getNoteFinaleProjetElectronique())
                .coefUEElectronique(dto.getCoefUEElectronique())
                .noteFinaleUEElectronique(dto.getNoteFinaleUEElectronique())
                .cCElectroniqueAnalogique(dto.getCCElectroniqueAnalogique())
                .tPElectroniqueAnalogique(dto.getTPElectroniqueAnalogique())
                .partiel1ElectroniqueAnalogique(dto.getPartiel1ElectroniqueAnalogique())
                .partiel2ElectroniqueAnalogique(dto.getPartiel2ElectroniqueAnalogique())
                .projetElectroniqueAnalogique(dto.getProjetElectroniqueAnalogique())
                .rapportElectroniqueAnalogique(dto.getRapportElectroniqueAnalogique())
                .exposeElectroniqueAnalogique(dto.getExposeElectroniqueAnalogique())
                .stageElectroniqueAnalogique(dto.getStageElectroniqueAnalogique())
                .coefElectroniqueAnalogique(dto.getCoefElectroniqueAnalogique())
                .noteFinaleElectroniqueAnalogique(dto.getNoteFinaleElectroniqueAnalogique())
                .cCElectroniqueNumerique(dto.getCCElectroniqueNumerique())
                .tPElectroniqueNumerique(dto.getTPElectroniqueNumerique())
                .partiel1ElectroniqueNumerique(dto.getPartiel1ElectroniqueNumerique())
                .partiel2ElectroniqueNumerique(dto.getPartiel2ElectroniqueNumerique())
                .projetElectroniqueNumerique(dto.getProjetElectroniqueNumerique())
                .rapportElectroniqueNumerique(dto.getRapportElectroniqueNumerique())
                .exposeElectroniqueNumerique(dto.getExposeElectroniqueNumerique())
                .stageElectroniqueNumerique(dto.getStageElectroniqueNumerique())
                .coefElectroniqueNumerique(dto.getCoefElectroniqueNumerique())
                .noteFinaleElectroniqueNumerique(dto.getNoteFinaleElectroniqueNumerique())
                .cCArchitectureEtStructureDesOrdinateurs(dto.getCCArchitectureEtStructureDesOrdinateurs())
                .tPArchitectureEtStructureDesOrdinateurs(dto.getTPArchitectureEtStructureDesOrdinateurs())
                .partiel1ArchitectureEtStructureDesOrdinateurs(dto.getPartiel1ArchitectureEtStructureDesOrdinateurs())
                .partiel2ArchitectureEtStructureDesOrdinateurs(dto.getPartiel2ArchitectureEtStructureDesOrdinateurs())
                .projetArchitectureEtStructureDesOrdinateurs(dto.getProjetArchitectureEtStructureDesOrdinateurs())
                .rapportArchitectureEtStructureDesOrdinateurs(dto.getRapportArchitectureEtStructureDesOrdinateurs())
                .exposeArchitectureEtStructureDesOrdinateurs(dto.getExposeArchitectureEtStructureDesOrdinateurs())
                .stageArchitectureEtStructureDesOrdinateurs(dto.getStageArchitectureEtStructureDesOrdinateurs())
                .coefArchitectureEtStructureDesOrdinateurs(dto.getCoefArchitectureEtStructureDesOrdinateurs())
                .noteFinaleArchitectureEtStructureDesOrdinateurs(dto.getNoteFinaleArchitectureEtStructureDesOrdinateurs())
                .build();
    }
}
