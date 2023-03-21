package com.pfe.pfebackend.api.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "semestre5")
@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class Semestre5 {
    @Id
    @Column
    private Long studentNum;
    @Column
    private Integer coefUELanguesVivantes5;
    @Column
    private Integer noteFinaleUELanguesVivantes5;
    @Column
    private Integer coefUECultureEntreprise5;
    @Column
    private Integer noteFinaleUECultureEntreprise5;
    @Column
    private Integer coefUEOutilsDeBasePourIngenieur1;
    @Column
    private Integer noteFinaleUEOutilsDeBasePourIngenieur1;
    @Column
    private Integer coefUEHarmonisation;
    @Column
    private Integer noteFinaleUEHarmonisation;
    @Column
    private Integer cCConferencesIntroductionAuxTelecommunications;
    @Column
    private Integer tPConferencesIntroductionAuxTelecommunications;
    @Column
    private Integer partiel1ConferencesIntroductionAuxTelecommunications;
    @Column
    private Integer partiel2ConferencesIntroductionAuxTelecommunications;
    @Column
    private Integer projetConferencesIntroductionAuxTelecommunications;
    @Column
    private Integer rapportConferencesIntroductionAuxTelecommunications;
    @Column
    private Integer exposeConferencesIntroductionAuxTelecommunications;
    @Column
    private Integer stageConferencesIntroductionAuxTelecommunications;
    @Column
    private Integer coefConferencesIntroductionAuxTelecommunications;
    @Column
    private Integer noteFinaleConferencesIntroductionAuxTelecommunications;
    @Column
    private Integer cCHarmonisationElectromagnetisme;
    @Column
    private Integer tPHarmonisationElectromagnetisme;
    @Column
    private Integer partiel1HarmonisationElectromagnetisme;
    @Column
    private Integer partiel2HarmonisationElectromagnetisme;
    @Column
    private Integer projetHarmonisationElectromagnetisme;
    @Column
    private Integer rapportHarmonisationElectromagnetisme;
    @Column
    private Integer exposeHarmonisationElectromagnetisme;
    @Column
    private Integer stageHarmonisationElectromagnetisme;
    @Column
    private Integer coefHarmonisationElectromagnetisme;
    @Column
    private Integer noteFinaleHarmonisationElectromagnetisme;
    @Column
    private Integer cCHarmonisationElectroniqueAnalogiqueEtNumerique;
    @Column
    private Integer tPHarmonisationElectroniqueAnalogiqueEtNumerique;
    @Column
    private Integer partiel1HarmonisationElectroniqueAnalogiqueEtNumerique;
    @Column
    private Integer partiel2HarmonisationElectroniqueAnalogiqueEtNumerique;
    @Column
    private Integer projetHarmonisationElectroniqueAnalogiqueEtNumerique;
    @Column
    private Integer rapportHarmonisationElectroniqueAnalogiqueEtNumerique;
    @Column
    private Integer exposseHarmonisationElectroniqueAnalogiqueEtNumerique;
    @Column
    private Integer stageHarmonisationElectroniqueAnalogiqueEtNumerique;
    @Column
    private Integer coefHarmonisationElectroniqueAnalogiqueEtNumerique;
    @Column
    private Integer noteFinaleHarmonisationElectroniqueAnalogiqueEtNumerique;
    @Column
    private Integer cCHarmonisationCalcul;
    @Column
    private Integer tPHarmonisationCalcul;
    @Column
    private Integer partiel1HarmonisationCalcul;
    @Column
    private Integer partiel2HarmonisationCalcul;
    @Column
    private Integer projetHarmonisationCalcul;
    @Column
    private Integer rapportHarmonisationCalcul;
    @Column
    private Integer exposeHarmonisationCalcul;
    @Column
    private Integer stageHarmonisationCalcul;
    @Column
    private Integer coefHarmonisationCalcul;
    @Column
    private Integer noteFinaleHarmonisationCalcul;
    @Column
    private Integer cCProjetElectronique;
    @Column
    private Integer tPProjetElectronique;
    @Column
    private Integer partiel1ProjetElectronique;
    @Column
    private Integer partiel2ProjetElectronique;
    @Column
    private Integer projetProjetElectronique;
    @Column
    private Integer rapportProjetElectronique;
    @Column
    private Integer exposeProjetElectronique;
    @Column
    private Integer stageProjetElectronique;
    @Column
    private Integer coefProjetElectronique;
    @Column
    private Integer noteFinaleProjetElectronique;
    @Column
    private Integer coefUEElectronique;
    @Column
    private Integer noteFinaleUEElectronique;
    @Column
    private Integer cCElectroniqueAnalogique;
    @Column
    private Integer tPElectroniqueAnalogique;
    @Column
    private Integer partiel1ElectroniqueAnalogique;
    @Column
    private Integer partiel2ElectroniqueAnalogique;
    @Column
    private Integer projetElectroniqueAnalogique;
    @Column
    private Integer rapportElectroniqueAnalogique;
    @Column
    private Integer exposeElectroniqueAnalogique;
    @Column
    private Integer stageElectroniqueAnalogique;
    @Column
    private Integer coefElectroniqueAnalogique;
    @Column
    private Integer noteFinaleElectroniqueAnalogique;
    @Column
    private Integer cCElectroniqueNumerique;
    @Column
    private Integer tPElectroniqueNumerique;
    @Column
    private Integer partiel1ElectroniqueNumerique;
    @Column
    private Integer partiel2ElectroniqueNumerique;
    @Column
    private Integer projetElectroniqueNumerique;
    @Column
    private Integer rapportElectroniqueNumerique;
    @Column
    private Integer exposeElectroniqueNumerique;
    @Column
    private Integer stageElectroniqueNumerique;
    @Column
    private Integer coefElectroniqueNumerique;
    @Column
    private Integer noteFinaleElectroniqueNumerique;
    @Column
    private Integer cCArchitectureEtStructureDesOrdinateurs;
    @Column
    private Integer tPArchitectureEtStructureDesOrdinateurs;
    @Column
    private Integer partiel1ArchitectureEtStructureDesOrdinateurs;
    @Column
    private Integer partiel2ArchitectureEtStructureDesOrdinateurs;
    @Column
    private Integer projetArchitectureEtStructureDesOrdinateurs;
    @Column
    private Integer rapportArchitectureEtStructureDesOrdinateurs;
    @Column
    private Integer exposeArchitectureEtStructureDesOrdinateurs;
    @Column
    private Integer stageArchitectureEtStructureDesOrdinateurs;
    @Column
    private Integer coefArchitectureEtStructureDesOrdinateurs;
    @Column
    private Integer noteFinaleArchitectureEtStructureDesOrdinateurs;
}
