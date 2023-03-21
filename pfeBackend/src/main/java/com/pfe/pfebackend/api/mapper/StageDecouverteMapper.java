package com.pfe.pfebackend.api.mapper;

import com.pfe.pfebackend.api.dto.StageDecouverteDTO;
import com.pfe.pfebackend.api.entity.StageDecouverte;
import org.springframework.stereotype.Component;

@Component
public class StageDecouverteMapper {
    public StageDecouverte map(StageDecouverteDTO dto) {
        return StageDecouverte.builder()
                .studentNum(dto.getStudentNum())
                .entreprise(dto.getEntreprise())
                .telEntreprise(dto.getTelEntreprise())
                .emailEntreprise(dto.getEmailEntreprise())
                .duree(dto.getDuree())
                .sujet(dto.getSujet())
                .tuteur(dto.getTuteur())
                .telTuteur(dto.getTelTuteur())
                .dateSoutenace(dto.getDateSoutenace())
                .creneauxSoutenance(dto.getCreneauxSoutenance())
                .build();
    }

    public StageDecouverteDTO map(StageDecouverte dto) {
        return StageDecouverteDTO.builder()
                .studentNum(dto.getStudentNum())
                .entreprise(dto.getEntreprise())
                .telEntreprise(dto.getTelEntreprise())
                .emailEntreprise(dto.getEmailEntreprise())
                .duree(dto.getDuree())
                .sujet(dto.getSujet())
                .tuteur(dto.getTuteur())
                .telTuteur(dto.getTelTuteur())
                .dateSoutenace(dto.getDateSoutenace())
                .creneauxSoutenance(dto.getCreneauxSoutenance())
                .build();
    }
}
